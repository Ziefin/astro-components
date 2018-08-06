import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";

/**
 * @polymer
 * @extends HTMLElement
 */
export class RuxProgress extends PolymerElement {
  static get properties() {
    return {
      max: {
        type: Number,
        value: 100
      },
      value: Number,
      label: {
        type: Boolean,
        value: false
      }
    };
  }
  static get template() {
    return html`
      <style>
      .rux-progress {
        --progressPadding: 2px 0 0 2px;
        --progressRadius: 10px;
        --progressHeight: 14px;
        --progressWidth: calc(100% - 4px);
      
        display: flex;
        position: relative;
      
        justify-content: space-between;
        align-items: center;
      }
      
      .rux-progress progress[value] {
        appearance: none;
      
        /* background: #21384f; */
        background-color: var(
          --progressDeterminateTrackBackgroundColor,
          rgb(30, 47, 66)
        );
        border: 1px solid var(--progressDeterminateTrackBorderColor, rgb(20, 32, 44));
        border-radius: var(--progressRadius);
        height: 20px;
        width: 100%;
      }
      
      .rux-progress__value {
        margin-left: 0.25rem;
        width: 5.5rem;
        text-align: right;
        font-size: 24px;
        color: var(--controlLabelColor, #fff);
      }
      
      .rux-progress progress[value]::-webkit-progress-bar {
        background-color: transparent;
      }
      
      .rux-progress progress[value]::-webkit-progress-value {
        border-radius: var(--progressRadius);
      
        height: var(--progressHeight);
        margin: var(--progressPadding);
        max-width: var(--progressWidth);
      
        background: var(--progressDeterminateBarBackgroundColor, rgb(77, 172, 255));
      }
      
      .rux-progress progress[value]::-ms-fill {
        border-radius: var(--progressRadius);
      
        height: var(--progressHeight), 14px;
        margin: var(--progressPadding, 2px);
        max-width: var(--progressWidth);
      
        background: var(--progressDeterminateBarBackgroundColor, rgb(77, 172, 255));
      }
      
      .rux-progress progress[value]::-moz-progress-bar {
        border-radius: var(--progressRadius);
      
        margin: 2px 2px 0 2px;
        height: var(--progressHeight);
        max-width: var(--progressWidth);
      
        background: var(--progressDeterminateBarBackgroundColor, rgb(77, 172, 255));
      }
      
      /* Indeterminate */
      .rux-progress progress:indeterminate {
        -webkit-appearance: none;
      
        position: relative;
      
        height: 5rem;
        width: 5rem;
        background-color: transparent;
        /* outline: 1px solid rgba(0, 255, 0, 0.2); */
        border: none;
      
        background-image: var(
          --progressIndeterminate,
          url("data:image/svg+xml,%3Csvg width='64' height='64' xmlns='http://www.w3.org/2000/svg'%3E %3Cdefs%3E %3ClinearGradient x1='65.479%25' y1='-8.436%25' x2='50%25' y2='100%25' id='a'%3E %3Cstop stop-color='%235CB3FF' offset='0%25'/%3E %3Cstop stop-color='%23010F1B' stop-opacity='0' offset='100%25'/%3E %3C/linearGradient%3E %3C/defs%3E %3Cg fill='none' fill-rule='evenodd'%3E %3Cpath d='M32 64C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32zm0-6c14.36 0 26-11.64 26-26S46.36 6 32 6 6 17.64 6 32s11.64 26 26 26z' fill='%23192B3C'/%3E %3Cpath d='M51.908 8.236l-2.358 3.245A26.894 26.894 0 0 0 32 5C17.088 5 5 17.088 5 32s12.088 27 27 27c1.129 0 2.242-.07 3.334-.204l4.435 3.222C37.286 62.66 34.683 63 32 63 14.88 63 1 49.12 1 32 1 14.88 14.88 1 32 1c7.579 0 14.522 2.72 19.908 7.236z' fill='url(%23a)'/%3E %3Cpath d='M47.564 12c1.92 0 3.557-.64 4.075-2.367.112-.375.361-.67.361-1.08C52 6.248 50.572 4 48.234 4S44 5.867 44 8.17c0 2.304 1.225 3.83 3.564 3.83z' fill='%2352AEFF'/%3E %3C/g%3E %3C/svg%3E ")
        );
        background-repeat: no-repeat;
        background-position: center center;
      
        animation-name: spin;
        animation-duration: 1.367s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
      }
      
      /* Removes the default animation from IE */
      .rux-progress progress:indeterminate::-ms-fill {
        animation-name: none;
      }
      
      .rux-progress progress:indeterminate::-moz-progress-bar {
        background-color: transparent;
      }
      
      .rux-progress progress:indeterminate::-webkit-progress-value,
      .rux-progress progress:indeterminate::-webkit-progress-bar {
        background-color: transparent;
      }
      
      @keyframes spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
</style>      

      <div class="rux-progress">
        <progress value="[[value]]" max=[[max]]></progress>
        <div class="rux-progress__value" hidden="[[!label]]">[[value]]</div>
      </div>`;
  }
  constructor() {
    super();
  }
  connectedCallback() {
    super.connectedCallback();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
  }
  ready() {
    super.ready();
  }
}
customElements.define("rux-progress", RuxProgress);
