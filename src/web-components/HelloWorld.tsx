import React from "react";
import ReactDOM from "react-dom";
import { HelloWorld } from "../components";

export default class HelloWorldWC extends HTMLElement {
  private _name: string;

  static get observedAttributes() {
    return ["name"];
  }

  constructor() {
    super();
    this._name = "";
    this.render();
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (name === "name") {
      this._name = newValue;
    }

    this.render();
  }

  render() {
    const root = this.attachShadow({ mode: "open" });
    const mountPoint = document.createElement("div");

    root.appendChild(mountPoint);

    ReactDOM.render(<HelloWorld name={this._name} />, mountPoint);
    // this.innerHTML = `
    //   <div class="hello-world">
    //     <h3>Hello World from ${this._name}
    //   </div>
    // `;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }
}
