// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"6l7Nl":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "0ca4735442856b3a";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"1xC6H":[function(require,module,exports) {
var Refresh = require("6d18d6bd340e7473");
var ErrorOverlay = require("74ad5ea14201648c");
Refresh.injectIntoGlobalHook(window);
window.$RefreshReg$ = function() {};
window.$RefreshSig$ = function() {
    return function(type) {
        return type;
    };
};
ErrorOverlay.setEditorHandler(function editorHandler(errorLocation) {
    let file = `${errorLocation.fileName}:${errorLocation.lineNumber || 1}:${errorLocation.colNumber || 1}`;
    fetch(`/__parcel_launch_editor?file=${encodeURIComponent(file)}`);
});
ErrorOverlay.startReportingRuntimeErrors({
    onError: function() {}
});
window.addEventListener("parcelhmraccept", ()=>{
    ErrorOverlay.dismissRuntimeErrors();
});

},{"6d18d6bd340e7473":"786KC","74ad5ea14201648c":"1dldy"}],"90doS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let index = {
    "normal": [
        "./static/tympanic_membrane_dataset/normal/normal (372).png",
        "./static/tympanic_membrane_dataset/normal/normal (237).png",
        "./static/tympanic_membrane_dataset/normal/normal (149).png",
        "./static/tympanic_membrane_dataset/normal/normal (519).png",
        "./static/tympanic_membrane_dataset/normal/normal (325).png",
        "./static/tympanic_membrane_dataset/normal/normal (630).png",
        "./static/tympanic_membrane_dataset/normal/normal (260).png",
        "./static/tympanic_membrane_dataset/normal/normal (333).png",
        "./static/tympanic_membrane_dataset/normal/normal (299).png",
        "./static/tympanic_membrane_dataset/normal/normal (276).png",
        "./static/tympanic_membrane_dataset/normal/normal (626).png",
        "./static/tympanic_membrane_dataset/normal/normal (558).png",
        "./static/tympanic_membrane_dataset/normal/normal (364).png",
        "./static/tympanic_membrane_dataset/normal/normal (221).png",
        "./static/tympanic_membrane_dataset/normal/normal (466).png",
        "./static/tympanic_membrane_dataset/normal/normal (489).png",
        "./static/tympanic_membrane_dataset/normal/normal (173).png",
        "./static/tympanic_membrane_dataset/normal/normal (523).png",
        "./static/tympanic_membrane_dataset/normal/normal (431).png",
        "./static/tympanic_membrane_dataset/normal/normal (574).png",
        "./static/tympanic_membrane_dataset/normal/normal (124).png",
        "./static/tympanic_membrane_dataset/normal/normal (348).png",
        "./static/tympanic_membrane_dataset/normal/normal (427).png",
        "./static/tympanic_membrane_dataset/normal/normal (132).png",
        "./static/tympanic_membrane_dataset/normal/normal (562).png",
        "./static/tympanic_membrane_dataset/normal/normal (470).png",
        "./static/tympanic_membrane_dataset/normal/normal (535).png",
        "./static/tympanic_membrane_dataset/normal/normal (165).png",
        "./static/tympanic_membrane_dataset/normal/normal (309).png",
        "./static/tympanic_membrane_dataset/normal/normal (391).png",
        "./static/tympanic_membrane_dataset/normal/normal (542).png",
        "./static/tympanic_membrane_dataset/normal/normal (407).png",
        "./static/tympanic_membrane_dataset/normal/normal (329).png",
        "./static/tympanic_membrane_dataset/normal/normal (283).png",
        "./static/tympanic_membrane_dataset/normal/normal (515).png",
        "./static/tympanic_membrane_dataset/normal/normal (145).png",
        "./static/tympanic_membrane_dataset/normal/normal (450).png",
        "./static/tympanic_membrane_dataset/normal/normal (295).png",
        "./static/tympanic_membrane_dataset/normal/normal (153).png",
        "./static/tympanic_membrane_dataset/normal/normal (503).png",
        "./static/tympanic_membrane_dataset/normal/normal (446).png",
        "./static/tympanic_membrane_dataset/normal/normal (368).png",
        "./static/tympanic_membrane_dataset/normal/normal (387).png",
        "./static/tympanic_membrane_dataset/normal/normal (554).png",
        "./static/tympanic_membrane_dataset/normal/normal (411).png",
        "./static/tympanic_membrane_dataset/normal/normal (256).png",
        "./static/tympanic_membrane_dataset/normal/normal (606).png",
        "./static/tympanic_membrane_dataset/normal/normal (313).png",
        "./static/tympanic_membrane_dataset/normal/normal (190).png",
        "./static/tympanic_membrane_dataset/normal/normal (485).png",
        "./static/tympanic_membrane_dataset/normal/normal (201).png",
        "./static/tympanic_membrane_dataset/normal/normal (344).png",
        "./static/tympanic_membrane_dataset/normal/normal (597).png",
        "./static/tympanic_membrane_dataset/normal/normal (128).png",
        "./static/tympanic_membrane_dataset/normal/normal (578).png",
        "./static/tympanic_membrane_dataset/normal/normal (217).png",
        "./static/tympanic_membrane_dataset/normal/normal (647).png",
        "./static/tympanic_membrane_dataset/normal/normal (352).png",
        "./static/tympanic_membrane_dataset/normal/normal (581).png",
        "./static/tympanic_membrane_dataset/normal/normal (610).png",
        "./static/tympanic_membrane_dataset/normal/normal (240).png",
        "./static/tympanic_membrane_dataset/normal/normal (305).png",
        "./static/tympanic_membrane_dataset/normal/normal (186).png",
        "./static/tympanic_membrane_dataset/normal/normal (493).png",
        "./static/tympanic_membrane_dataset/normal/normal (169).png",
        "./static/tympanic_membrane_dataset/normal/normal (539).png",
        "./static/tympanic_membrane_dataset/normal/normal (187).png",
        "./static/tympanic_membrane_dataset/normal/normal (492).png",
        "./static/tympanic_membrane_dataset/normal/normal (168).png",
        "./static/tympanic_membrane_dataset/normal/normal (538).png",
        "./static/tympanic_membrane_dataset/normal/normal (611).png",
        "./static/tympanic_membrane_dataset/normal/normal (241).png",
        "./static/tympanic_membrane_dataset/normal/normal (304).png",
        "./static/tympanic_membrane_dataset/normal/normal (580).png",
        "./static/tympanic_membrane_dataset/normal/normal (216).png",
        "./static/tympanic_membrane_dataset/normal/normal (646).png",
        "./static/tympanic_membrane_dataset/normal/normal (353).png",
        "./static/tympanic_membrane_dataset/normal/normal (596).png",
        "./static/tympanic_membrane_dataset/normal/normal (129).png",
        "./static/tympanic_membrane_dataset/normal/normal (579).png",
        "./static/tympanic_membrane_dataset/normal/normal (650).png",
        "./static/tympanic_membrane_dataset/normal/normal (200).png",
        "./static/tympanic_membrane_dataset/normal/normal (345).png",
        "./static/tympanic_membrane_dataset/normal/normal (191).png",
        "./static/tympanic_membrane_dataset/normal/normal (484).png",
        "./static/tympanic_membrane_dataset/normal/normal (257).png",
        "./static/tympanic_membrane_dataset/normal/normal (607).png",
        "./static/tympanic_membrane_dataset/normal/normal (312).png",
        "./static/tympanic_membrane_dataset/normal/normal (555).png",
        "./static/tympanic_membrane_dataset/normal/normal (410).png",
        "./static/tympanic_membrane_dataset/normal/normal (369).png",
        "./static/tympanic_membrane_dataset/normal/normal (386).png",
        "./static/tympanic_membrane_dataset/normal/normal (152).png",
        "./static/tympanic_membrane_dataset/normal/normal (502).png",
        "./static/tympanic_membrane_dataset/normal/normal (447).png",
        "./static/tympanic_membrane_dataset/normal/normal (294).png",
        "./static/tympanic_membrane_dataset/normal/normal (514).png",
        "./static/tympanic_membrane_dataset/normal/normal (144).png",
        "./static/tympanic_membrane_dataset/normal/normal (451).png",
        "./static/tympanic_membrane_dataset/normal/normal (328).png",
        "./static/tympanic_membrane_dataset/normal/normal (282).png",
        "./static/tympanic_membrane_dataset/normal/normal (543).png",
        "./static/tympanic_membrane_dataset/normal/normal (406).png",
        "./static/tympanic_membrane_dataset/normal/normal (390).png",
        "./static/tympanic_membrane_dataset/normal/normal (308).png",
        "./static/tympanic_membrane_dataset/normal/normal (471).png",
        "./static/tympanic_membrane_dataset/normal/normal (534).png",
        "./static/tympanic_membrane_dataset/normal/normal (164).png",
        "./static/tympanic_membrane_dataset/normal/normal (426).png",
        "./static/tympanic_membrane_dataset/normal/normal (133).png",
        "./static/tympanic_membrane_dataset/normal/normal (563).png",
        "./static/tympanic_membrane_dataset/normal/normal (349).png",
        "./static/tympanic_membrane_dataset/normal/normal (1).png",
        "./static/tympanic_membrane_dataset/normal/normal (430).png",
        "./static/tympanic_membrane_dataset/normal/normal (575).png",
        "./static/tympanic_membrane_dataset/normal/normal (125).png",
        "./static/tympanic_membrane_dataset/normal/normal (467).png",
        "./static/tympanic_membrane_dataset/normal/normal (488).png",
        "./static/tympanic_membrane_dataset/normal/normal (172).png",
        "./static/tympanic_membrane_dataset/normal/normal (522).png",
        "./static/tympanic_membrane_dataset/normal/normal (365).png",
        "./static/tympanic_membrane_dataset/normal/normal (220).png",
        "./static/tympanic_membrane_dataset/normal/normal (559).png",
        "./static/tympanic_membrane_dataset/normal/normal (332).png",
        "./static/tympanic_membrane_dataset/normal/normal (298).png",
        "./static/tympanic_membrane_dataset/normal/normal (277).png",
        "./static/tympanic_membrane_dataset/normal/normal (627).png",
        "./static/tympanic_membrane_dataset/normal/normal (324).png",
        "./static/tympanic_membrane_dataset/normal/normal (631).png",
        "./static/tympanic_membrane_dataset/normal/normal (261).png",
        "./static/tympanic_membrane_dataset/normal/normal (148).png",
        "./static/tympanic_membrane_dataset/normal/normal (518).png",
        "./static/tympanic_membrane_dataset/normal/normal (373).png",
        "./static/tympanic_membrane_dataset/normal/normal (236).png",
        "./static/tympanic_membrane_dataset/normal/normal (378).png",
        "./static/tympanic_membrane_dataset/normal/normal (397).png",
        "./static/tympanic_membrane_dataset/normal/normal (544).png",
        "./static/tympanic_membrane_dataset/normal/normal (401).png",
        "./static/tympanic_membrane_dataset/normal/normal (285).png",
        "./static/tympanic_membrane_dataset/normal/normal (513).png",
        "./static/tympanic_membrane_dataset/normal/normal (143).png",
        "./static/tympanic_membrane_dataset/normal/normal (456).png",
        "./static/tympanic_membrane_dataset/normal/normal (293).png",
        "./static/tympanic_membrane_dataset/normal/normal (339).png",
        "./static/tympanic_membrane_dataset/normal/normal (155).png",
        "./static/tympanic_membrane_dataset/normal/normal (505).png",
        "./static/tympanic_membrane_dataset/normal/normal (440).png",
        "./static/tympanic_membrane_dataset/normal/normal (381).png",
        "./static/tympanic_membrane_dataset/normal/normal (552).png",
        "./static/tympanic_membrane_dataset/normal/normal (417).png",
        "./static/tympanic_membrane_dataset/normal/normal (250).png",
        "./static/tympanic_membrane_dataset/normal/normal (600).png",
        "./static/tympanic_membrane_dataset/normal/normal (315).png",
        "./static/tympanic_membrane_dataset/normal/normal (196).png",
        "./static/tympanic_membrane_dataset/normal/normal (529).png",
        "./static/tympanic_membrane_dataset/normal/normal (483).png",
        "./static/tympanic_membrane_dataset/normal/normal (179).png",
        "./static/tympanic_membrane_dataset/normal/normal (207).png",
        "./static/tympanic_membrane_dataset/normal/normal (342).png",
        "./static/tympanic_membrane_dataset/normal/normal (591).png",
        "./static/tympanic_membrane_dataset/normal/normal (211).png",
        "./static/tympanic_membrane_dataset/normal/normal (641).png",
        "./static/tympanic_membrane_dataset/normal/normal (354).png",
        "./static/tympanic_membrane_dataset/normal/normal (587).png",
        "./static/tympanic_membrane_dataset/normal/normal (568).png",
        "./static/tympanic_membrane_dataset/normal/normal (138).png",
        "./static/tympanic_membrane_dataset/normal/normal (616).png",
        "./static/tympanic_membrane_dataset/normal/normal (246).png",
        "./static/tympanic_membrane_dataset/normal/normal (303).png",
        "./static/tympanic_membrane_dataset/normal/normal (180).png",
        "./static/tympanic_membrane_dataset/normal/normal (495).png",
        "./static/tympanic_membrane_dataset/normal/normal (548).png",
        "./static/tympanic_membrane_dataset/normal/normal (118).png",
        "./static/tympanic_membrane_dataset/normal/normal (374).png",
        "./static/tympanic_membrane_dataset/normal/normal (231).png",
        "./static/tympanic_membrane_dataset/normal/normal (289).png",
        "./static/tympanic_membrane_dataset/normal/normal (323).png",
        "./static/tympanic_membrane_dataset/normal/normal (636).png",
        "./static/tympanic_membrane_dataset/normal/normal (266).png",
        "./static/tympanic_membrane_dataset/normal/normal (509).png",
        "./static/tympanic_membrane_dataset/normal/normal (159).png",
        "./static/tympanic_membrane_dataset/normal/normal (335).png",
        "./static/tympanic_membrane_dataset/normal/normal (270).png",
        "./static/tympanic_membrane_dataset/normal/normal (620).png",
        "./static/tympanic_membrane_dataset/normal/normal (362).png",
        "./static/tympanic_membrane_dataset/normal/normal (227).png",
        "./static/tympanic_membrane_dataset/normal/normal (460).png",
        "./static/tympanic_membrane_dataset/normal/normal (175).png",
        "./static/tympanic_membrane_dataset/normal/normal (525).png",
        "./static/tympanic_membrane_dataset/normal/normal (319).png",
        "./static/tympanic_membrane_dataset/normal/normal (437).png",
        "./static/tympanic_membrane_dataset/normal/normal (572).png",
        "./static/tympanic_membrane_dataset/normal/normal (122).png",
        "./static/tympanic_membrane_dataset/normal/normal (421).png",
        "./static/tympanic_membrane_dataset/normal/normal (134).png",
        "./static/tympanic_membrane_dataset/normal/normal (564).png",
        "./static/tympanic_membrane_dataset/normal/normal (358).png",
        "./static/tympanic_membrane_dataset/normal/normal (476).png",
        "./static/tympanic_membrane_dataset/normal/normal (533).png",
        "./static/tympanic_membrane_dataset/normal/normal (499).png",
        "./static/tympanic_membrane_dataset/normal/normal (163).png",
        "./static/tympanic_membrane_dataset/normal/normal (477).png",
        "./static/tympanic_membrane_dataset/normal/normal (532).png",
        "./static/tympanic_membrane_dataset/normal/normal (498).png",
        "./static/tympanic_membrane_dataset/normal/normal (162).png",
        "./static/tympanic_membrane_dataset/normal/normal (359).png",
        "./static/tympanic_membrane_dataset/normal/normal (420).png",
        "./static/tympanic_membrane_dataset/normal/normal (135).png",
        "./static/tympanic_membrane_dataset/normal/normal (565).png",
        "./static/tympanic_membrane_dataset/normal/normal (436).png",
        "./static/tympanic_membrane_dataset/normal/normal (573).png",
        "./static/tympanic_membrane_dataset/normal/normal (123).png",
        "./static/tympanic_membrane_dataset/normal/normal (318).png",
        "./static/tympanic_membrane_dataset/normal/normal (461).png",
        "./static/tympanic_membrane_dataset/normal/normal (174).png",
        "./static/tympanic_membrane_dataset/normal/normal (524).png",
        "./static/tympanic_membrane_dataset/normal/normal (363).png",
        "./static/tympanic_membrane_dataset/normal/normal (226).png",
        "./static/tympanic_membrane_dataset/normal/normal (334).png",
        "./static/tympanic_membrane_dataset/normal/normal (271).png",
        "./static/tympanic_membrane_dataset/normal/normal (621).png",
        "./static/tympanic_membrane_dataset/normal/normal (508).png",
        "./static/tympanic_membrane_dataset/normal/normal (158).png",
        "./static/tympanic_membrane_dataset/normal/normal (288).png",
        "./static/tympanic_membrane_dataset/normal/normal (322).png",
        "./static/tympanic_membrane_dataset/normal/normal (637).png",
        "./static/tympanic_membrane_dataset/normal/normal (267).png",
        "./static/tympanic_membrane_dataset/normal/normal (375).png",
        "./static/tympanic_membrane_dataset/normal/normal (230).png",
        "./static/tympanic_membrane_dataset/normal/normal (549).png",
        "./static/tympanic_membrane_dataset/normal/normal (119).png",
        "./static/tympanic_membrane_dataset/normal/normal (181).png",
        "./static/tympanic_membrane_dataset/normal/normal (494).png",
        "./static/tympanic_membrane_dataset/normal/normal (617).png",
        "./static/tympanic_membrane_dataset/normal/normal (247).png",
        "./static/tympanic_membrane_dataset/normal/normal (302).png",
        "./static/tympanic_membrane_dataset/normal/normal (586).png",
        "./static/tympanic_membrane_dataset/normal/normal (569).png",
        "./static/tympanic_membrane_dataset/normal/normal (139).png",
        "./static/tympanic_membrane_dataset/normal/normal (210).png",
        "./static/tympanic_membrane_dataset/normal/normal (640).png",
        "./static/tympanic_membrane_dataset/normal/normal (355).png",
        "./static/tympanic_membrane_dataset/normal/normal (590).png",
        "./static/tympanic_membrane_dataset/normal/normal (206).png",
        "./static/tympanic_membrane_dataset/normal/normal (343).png",
        "./static/tympanic_membrane_dataset/normal/normal (197).png",
        "./static/tympanic_membrane_dataset/normal/normal (528).png",
        "./static/tympanic_membrane_dataset/normal/normal (482).png",
        "./static/tympanic_membrane_dataset/normal/normal (178).png",
        "./static/tympanic_membrane_dataset/normal/normal (251).png",
        "./static/tympanic_membrane_dataset/normal/normal (601).png",
        "./static/tympanic_membrane_dataset/normal/normal (314).png",
        "./static/tympanic_membrane_dataset/normal/normal (553).png",
        "./static/tympanic_membrane_dataset/normal/normal (416).png",
        "./static/tympanic_membrane_dataset/normal/normal (380).png",
        "./static/tympanic_membrane_dataset/normal/normal (154).png",
        "./static/tympanic_membrane_dataset/normal/normal (504).png",
        "./static/tympanic_membrane_dataset/normal/normal (441).png",
        "./static/tympanic_membrane_dataset/normal/normal (292).png",
        "./static/tympanic_membrane_dataset/normal/normal (338).png",
        "./static/tympanic_membrane_dataset/normal/normal (512).png",
        "./static/tympanic_membrane_dataset/normal/normal (142).png",
        "./static/tympanic_membrane_dataset/normal/normal (457).png",
        "./static/tympanic_membrane_dataset/normal/normal (284).png",
        "./static/tympanic_membrane_dataset/normal/normal (545).png",
        "./static/tympanic_membrane_dataset/normal/normal (400).png",
        "./static/tympanic_membrane_dataset/normal/normal (379).png",
        "./static/tympanic_membrane_dataset/normal/normal (396).png",
        "./static/tympanic_membrane_dataset/normal/normal (497).png",
        "./static/tympanic_membrane_dataset/normal/normal (182).png",
        "./static/tympanic_membrane_dataset/normal/normal (478).png",
        "./static/tympanic_membrane_dataset/normal/normal (301).png",
        "./static/tympanic_membrane_dataset/normal/normal (614).png",
        "./static/tympanic_membrane_dataset/normal/normal (244).png",
        "./static/tympanic_membrane_dataset/normal/normal (585).png",
        "./static/tympanic_membrane_dataset/normal/normal (356).png",
        "./static/tympanic_membrane_dataset/normal/normal (213).png",
        "./static/tympanic_membrane_dataset/normal/normal (643).png",
        "./static/tympanic_membrane_dataset/normal/normal (593).png",
        "./static/tympanic_membrane_dataset/normal/normal (439).png",
        "./static/tympanic_membrane_dataset/normal/normal (340).png",
        "./static/tympanic_membrane_dataset/normal/normal (205).png",
        "./static/tympanic_membrane_dataset/normal/normal (481).png",
        "./static/tympanic_membrane_dataset/normal/normal (194).png",
        "./static/tympanic_membrane_dataset/normal/normal (317).png",
        "./static/tympanic_membrane_dataset/normal/normal (252).png",
        "./static/tympanic_membrane_dataset/normal/normal (602).png",
        "./static/tympanic_membrane_dataset/normal/normal (415).png",
        "./static/tympanic_membrane_dataset/normal/normal (550).png",
        "./static/tympanic_membrane_dataset/normal/normal (229).png",
        "./static/tympanic_membrane_dataset/normal/normal (383).png",
        "./static/tympanic_membrane_dataset/normal/normal (442).png",
        "./static/tympanic_membrane_dataset/normal/normal (157).png",
        "./static/tympanic_membrane_dataset/normal/normal (507).png",
        "./static/tympanic_membrane_dataset/normal/normal (291).png",
        "./static/tympanic_membrane_dataset/normal/normal (454).png",
        "./static/tympanic_membrane_dataset/normal/normal (511).png",
        "./static/tympanic_membrane_dataset/normal/normal (141).png",
        "./static/tympanic_membrane_dataset/normal/normal (268).png",
        "./static/tympanic_membrane_dataset/normal/normal (638).png",
        "./static/tympanic_membrane_dataset/normal/normal (287).png",
        "./static/tympanic_membrane_dataset/normal/normal (403).png",
        "./static/tympanic_membrane_dataset/normal/normal (546).png",
        "./static/tympanic_membrane_dataset/normal/normal (395).png",
        "./static/tympanic_membrane_dataset/normal/normal (248).png",
        "./static/tympanic_membrane_dataset/normal/normal (618).png",
        "./static/tympanic_membrane_dataset/normal/normal (531).png",
        "./static/tympanic_membrane_dataset/normal/normal (161).png",
        "./static/tympanic_membrane_dataset/normal/normal (474).png",
        "./static/tympanic_membrane_dataset/normal/normal (136).png",
        "./static/tympanic_membrane_dataset/normal/normal (566).png",
        "./static/tympanic_membrane_dataset/normal/normal (589).png",
        "./static/tympanic_membrane_dataset/normal/normal (423).png",
        "./static/tympanic_membrane_dataset/normal/normal (209).png",
        "./static/tympanic_membrane_dataset/normal/normal (570).png",
        "./static/tympanic_membrane_dataset/normal/normal (120).png",
        "./static/tympanic_membrane_dataset/normal/normal (435).png",
        "./static/tympanic_membrane_dataset/normal/normal (177).png",
        "./static/tympanic_membrane_dataset/normal/normal (527).png",
        "./static/tympanic_membrane_dataset/normal/normal (198).png",
        "./static/tympanic_membrane_dataset/normal/normal (462).png",
        "./static/tympanic_membrane_dataset/normal/normal (225).png",
        "./static/tympanic_membrane_dataset/normal/normal (360).png",
        "./static/tympanic_membrane_dataset/normal/normal (419).png",
        "./static/tympanic_membrane_dataset/normal/normal (272).png",
        "./static/tympanic_membrane_dataset/normal/normal (622).png",
        "./static/tympanic_membrane_dataset/normal/normal (337).png",
        "./static/tympanic_membrane_dataset/normal/normal (634).png",
        "./static/tympanic_membrane_dataset/normal/normal (264).png",
        "./static/tympanic_membrane_dataset/normal/normal (321).png",
        "./static/tympanic_membrane_dataset/normal/normal (458).png",
        "./static/tympanic_membrane_dataset/normal/normal (233).png",
        "./static/tympanic_membrane_dataset/normal/normal (399).png",
        "./static/tympanic_membrane_dataset/normal/normal (376).png",
        "./static/tympanic_membrane_dataset/normal/normal (232).png",
        "./static/tympanic_membrane_dataset/normal/normal (398).png",
        "./static/tympanic_membrane_dataset/normal/normal (377).png",
        "./static/tympanic_membrane_dataset/normal/normal (459).png",
        "./static/tympanic_membrane_dataset/normal/normal (635).png",
        "./static/tympanic_membrane_dataset/normal/normal (265).png",
        "./static/tympanic_membrane_dataset/normal/normal (320).png",
        "./static/tympanic_membrane_dataset/normal/normal (273).png",
        "./static/tympanic_membrane_dataset/normal/normal (623).png",
        "./static/tympanic_membrane_dataset/normal/normal (336).png",
        "./static/tympanic_membrane_dataset/normal/normal (418).png",
        "./static/tympanic_membrane_dataset/normal/normal (224).png",
        "./static/tympanic_membrane_dataset/normal/normal (361).png",
        "./static/tympanic_membrane_dataset/normal/normal (176).png",
        "./static/tympanic_membrane_dataset/normal/normal (526).png",
        "./static/tympanic_membrane_dataset/normal/normal (199).png",
        "./static/tympanic_membrane_dataset/normal/normal (463).png",
        "./static/tympanic_membrane_dataset/normal/normal (571).png",
        "./static/tympanic_membrane_dataset/normal/normal (121).png",
        "./static/tympanic_membrane_dataset/normal/normal (434).png",
        "./static/tympanic_membrane_dataset/normal/normal (208).png",
        "./static/tympanic_membrane_dataset/normal/normal (137).png",
        "./static/tympanic_membrane_dataset/normal/normal (567).png",
        "./static/tympanic_membrane_dataset/normal/normal (588).png",
        "./static/tympanic_membrane_dataset/normal/normal (422).png",
        "./static/tympanic_membrane_dataset/normal/normal (530).png",
        "./static/tympanic_membrane_dataset/normal/normal (160).png",
        "./static/tympanic_membrane_dataset/normal/normal (475).png",
        "./static/tympanic_membrane_dataset/normal/normal (249).png",
        "./static/tympanic_membrane_dataset/normal/normal (619).png",
        "./static/tympanic_membrane_dataset/normal/normal (394).png",
        "./static/tympanic_membrane_dataset/normal/normal (402).png",
        "./static/tympanic_membrane_dataset/normal/normal (117).png",
        "./static/tympanic_membrane_dataset/normal/normal (547).png",
        "./static/tympanic_membrane_dataset/normal/normal (269).png",
        "./static/tympanic_membrane_dataset/normal/normal (639).png",
        "./static/tympanic_membrane_dataset/normal/normal (286).png",
        "./static/tympanic_membrane_dataset/normal/normal (455).png",
        "./static/tympanic_membrane_dataset/normal/normal (510).png",
        "./static/tympanic_membrane_dataset/normal/normal (140).png",
        "./static/tympanic_membrane_dataset/normal/normal (290).png",
        "./static/tympanic_membrane_dataset/normal/normal (443).png",
        "./static/tympanic_membrane_dataset/normal/normal (156).png",
        "./static/tympanic_membrane_dataset/normal/normal (506).png",
        "./static/tympanic_membrane_dataset/normal/normal (228).png",
        "./static/tympanic_membrane_dataset/normal/normal (382).png",
        "./static/tympanic_membrane_dataset/normal/normal (414).png",
        "./static/tympanic_membrane_dataset/normal/normal (551).png",
        "./static/tympanic_membrane_dataset/normal/normal (316).png",
        "./static/tympanic_membrane_dataset/normal/normal (253).png",
        "./static/tympanic_membrane_dataset/normal/normal (603).png",
        "./static/tympanic_membrane_dataset/normal/normal (480).png",
        "./static/tympanic_membrane_dataset/normal/normal (195).png",
        "./static/tympanic_membrane_dataset/normal/normal (341).png",
        "./static/tympanic_membrane_dataset/normal/normal (204).png",
        "./static/tympanic_membrane_dataset/normal/normal (592).png",
        "./static/tympanic_membrane_dataset/normal/normal (438).png",
        "./static/tympanic_membrane_dataset/normal/normal (357).png",
        "./static/tympanic_membrane_dataset/normal/normal (212).png",
        "./static/tympanic_membrane_dataset/normal/normal (642).png",
        "./static/tympanic_membrane_dataset/normal/normal (584).png",
        "./static/tympanic_membrane_dataset/normal/normal (300).png",
        "./static/tympanic_membrane_dataset/normal/normal (615).png",
        "./static/tympanic_membrane_dataset/normal/normal (245).png",
        "./static/tympanic_membrane_dataset/normal/normal (496).png",
        "./static/tympanic_membrane_dataset/normal/normal (183).png",
        "./static/tympanic_membrane_dataset/normal/normal (479).png",
        "./static/tympanic_membrane_dataset/normal/normal (537).png",
        "./static/tympanic_membrane_dataset/normal/normal (167).png",
        "./static/tympanic_membrane_dataset/normal/normal (188).png",
        "./static/tympanic_membrane_dataset/normal/normal (472).png",
        "./static/tympanic_membrane_dataset/normal/normal (649).png",
        "./static/tympanic_membrane_dataset/normal/normal (219).png",
        "./static/tympanic_membrane_dataset/normal/normal (130).png",
        "./static/tympanic_membrane_dataset/normal/normal (560).png",
        "./static/tympanic_membrane_dataset/normal/normal (425).png",
        "./static/tympanic_membrane_dataset/normal/normal (576).png",
        "./static/tympanic_membrane_dataset/normal/normal (126).png",
        "./static/tympanic_membrane_dataset/normal/normal (433).png",
        "./static/tympanic_membrane_dataset/normal/normal (599).png",
        "./static/tympanic_membrane_dataset/normal/normal (608).png",
        "./static/tympanic_membrane_dataset/normal/normal (258).png",
        "./static/tympanic_membrane_dataset/normal/normal (171).png",
        "./static/tympanic_membrane_dataset/normal/normal (521).png",
        "./static/tympanic_membrane_dataset/normal/normal (464).png",
        "./static/tympanic_membrane_dataset/normal/normal (389).png",
        "./static/tympanic_membrane_dataset/normal/normal (223).png",
        "./static/tympanic_membrane_dataset/normal/normal (366).png",
        "./static/tympanic_membrane_dataset/normal/normal (274).png",
        "./static/tympanic_membrane_dataset/normal/normal (624).png",
        "./static/tympanic_membrane_dataset/normal/normal (331).png",
        "./static/tympanic_membrane_dataset/normal/normal (448).png",
        "./static/tympanic_membrane_dataset/normal/normal (632).png",
        "./static/tympanic_membrane_dataset/normal/normal (262).png",
        "./static/tympanic_membrane_dataset/normal/normal (327).png",
        "./static/tympanic_membrane_dataset/normal/normal (235).png",
        "./static/tympanic_membrane_dataset/normal/normal (370).png",
        "./static/tympanic_membrane_dataset/normal/normal (409).png",
        "./static/tympanic_membrane_dataset/normal/normal (491).png",
        "./static/tympanic_membrane_dataset/normal/normal (184).png",
        "./static/tympanic_membrane_dataset/normal/normal (307).png",
        "./static/tympanic_membrane_dataset/normal/normal (612).png",
        "./static/tympanic_membrane_dataset/normal/normal (242).png",
        "./static/tympanic_membrane_dataset/normal/normal (429).png",
        "./static/tympanic_membrane_dataset/normal/normal (583).png",
        "./static/tympanic_membrane_dataset/normal/normal (350).png",
        "./static/tympanic_membrane_dataset/normal/normal (215).png",
        "./static/tympanic_membrane_dataset/normal/normal (645).png",
        "./static/tympanic_membrane_dataset/normal/normal (595).png",
        "./static/tympanic_membrane_dataset/normal/normal (346).png",
        "./static/tympanic_membrane_dataset/normal/normal (203).png",
        "./static/tympanic_membrane_dataset/normal/normal (487).png",
        "./static/tympanic_membrane_dataset/normal/normal (192).png",
        "./static/tympanic_membrane_dataset/normal/normal (468).png",
        "./static/tympanic_membrane_dataset/normal/normal (311).png",
        "./static/tympanic_membrane_dataset/normal/normal (254).png",
        "./static/tympanic_membrane_dataset/normal/normal (604).png",
        "./static/tympanic_membrane_dataset/normal/normal (413).png",
        "./static/tympanic_membrane_dataset/normal/normal (556).png",
        "./static/tympanic_membrane_dataset/normal/normal (385).png",
        "./static/tympanic_membrane_dataset/normal/normal (444).png",
        "./static/tympanic_membrane_dataset/normal/normal (151).png",
        "./static/tympanic_membrane_dataset/normal/normal (501).png",
        "./static/tympanic_membrane_dataset/normal/normal (628).png",
        "./static/tympanic_membrane_dataset/normal/normal (278).png",
        "./static/tympanic_membrane_dataset/normal/normal (297).png",
        "./static/tympanic_membrane_dataset/normal/normal (452).png",
        "./static/tympanic_membrane_dataset/normal/normal (517).png",
        "./static/tympanic_membrane_dataset/normal/normal (147).png",
        "./static/tympanic_membrane_dataset/normal/normal (281).png",
        "./static/tympanic_membrane_dataset/normal/normal (405).png",
        "./static/tympanic_membrane_dataset/normal/normal (540).png",
        "./static/tympanic_membrane_dataset/normal/normal (393).png",
        "./static/tympanic_membrane_dataset/normal/normal (239).png",
        "./static/tympanic_membrane_dataset/normal/normal (392).png",
        "./static/tympanic_membrane_dataset/normal/normal (238).png",
        "./static/tympanic_membrane_dataset/normal/normal (404).png",
        "./static/tympanic_membrane_dataset/normal/normal (541).png",
        "./static/tympanic_membrane_dataset/normal/normal (280).png",
        "./static/tympanic_membrane_dataset/normal/normal (453).png",
        "./static/tympanic_membrane_dataset/normal/normal (516).png",
        "./static/tympanic_membrane_dataset/normal/normal (146).png",
        "./static/tympanic_membrane_dataset/normal/normal (629).png",
        "./static/tympanic_membrane_dataset/normal/normal (279).png",
        "./static/tympanic_membrane_dataset/normal/normal (296).png",
        "./static/tympanic_membrane_dataset/normal/normal (445).png",
        "./static/tympanic_membrane_dataset/normal/normal (150).png",
        "./static/tympanic_membrane_dataset/normal/normal (500).png",
        "./static/tympanic_membrane_dataset/normal/normal (384).png",
        "./static/tympanic_membrane_dataset/normal/normal (412).png",
        "./static/tympanic_membrane_dataset/normal/normal (557).png",
        "./static/tympanic_membrane_dataset/normal/normal (310).png",
        "./static/tympanic_membrane_dataset/normal/normal (255).png",
        "./static/tympanic_membrane_dataset/normal/normal (605).png",
        "./static/tympanic_membrane_dataset/normal/normal (486).png",
        "./static/tympanic_membrane_dataset/normal/normal (193).png",
        "./static/tympanic_membrane_dataset/normal/normal (469).png",
        "./static/tympanic_membrane_dataset/normal/normal (347).png",
        "./static/tympanic_membrane_dataset/normal/normal (202).png",
        "./static/tympanic_membrane_dataset/normal/normal (594).png",
        "./static/tympanic_membrane_dataset/normal/normal (351).png",
        "./static/tympanic_membrane_dataset/normal/normal (214).png",
        "./static/tympanic_membrane_dataset/normal/normal (644).png",
        "./static/tympanic_membrane_dataset/normal/normal (428).png",
        "./static/tympanic_membrane_dataset/normal/normal (582).png",
        "./static/tympanic_membrane_dataset/normal/normal (306).png",
        "./static/tympanic_membrane_dataset/normal/normal (613).png",
        "./static/tympanic_membrane_dataset/normal/normal (243).png",
        "./static/tympanic_membrane_dataset/normal/normal (490).png",
        "./static/tympanic_membrane_dataset/normal/normal (185).png",
        "./static/tympanic_membrane_dataset/normal/normal (408).png",
        "./static/tympanic_membrane_dataset/normal/normal (234).png",
        "./static/tympanic_membrane_dataset/normal/normal (371).png",
        "./static/tympanic_membrane_dataset/normal/normal (633).png",
        "./static/tympanic_membrane_dataset/normal/normal (263).png",
        "./static/tympanic_membrane_dataset/normal/normal (326).png",
        "./static/tympanic_membrane_dataset/normal/normal (449).png",
        "./static/tympanic_membrane_dataset/normal/normal (275).png",
        "./static/tympanic_membrane_dataset/normal/normal (625).png",
        "./static/tympanic_membrane_dataset/normal/normal (330).png",
        "./static/tympanic_membrane_dataset/normal/normal (388).png",
        "./static/tympanic_membrane_dataset/normal/normal (222).png",
        "./static/tympanic_membrane_dataset/normal/normal (367).png",
        "./static/tympanic_membrane_dataset/normal/normal (170).png",
        "./static/tympanic_membrane_dataset/normal/normal (520).png",
        "./static/tympanic_membrane_dataset/normal/normal (465).png",
        "./static/tympanic_membrane_dataset/normal/normal (609).png",
        "./static/tympanic_membrane_dataset/normal/normal (259).png",
        "./static/tympanic_membrane_dataset/normal/normal (577).png",
        "./static/tympanic_membrane_dataset/normal/normal (127).png",
        "./static/tympanic_membrane_dataset/normal/normal (432).png",
        "./static/tympanic_membrane_dataset/normal/normal (598).png",
        "./static/tympanic_membrane_dataset/normal/normal (131).png",
        "./static/tympanic_membrane_dataset/normal/normal (561).png",
        "./static/tympanic_membrane_dataset/normal/normal (424).png",
        "./static/tympanic_membrane_dataset/normal/normal (648).png",
        "./static/tympanic_membrane_dataset/normal/normal (218).png",
        "./static/tympanic_membrane_dataset/normal/normal (536).png",
        "./static/tympanic_membrane_dataset/normal/normal (166).png",
        "./static/tympanic_membrane_dataset/normal/normal (189).png",
        "./static/tympanic_membrane_dataset/normal/normal (473).png"
    ],
    "abnormal/aom": [
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (114).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (61).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (36).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (20).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (102).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (77).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (98).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (57).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (41).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (16).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (82).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (118).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (94).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (1).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (95).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (119).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (83).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (17).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (40).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (56).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (76).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (99).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (103).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (21).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (37).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (60).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (115).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (51).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (47).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (10).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (84).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (92).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (108).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (6).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (112).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (67).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (88).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (30).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (26).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (104).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (71).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (70).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (105).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (27).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (31).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (66).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (89).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (113).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (109).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (7).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (93).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (85).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (11).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (46).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (50).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (4).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (90).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (28).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (86).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (69).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (12).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (45).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (53).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (73).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (8).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (106).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (24).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (32).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (65).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (110).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (49).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (48).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (111).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (64).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (33).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (25).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (9).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (107).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (72).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (52).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (44).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (13).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (87).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (68).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (29).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (91).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (5).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (75).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (100).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (22).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (34).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (63).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (116).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (18).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (59).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (2).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (96).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (79).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (38).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (80).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (14).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (43).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (55).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (54).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (42).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (15).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (81).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (39).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (97).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (78).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (3).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (58).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (19).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (117).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (62).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (35).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (23).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (101).png",
        "./static/tympanic_membrane_dataset/abnormal/aom/aom (74).png"
    ],
    "abnormal/csom": [
        "./static/tympanic_membrane_dataset/abnormal/csom/csom (21).png",
        "./static/tympanic_membrane_dataset/abnormal/csom/csom (37).png",
        "./static/tympanic_membrane_dataset/abnormal/csom/csom (60).png",
        "./static/tympanic_membrane_dataset/abnormal/csom/csom (6).png",
        "./static/tympanic_membrane_dataset/abnormal/csom/csom (17).png",
        "./static/tympanic_membrane_dataset/abnormal/csom/csom (40).png",
        "./static/tympanic_membrane_dataset/abnormal/csom/csom (56).png",
        "./static/tympanic_membrane_dataset/abnormal/csom/csom (57).png",
        "./static/tympanic_membrane_dataset/abnormal/csom/csom (41).png",
        "./static/tympanic_membrane_dataset/abnormal/csom/csom (16).png",
        "./static/tympanic_membrane_dataset/abnormal/csom/csom (61).png",
        "./static/tympanic_membrane_dataset/abnormal/csom/csom (7).png",
        "./static/tympanic_membrane_dataset/abnormal/csom/csom (36).png",
        "./static/tympanic_membrane_dataset/abnormal/csom/csom (20).png",
        "./static/tympanic_membrane_dataset/abnormal/csom/csom (11).png",
        "./static/tympanic_membrane_dataset/abnormal/csom/csom (46).png",
        "./static/tympanic_membrane_dataset/abnormal/csom/csom (50).png",
        "./static/tympanic_membrane_dataset/abnormal/csom/csom (27).png",
        "./static/tympanic_membrane_dataset/abnormal/csom/csom (31).png",
        "./static/tympanic_membrane_dataset/abnormal/csom/csom (1).png",
        "./static/tympanic_membrane_dataset/abnormal/csom/csom (30).png",
        "./static/tympanic_membrane_dataset/abnormal/csom/csom (26).png",
        "./static/tympanic_membrane_dataset/abnormal/csom/csom (51).png",
        "./static/tympanic_membrane_dataset/abnormal/csom/csom (47).png",
        "./static/tympanic_membrane_dataset/abnormal/csom/csom (10).png",
        "./static/tympanic_membrane_dataset/abnormal/csom/csom (29).png",
        "./static/tympanic_membrane_dataset/abnormal/csom/csom (52).png",
        "./static/tympanic_membrane_dataset/abnormal/csom/csom (44).png",
        "./static/tympanic_membrane_dataset/abnormal/csom/csom (13).png",
        "./static/tympanic_membrane_dataset/abnormal/csom/csom (2).png",
        "./static/tympanic_membrane_dataset/abnormal/csom/csom (33).png",
        "./static/tympanic_membrane_dataset/abnormal/csom/csom (25).png",
        "./static/tympanic_membrane_dataset/abnormal/csom/csom (48).png",
        "./static/tympanic_membrane_dataset/abnormal/csom/csom (49).png",
        "./static/tympanic_membrane_dataset/abnormal/csom/csom (24).png",
        "./static/tympanic_membrane_dataset/abnormal/csom/csom (32).png",
        "./static/tympanic_membrane_dataset/abnormal/csom/csom (3).png",
        "./static/tympanic_membrane_dataset/abnormal/csom/csom (12).png",
        "./static/tympanic_membrane_dataset/abnormal/csom/csom (45).png",
        "./static/tympanic_membrane_dataset/abnormal/csom/csom (53).png",
        "./static/tympanic_membrane_dataset/abnormal/csom/csom (28).png",
        "./static/tympanic_membrane_dataset/abnormal/csom/csom (4).png",
        "./static/tympanic_membrane_dataset/abnormal/csom/csom (62).png",
        "./static/tympanic_membrane_dataset/abnormal/csom/csom (35).png",
        "./static/tympanic_membrane_dataset/abnormal/csom/csom (23).png",
        "./static/tympanic_membrane_dataset/abnormal/csom/csom (58).png",
        "./static/tympanic_membrane_dataset/abnormal/csom/csom (19).png",
        "./static/tympanic_membrane_dataset/abnormal/csom/csom (8).png",
        "./static/tympanic_membrane_dataset/abnormal/csom/csom (39).png",
        "./static/tympanic_membrane_dataset/abnormal/csom/csom (54).png",
        "./static/tympanic_membrane_dataset/abnormal/csom/csom (42).png",
        "./static/tympanic_membrane_dataset/abnormal/csom/csom (15).png",
        "./static/tympanic_membrane_dataset/abnormal/csom/csom (14).png",
        "./static/tympanic_membrane_dataset/abnormal/csom/csom (43).png",
        "./static/tympanic_membrane_dataset/abnormal/csom/csom (55).png",
        "./static/tympanic_membrane_dataset/abnormal/csom/csom (38).png",
        "./static/tympanic_membrane_dataset/abnormal/csom/csom (9).png",
        "./static/tympanic_membrane_dataset/abnormal/csom/csom (18).png",
        "./static/tympanic_membrane_dataset/abnormal/csom/csom (59).png",
        "./static/tympanic_membrane_dataset/abnormal/csom/csom (22).png",
        "./static/tympanic_membrane_dataset/abnormal/csom/csom (34).png",
        "./static/tympanic_membrane_dataset/abnormal/csom/csom (5).png",
        "./static/tympanic_membrane_dataset/abnormal/csom/csom (63).png"
    ],
    "abnormal/earwax": [
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (114).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (95).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (102).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (83).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (40).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (17).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (138).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (56).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (21).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (76).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (99).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (118).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (60).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (37).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (122).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (134).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (135).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (1).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (123).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (36).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (61).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (119).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (77).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (98).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (20).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (57).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (139).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (16).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (41).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (82).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (103).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (94).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (115).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (27).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (70).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (66).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (89).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (108).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (31).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (124).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (6).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (132).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (112).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (93).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (104).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (85).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (128).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (46).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (11).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (50).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (51).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (10).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (47).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (129).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (84).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (105).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (92).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (113).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (133).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (7).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (125).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (30).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (109).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (67).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (88).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (71).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (26).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (130).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (4).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (126).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (48).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (33).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (64).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (72).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (25).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (52).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (8).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (13).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (44).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (87).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (68).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (106).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (91).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (110).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (29).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (28).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (111).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (90).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (107).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (86).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (69).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (45).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (12).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (9).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (53).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (24).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (73).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (65).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (32).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (49).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (127).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (5).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (131).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (54).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (15).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (42).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (39).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (81).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (100).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (97).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (78).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (116).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (136).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (58).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (2).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (19).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (120).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (35).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (62).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (74).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (23).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (22).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (75).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (63).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (34).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (121).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (18).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (3).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (59).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (137).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (140).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (117).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (96).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (79).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (101).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (80).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (38).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (43).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (14).png",
        "./static/tympanic_membrane_dataset/abnormal/earwax/earwax (55).png"
    ]
};
let classes = [
    "normal",
    "abnormal/aom",
    "abnormal/csom",
    "abnormal/earwax"
];
exports.default = ()=>{
    let className = classes[Math.floor(Math.random() * 4)];
    let classArray = index[className];
    return {
        className,
        random_image_url: classArray[Math.floor(Math.random() * classArray.length)]
    };
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["6l7Nl","1xC6H"], null, "parcelRequire94c2")

//# sourceMappingURL=get_random_image.42856b3a.js.map
