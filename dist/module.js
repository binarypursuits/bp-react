import * as $hgUW1$react from "react";
import * as $hgUW1$monacoeditor from "monaco-editor";

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
parcelRequire.register("aZAZD", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
var $ef67a631a107dc40$var$_exportNames = {
};
Object.defineProperty(module.exports, "default", {
    enumerable: true,
    get: function get() {
        return $ef67a631a107dc40$var$_MonacoEditor["default"];
    }
});

var $ef67a631a107dc40$var$_MonacoEditor = $ef67a631a107dc40$var$_interopRequireDefault((parcelRequire("b5o6o")));

var $hoESS = parcelRequire("hoESS");
Object.keys($hoESS).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (Object.prototype.hasOwnProperty.call($ef67a631a107dc40$var$_exportNames, key)) return;
    if (key in module.exports && module.exports[key] === $hoESS[key]) return;
    Object.defineProperty(module.exports, key, {
        enumerable: true,
        get: function get() {
            return $hoESS[key];
        }
    });
});
function $ef67a631a107dc40$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}

});
parcelRequire.register("b5o6o", function(module, exports) {
"use strict";
function $e96fceff2a29a949$var$_typeof(obj1) {
    return $e96fceff2a29a949$var$_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, $e96fceff2a29a949$var$_typeof(obj1);
}
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports["default"] = $e96fceff2a29a949$var$MonicoEditor;

var $e96fceff2a29a949$var$_react = $e96fceff2a29a949$var$_interopRequireWildcard($hgUW1$react);

var $e96fceff2a29a949$var$monaco = $e96fceff2a29a949$var$_interopRequireWildcard($hgUW1$monacoeditor);
function $e96fceff2a29a949$var$_getRequireWildcardCache(nodeInterop1) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return ($e96fceff2a29a949$var$_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop1);
}
function $e96fceff2a29a949$var$_interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || $e96fceff2a29a949$var$_typeof(obj) !== "object" && typeof obj !== "function") return {
        "default": obj
    };
    var cache = $e96fceff2a29a949$var$_getRequireWildcardCache(nodeInterop);
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
function $e96fceff2a29a949$var$MonicoEditor(_ref) {
    var options = _ref.options;
    var divEl = (0, $e96fceff2a29a949$var$_react.useRef)(null);
    var editor;
    (0, $e96fceff2a29a949$var$_react.useEffect)(function() {
        if (divEl.current) editor = $e96fceff2a29a949$var$monaco.editor.create(divEl.current, options);
        return function() {
            editor.dispose();
        };
    }, []);
    return(/*#__PURE__*/ $e96fceff2a29a949$var$_react["default"].createElement("div", {
        className: "Editor",
        ref: divEl
    }));
}

});

parcelRequire.register("hoESS", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

});


var $149c1bd638913645$exports = {};
"use strict";
Object.defineProperty($149c1bd638913645$exports, "__esModule", {
    value: true
});
var $a69491ea5a126553$exports = {};
"use strict";
Object.defineProperty($a69491ea5a126553$exports, "__esModule", {
    value: true
});
Object.defineProperty($a69491ea5a126553$exports, "MonacoEditor", {
    enumerable: true,
    get: function get() {
        return $a69491ea5a126553$var$_MonacoEditor["default"];
    }
});

var $a69491ea5a126553$var$_MonacoEditor = $a69491ea5a126553$var$_interopRequireDefault((parcelRequire("aZAZD")));
function $a69491ea5a126553$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}


Object.keys($a69491ea5a126553$exports).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in $149c1bd638913645$exports && $149c1bd638913645$exports[key] === $a69491ea5a126553$exports[key]) return;
    Object.defineProperty($149c1bd638913645$exports, key, {
        enumerable: true,
        get: function get() {
            return $a69491ea5a126553$exports[key];
        }
    });
});


export {$149c1bd638913645$exports as default};
//# sourceMappingURL=module.js.map
