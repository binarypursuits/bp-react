var $8zHUo$reactjsxruntime = require("react/jsx-runtime");
require("react");

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
function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $2807d6594a8e9dd2$exports = {};

$parcel$defineInteropFlag($2807d6594a8e9dd2$exports);

$parcel$export($2807d6594a8e9dd2$exports, "default", () => $2807d6594a8e9dd2$export$2e2bcd8739ae039);


function $2807d6594a8e9dd2$export$2e2bcd8739ae039({ firstName: firstName , lastName: lastName  }) {
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


$parcel$exportWildcard(module.exports, $2807d6594a8e9dd2$exports);


//# sourceMappingURL=main.js.map
