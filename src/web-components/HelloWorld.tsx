import React from "react";
import ReactDOMServer from "react-dom/server";
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
    this.innerHTML = ReactDOMServer.renderToString(<HelloWorld name={this._name} />);
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }
}
