export class Component extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.name = "name";
    this.image = "image";
    this.buttonlabel = "buttonlabel";
    this.buttonlink = "buttonlink";
    this.description = "description";
    this.namefield;
    this.imagefield;
    this.buttonlabelfield;
    this.buttonlinkfield;
    this.descriptionfield;
  }

  render() {
    this.shadowRoot.innerHTML = `<style>
        :host {
  
          }

* {
  box-sizing: border-box;
}


* {
  box-sizing: border-box;
}

section {
  display: block;
  position: relative;
}

img {
  border-style: none;
}

::-webkit-input-placeholder {
  color: inherit;
  opacity: .54;
}

::-webkit-file-upload-button {
  appearance: button;
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
}

h1 {
  color: inherit;
  font-family: Roboto, sans-serif;
  font-size: 2.25rem;
  font-weight: 500;
  line-height: 1.2;
  padding: 0;
}

blockquote {
  border-bottom-width: 0 !important;
  border-color: #478ac9;
  border-left: 4px #478ac9;
  border-right-width: 0 !important;
  border-style: solid;
  border-top-width: 0 !important;
  font-style: italic;
  padding: 10px 20px;
}

.u-btn, .u-text-default {
  align-self: flex-start;
  display: table;
}

.u-btn {
  border-color: transparent;
  border-width: 0;
  cursor: pointer;
  font-family: inherit;
  font-style: initial;
  line-height: inherit;
  outline: 0;
  text-decoration: none;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;
}

.u-text-default {
  width: fit-content;
}

.u-image {
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  display: block;
  object-fit: cover;
  vertical-align: middle;
}

.u-sheet {
  margin: 0 auto;
  position: relative;
}

.u-container-layout {
  flex: 1 1 0;
  max-width: 100%;
  position: relative;
  transition-duration: inherit;
}

.u-container-layout>* {
  position: relative;
}

.u-layout-row {
  display: flex;
  flex: 1 1 auto;
}

.u-layout-row>* {
  max-height: 100%;
}

.u-layout-row {
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 100%;
  min-height: fit-content;
}

.u-layout-cell {
  background-clip: padding-box;
  background-origin: padding-box;
  display: flex;
  position: relative;
}

.u-icon {
  border-width: 0;
  display: block;
  line-height: 0;
}

.inherited-styles-for-exported-element {
  color: #111;
  font-family: "Open Sans", sans-serif;
  font-size: 1rem;
  line-height: 1.6;
}

.u-align-center {
  text-align: center;
}

.u-text {
  overflow-wrap: break-word;
  position: relative;
}

.u-image {
  color: #111;
}

.u-palette-4-light-2 {
  background-color: #adf6f2;
  color: #111;
}

a:hover {
  outline: 0;
}

svg:not(:root) {
  overflow: hidden;
}

.u-clearfix::after {
  clear: both;
  content: "";
  display: table;
}

img.u-image {
  overflow: hidden;
}

.u-file-icon img {
  height: 100%;
  object-fit: contain;
  width: 100%;
}

h1:not(.u-title) {
  font-size: 3rem;
  font-weight: 400;
  line-height: 1.1;
  margin-bottom: 20px;
  margin-top: 20px;
}

@media (max-width: 575px) {
  h1:not(.u-title) {
    font-size: 1.875rem;
  }
}

.u-section-1 .u-sheet-1 {
  min-height: 400px;
}

.u-section-1 .u-layout-wrap-1 {
  margin-bottom: 60px;
  margin-top: 60px;
  position: relative;
}

.u-section-1 .u-layout-cell-1 {
  min-height: 400px;
}

.u-section-1 .u-container-layout-1 {
  padding: 30px;
}

.u-section-1 .u-text-1 {
  margin: 7px auto 0;
}

.u-section-1 .u-image-1 {
  height: 169px;
  margin: 15px auto 0;
  width: 169px;
}

.u-section-1 .u-btn-1 {
  background-image: linear-gradient(to right, #478ac9, #2cccc4);
  border-style: solid;
  box-shadow: rgba(0, 0, 0, .25) 0 2px 6px 0;
  font-size: .9375rem;
  font-weight: 700;
  letter-spacing: 1px;
  margin: 15px auto 0;
  padding: 8px 36px 9px 35px;
  text-transform: uppercase;
}

.u-section-1 .u-layout-cell-2 {
  min-height: 400px;
}

.u-section-1 .u-container-layout-2 {
  padding: 30px;
}

.u-section-1 .u-icon-2 {
  height: 64px;
  margin: 29px auto 0;
  width: 64px;
}

.u-section-1 .u-text-2 {
  margin: 15px 0 0;
}

@media (max-width: 1199px) {

  .u-section-1 .u-layout-cell-1,   .u-section-1 .u-sheet-1 {
    min-height: 330px;
  }

  .u-section-1 .u-text-1 {
    margin-left: 53px;
  }

  .u-section-1 .u-layout-cell-2 {
    min-height: 330px;
  }
}

@media (max-width: 991px) {

  .u-section-1 .u-layout-cell-1,   .u-section-1 .u-sheet-1 {
    min-height: 100px;
  }

  .u-section-1 .u-text-1 {
    margin-left: 0;
  }

  .u-section-1 .u-layout-cell-2 {
    min-height: 100px;
  }
}

@media (max-width: 767px) {
  .u-section-1 .u-sheet-1 {
    min-height: 200px;
  }

  .u-section-1 .u-container-layout-1,   .u-section-1 .u-container-layout-2 {
    padding-left: 10px;
    padding-right: 10px;
  }
}

.u-btn:hover {
  text-decoration: none;
}

.u-btn:active {
  background-image: none;
  outline: 0;
}

.u-text-default:empty {
  display: block;
  width: 15px;
}

.u-sheet {
  width: 1140px;
}

.u-layout-row>.u-size-41 {
  flex: 0 0 68.3333%;
  max-width: 68.3333%;
  min-width: 68.3333%;
}

.u-layout-row>.u-size-19 {
  flex: 0 0 31.6667%;
  max-width: 31.6667%;
  min-width: 31.6667%;
}

.u-container-style:not([class*=u-align-]) {
  text-align: left;
}

.u-btn .u-icon {
  display: inline;
  fill: currentcolor;
  font-size: 1em;
  line-height: inherit;
  position: relative;
  vertical-align: middle;
  white-space: nowrap;
}

.u-btn .u-icon>svg {
  display: inline-block;
  height: 1em;
  line-height: 1;
  vertical-align: -.15em;
  width: 1em;
}

.u-btn:focus {
  outline: 5px auto -webkit-focus-ring-color;
  outline-offset: -2px;
}

@media (min-width: 576px) and (max-width: 767px) {
  .u-layout-wrap:not(.u-layout-custom-sm) .u-layout-row>* {
    min-width: 100%;
  }
}

@media (max-width: 575px) {
  .u-layout-wrap:not(.u-layout-custom-xs) .u-layout-row>* {
    min-width: 100%;
  }
}

.u-sheet:not(.u-image):not(.u-video) {
  pointer-events: none;
}

.u-sheet:not(.u-image):not(.u-video)>* {
  pointer-events: initial;
}

@media (min-width: 1400px) {
  .u-sheet {
    width: undefined !important;
  }
}

@media (min-width: 992px) and (max-width: 1199px) {
  .u-sheet {
    width: 940px !important;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  .u-sheet {
    width: 720px !important;
  }
}

@media (min-width: 576px) and (max-width: 767px) {
  .u-sheet {
    width: 540px !important;
  }
}

@media (max-width: 575px) {
  .u-sheet {
    width: 340px !important;
  }
}

.u-expanded-width {
  margin-left: 0 !important;
  margin-right: 0 !important;
  width: 100% !important;
}

.u-radius-4 {
  border-radius: 4px !important;
}

.u-text-white {
  color: #fff !important;
}

.u-image-circle.u-image {
  border-radius: 50% !important;
}

@media (min-width: 1200px) {
  .u-sheet {
    width: 1140px !important;
  }
}

.u-none.u-button-style {
  background-color: transparent !important;
}

.u-text-body-alt-color {
  color: #fff !important;
}

.u-btn .u-icon>svg+img {
  border: initial !important;
  border-color: initial !important;
  border-image: initial initial initial initial initial !important;
  box-shadow: none !important;
  display: inline !important;
  height: 0 !important;
  left: calc(50% - .5em) !important;
  line-height: 1 !important;
  margin: 0 !important;
  min-height: 0 !important;
  min-width: 0 !important;
  outline: 0 !important;
  padding: .5em !important;
  position: absolute !important;
  top: calc(50% - .5em) !important;
  width: 0 !important;
}

@media (min-width: 576px) and (max-width: 767px) {
  .u-layout-wrap:not(.u-layout-custom-sm) .u-layout {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
}

@media (max-width: 575px) {
  .u-layout-wrap:not(.u-layout-custom-xs) .u-layout {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
}

a.u-button-style.u-text-body-alt-color:hover {
  color: #e6e6e6 !important;
}

@media (min-width: 576px) and (max-width: 767px) {
  .u-layout-wrap:not(.u-layout-custom-sm) .u-layout .u-layout-cell {
    border-left-color: initial !important;
    border-left-style: initial !important;
    border-left-width: 0 !important;
    border-right-color: initial !important;
    border-right-style: initial !important;
    border-right-width: 0 !important;
  }
}

@media (max-width: 575px) {
  .u-layout-wrap:not(.u-layout-custom-xs) .u-layout .u-layout-cell {
    border-left-color: initial !important;
    border-left-style: initial !important;
    border-left-width: 0 !important;
    border-right-color: initial !important;
    border-right-style: initial !important;
    border-right-width: 0 !important;
  }
}


    
        </style>
      
        <section class="u-clearfix u-section-1" id="sec-b580">
      <div class="u-clearfix u-sheet u-sheet-1">
        <div class="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
          <div class="u-layout">
            <div class="u-layout-row">
              <div class="u-container-style u-layout-cell u-size-19 u-layout-cell-1">
                <div class="u-container-layout u-container-layout-1">
                  <h1 class="u-align-center u-text u-text-default u-text-1">${this.namefield}</h1>
                  <img class="u-align-center u-image u-image-circle u-image-1" src="${this.imagefield}" alt="" data-image-width="1631" data-image-height="1080">
                  <a href="${this.buttonlinkfield}" class="u-align-center u-btn u-btn-round u-button-style u-gradient u-none u-radius-4 u-text-body-alt-color u-btn-1"><span class="u-icon u-text-white"><img></span>${this.buttonlabelfield}
                  </a>
                </div>
              </div>
              <div class="u-container-style u-layout-cell u-palette-4-light-2 u-size-41 u-layout-cell-2">
                <div class="u-container-layout u-container-layout-2"><span class="u-align-center u-file-icon u-icon u-icon-2"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 344.339 344.339" style="enable-background:new 0 0 344.339 344.339;" xml:space="preserve">
                <g>
                  <g>
                    <g>
                      <path d="M291.749,166.102h-33.051V118.76h-17.876c-1.447-30.552-26.403-54.388-57.075-54.388     c-24.761,0-46.823,16.174-54.386,39.589c-7.581-23.415-29.64-39.589-54.395-39.589c-30.669,0-55.628,23.836-57.084,54.388H0     v161.208h258.687v-35.23h33.062l52.59,16.31V149.808L291.749,166.102z M70.713,149.844c-14.856,0-26.938-12.082-26.938-26.946     c0-14.847,12.075-26.932,26.938-26.932c14.861,0,26.931,12.079,26.931,26.932C97.644,137.762,85.574,149.844,70.713,149.844z      M183.23,149.844c-14.862,0-26.938-12.082-26.938-26.946c0-14.847,12.076-26.932,26.938-26.932     c14.855,0,26.938,12.079,26.938,26.932C210.168,137.762,198.099,149.844,183.23,149.844z"/>
                    </g>
                  </g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                </svg></span>
                  <blockquote class="u-align-center u-text u-text-default u-text-2">${this.descriptionfield}</blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>`;
  }

  connectedCallback() {
    const recordId = Object.keys(records);
    this.namefield = records[recordId].record.fields[this.name]
      ? records[recordId].record.fields[this.name]
      : this.name;

    this.imagefield = records[recordId].record.fields[this.image]
      ? records[recordId].record.fields[this.image]
      : this.image;

    this.buttonlabelfield = records[recordId].record.fields[this.buttonlabel]
      ? records[recordId].record.fields[this.buttonlabel]
      : this.buttonlabel;

    this.buttonlinkfield = records[recordId].record.fields[this.buttonlink]
      ? records[recordId].record.fields[this.buttonlink]
      : this.buttonlink;

    this.descriptionfield = records[recordId].record.fields[this.description]
      ? records[recordId].record.fields[this.description]
      : this.description;

    this.render();
  }

  static get observedAttributes() {
    return ["name", "image", "buttonlink", "buttonlabel", "description"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    const recordId = Object.keys(records);
    this.namefield = records[recordId].record.fields[this.name]
      ? records[recordId].record.fields[this.name]
      : this.name;

    this.imagefield = records[recordId].record.fields[this.image]
      ? records[recordId].record.fields[this.image]
      : this.image;

    this.buttonlabelfield = records[recordId].record.fields[this.buttonlabel]
      ? records[recordId].record.fields[this.buttonlabel]
      : this.buttonlabel;

    this.buttonlinkfield = records[recordId].record.fields[this.buttonlink]
      ? records[recordId].record.fields[this.buttonlink]
      : this.buttonlink;

    this.descriptionfield = records[recordId].record.fields[this.description]
      ? records[recordId].record.fields[this.description]
      : this.description;

    this.render();
  }

  set name(val) {
    if (!this.getAttribute("name")) {
      this.setAttribute("name", val);
    }
  }

  get name() {
    return this.getAttribute("name");
  }

  set image(val) {
    if (!this.getAttribute("image")) {
      this.setAttribute("image", val);
    }
  }

  get image() {
    return this.getAttribute("image");
  }

  set buttonlabel(val) {
    if (!this.getAttribute("buttonlabel")) {
      this.setAttribute("buttonlabel", val);
    }
  }

  get buttonlabel() {
    return this.getAttribute("buttonlabel");
  }

  set buttonlink(val) {
    if (!this.getAttribute("buttonlink")) {
      this.setAttribute("buttonlink", val);
    }
  }

  get buttonlink() {
    return this.getAttribute("buttonlink");
  }

  set description(val) {
    if (!this.getAttribute("description")) {
      this.setAttribute("description", val);
    }
  }

  get description() {
    return this.getAttribute("description");
  }
}

/*
    const recordId = window.location.href.split("#").pop();
    const fieldName = newValue;
    console.log(records[recordId].record.fields[fieldName]);
    
*/
