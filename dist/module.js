import {jsxs as $hgUW1$jsxs, jsx as $hgUW1$jsx} from "react/jsx-runtime";
import "react";
import $hgUW1$reactdom from "react-dom";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $a69491ea5a126553$exports = {};

$parcel$export($a69491ea5a126553$exports, "HelloWorld", () => $3777cca87b211b5a$export$2e2bcd8739ae039);


function $3777cca87b211b5a$export$2e2bcd8739ae039({ name: name = 'John Doe'  }) {
    return(/*#__PURE__*/ $hgUW1$jsxs("h1", {
        children: [
            "Hello World from ",
            name
        ]
    }));
}








var $bc1c76d679668424$exports = {};

$parcel$export($bc1c76d679668424$exports, "HelloWorldWc", () => $f57db08ba494f670$export$2e2bcd8739ae039);




class $f57db08ba494f670$export$2e2bcd8739ae039 extends HTMLElement {
    static get observedAttributes() {
        return [
            "name"
        ];
    }
    constructor(){
        super();
        this._name = "";
        this.render();
    }
    attributeChangedCallback(name, oldValue, newValue) {
        if (name === "name") this._name = newValue;
        this.render();
    }
    render() {
        const root = this.attachShadow({
            mode: "open"
        });
        const mountPoint = document.createElement("div");
        root.appendChild(mountPoint);
        $hgUW1$reactdom.render(/*#__PURE__*/ $hgUW1$jsx($3777cca87b211b5a$export$2e2bcd8739ae039, {
            name: this._name
        }), mountPoint);
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






//# sourceMappingURL=module.js.map
