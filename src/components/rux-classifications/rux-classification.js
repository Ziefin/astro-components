import { LitElement, html } from 'lit-element';
export class RuxClassification extends LitElement {
  static get properties() {
    return {
      classification: {
        type: String
      },
      type: {
        type: String
      },
      label: {
        type: String
      }
    };
  }
  
  _setClassificationMarking(marker) {
    const markingClass = this.classification.toLowerCase().replace(/\s+/g, '');
		const markingType = this.type.toLowerCase();
		const markingLabel = marker.toLowerCase().replace(/\s+/g, '');
		let bannerLabel;
		let tagLabel;
		let markingStyle;

    if(markingType && markingClass == markingLabel){
        switch(markingLabel) {
          case 'controlled':
						bannerLabel = 'cui';
						tagLabel = 'cui';
						markingStyle = 'controlled';
            break;
          case 'confidential':
						bannerLabel = 'confidential';
						tagLabel = 'c';
						markingStyle = 'confidential';
            break;
          case 'secret':
						bannerLabel = 'secret';
						tagLabel = 's';
						markingStyle = 'secret';
            break;
          case 'topsecret':
						bannerLabel = 'top secret';
						tagLabel = 'ts';
						markingStyle = 'top secret';
						break;
					case 'topsecret//sci':
						bannerLabel = 'top secret//sci';
						tagLabel = 'TS//SCI'
						markingStyle = 'top secret//sci';
						break;
          default:
						bannerLabel = 'unclassified';
						tagLabel = 'u';
						markingStyle = 'unclassified';
        }
    } else {
			bannerLabel = 'Select a Classification Marking type';
			tagLabel = bannerLabel;
    }

		const bannerType = (markingType === 'banner') ? bannerLabel : tagLabel;

		const markingData = {
			label : bannerType,
			style : markingStyle
		}

		return markingData;

  }

  constructor() {
    super();
    this.label = '';
    this.classification = 'unclassified';
		this.type = 'banner';
    this.marking = this._setClassificationMarking;
  }

  render() {
    return html`
    <style>
    :host {
      z-index:1000;
      display: flex;
      justify-content: center;
      align-items: center;
      align-content: center; 
      min-height: 26px;
      box-sizing: border-box;
      font-size: var(--fontSize);
      font-weight:bold;
      font-family: var( --fontFamily);
      text-transform:uppercase;
      color: var(--colorBlack, rgb(0, 0, 0));
      transition: top 0.5s ease;
      overflow-wrap: anywhere;
      white-space: pre-line;
    }

    :host([type='banner']){
      position: absolute;
      top: 0;
      left: 0;
      flex-wrap: nowrap;
      flex-grow: 1;		
      width: 100%;
    }
    
    :host([type='tag']){
      position: relative;
      align-items:center;			
      left: auto;
			width: fit-content;
			height: 22px;
      padding: 0 15px;
      border-radius:3px;
      font-size: var(--fontSizeMD);			
    }

    :host,
    :host([classification='${this.marking('topsecret//sci').style}']) {
      background-color: var(--classificationTopSecretSCIBackgroundColor);
    }

    :host([classification='${this.marking('topsecret').style}']){
      background-color: var(--classificationTopSecretBackgroundColor);
    }

		:host([classification='${this.marking('secret').style}']),
		:host([classification='Secret']){
      background-color: var(--classificationSecretBackgroundColor);
      color: var(--colorWhite);
    }

    :host([classification='${this.marking('confidential').style}']) {
      background-color: var(--classificationConfidentialBackgroundColor);
      color: var(--colorWhite);
    }

    :host([classification='${this.marking('controlled').style}']) {
      background-color: var(--classificationControlledBackgroundColor);
      color: var(--colorWhite);
    }

    :host([classification='${this.marking('unclassified').style}']) {
      background-color: var(--classificationUnclassifiedBackgroundColor);
      color: var(--colorWhite);
    }
    </style>
    
    <div class="rux-classification__message">${this.marking(this.classification).label}${this.label}</div>

    `;
  }
}
customElements.define('rux-classification-marking', RuxClassification);