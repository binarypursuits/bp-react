var $8zHUo$reactjsxruntime = require("react/jsx-runtime");
require("react");
var $8zHUo$reactdomserver = require("react-dom/server");

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


function $f3d6c3c15e5e0ece$export$2e2bcd8739ae039({ firstName: firstName , lastName: lastName  }) {
    return(/*#__PURE__*/ $8zHUo$reactjsxruntime.jsxs("div", {
        children: [
            /*#__PURE__*/ $8zHUo$reactjsxruntime.jsx("h1", {
                children: "Hello World"
            }),
            /*#__PURE__*/ $8zHUo$reactjsxruntime.jsx("h2", {
                children: firstName
            }),
            /*#__PURE__*/ $8zHUo$reactjsxruntime.jsx("h2", {
                children: lastName
            }),
            /*#__PURE__*/ $8zHUo$reactjsxruntime.jsx("h3", {
                children: "This might make me rich..."
            })
        ]
    }));
}






function $15e05c4af0628512$export$80e7718417253a51(props) {
    return ($parcel$interopDefault($8zHUo$reactdomserver)).renderToString(/*#__PURE__*/ $8zHUo$reactjsxruntime.jsx($f3d6c3c15e5e0ece$export$2e2bcd8739ae039, {
        ...props
    }));
}






$parcel$exportWildcard(module.exports, $5dcc767f924b770d$exports);


//# sourceMappingURL=main.js.map
