var $8zHUo$react = require("react");
var $8zHUo$monacoeditor = require("monaco-editor");

var $parcel$global =
typeof globalThis !== 'undefined'
  ? globalThis
  : typeof self !== 'undefined'
  ? self
  : typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
  ? global
  : {};
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequire6572"];
if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequire6572"] = parcelRequire;
}
parcelRequire.register("5lvQC", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
var $3a733bbdd1bd8be3$var$_exportNames = {
};
Object.defineProperty(module.exports, "default", {
    enumerable: true,
    get: function get() {
        return $3a733bbdd1bd8be3$var$_MonacoEditor["default"];
    }
});

var $3a733bbdd1bd8be3$var$_MonacoEditor = $3a733bbdd1bd8be3$var$_interopRequireDefault((parcelRequire("15m15")));

var $3rcUA = parcelRequire("3rcUA");
Object.keys($3rcUA).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (Object.prototype.hasOwnProperty.call($3a733bbdd1bd8be3$var$_exportNames, key)) return;
    if (key in module.exports && module.exports[key] === $3rcUA[key]) return;
    Object.defineProperty(module.exports, key, {
        enumerable: true,
        get: function get() {
            return $3rcUA[key];
        }
    });
});
function $3a733bbdd1bd8be3$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}

});
parcelRequire.register("15m15", function(module, exports) {
"use strict";
function $38d1f9eda9666a9c$var$_typeof(obj1) {
    return $38d1f9eda9666a9c$var$_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, $38d1f9eda9666a9c$var$_typeof(obj1);
}
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports["default"] = $38d1f9eda9666a9c$var$MonicoEditor;

var $38d1f9eda9666a9c$var$_react = $38d1f9eda9666a9c$var$_interopRequireWildcard($8zHUo$react);

var $38d1f9eda9666a9c$var$monaco = $38d1f9eda9666a9c$var$_interopRequireWildcard($8zHUo$monacoeditor);
function $38d1f9eda9666a9c$var$_getRequireWildcardCache(nodeInterop1) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return ($38d1f9eda9666a9c$var$_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop1);
}
function $38d1f9eda9666a9c$var$_interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || $38d1f9eda9666a9c$var$_typeof(obj) !== "object" && typeof obj !== "function") return {
        "default": obj
    };
    var cache = $38d1f9eda9666a9c$var$_getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj["default"] = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
// @ts-ignore
self.MonacoEnvironment = {
    getWorkerUrl: function getWorkerUrl(_moduleId, label) {
        if (label === 'json') return './json.worker.bundle.js';
        if (label === 'css' || label === 'scss' || label === 'less') return './css.worker.bundle.js';
        if (label === 'html' || label === 'handlebars' || label === 'razor') return './html.worker.bundle.js';
        if (label === 'typescript' || label === 'javascript') return './ts.worker.bundle.js';
        return './editor.worker.bundle.js';
    }
};
function $38d1f9eda9666a9c$var$MonicoEditor(_ref) {
    var options = _ref.options;
    var divEl = (0, $38d1f9eda9666a9c$var$_react.useRef)(null);
    var editor;
    (0, $38d1f9eda9666a9c$var$_react.useEffect)(function() {
        if (divEl.current) editor = $38d1f9eda9666a9c$var$monaco.editor.create(divEl.current, options);
        return function() {
            editor.dispose();
        };
    }, []);
    return(/*#__PURE__*/ $38d1f9eda9666a9c$var$_react["default"].createElement("div", {
        className: "Editor",
        ref: divEl
    }));
}

});

parcelRequire.register("3rcUA", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

});


"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
var $5dcc767f924b770d$exports = {};
"use strict";
Object.defineProperty($5dcc767f924b770d$exports, "__esModule", {
    value: true
});
Object.defineProperty($5dcc767f924b770d$exports, "MonacoEditor", {
    enumerable: true,
    get: function get() {
        return $5dcc767f924b770d$var$_MonacoEditor["default"];
    }
});

var $5dcc767f924b770d$var$_MonacoEditor = $5dcc767f924b770d$var$_interopRequireDefault((parcelRequire("5lvQC")));
function $5dcc767f924b770d$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}


Object.keys($5dcc767f924b770d$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in module.exports && module.exports[key] === $5dcc767f924b770d$exports[key]) return;
    Object.defineProperty(module.exports, key, {
        enumerable: true,
        get: function get() {
            return $5dcc767f924b770d$exports[key];
        }
    });
});


//# sourceMappingURL=main.js.map
