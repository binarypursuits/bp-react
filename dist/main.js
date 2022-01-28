var $8zHUo$reactjsxruntime = require("react/jsx-runtime");
require("react");
var $8zHUo$reactdom = require("react-dom");

function $parcel$exportWildcard(dest, source) {
  Object.keys(source).forEach(function(key) {
    if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function get() {
        return source[key];
      }
    });
  });

  return dest;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
var $5dcc767f924b770d$exports = {};

$parcel$export($5dcc767f924b770d$exports, "HelloWorld", () => $f3d6c3c15e5e0ece$export$2e2bcd8739ae039);


function $f3d6c3c15e5e0ece$export$2e2bcd8739ae039({ name: name = 'John Doe'  }) {
    return(/*#__PURE__*/ $8zHUo$reactjsxruntime.jsxs("h1", {
        children: [
            "Hello World from ",
            name
        ]
    }));
}








var $eec2e4ef7e09139c$exports = {};

$parcel$export($eec2e4ef7e09139c$exports, "HelloWorldWc", () => $99684c3d196dce22$export$2e2bcd8739ae039);




class $99684c3d196dce22$export$2e2bcd8739ae039 extends HTMLElement {
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
        ($parcel$interopDefault($8zHUo$reactdom)).render(/*#__PURE__*/ $8zHUo$reactjsxruntime.jsx($f3d6c3c15e5e0ece$export$2e2bcd8739ae039, {
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




$parcel$exportWildcard(module.exports, $5dcc767f924b770d$exports);
$parcel$exportWildcard(module.exports, $eec2e4ef7e09139c$exports);


//# sourceMappingURL=main.js.map
