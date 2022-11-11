import { Component } from "/component.js";
if (!customElements.get("no-code-component")) {
  window.customElements.define("no-code-component", Component);
}
