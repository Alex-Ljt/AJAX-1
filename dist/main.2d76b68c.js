// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"epB2":[function(require,module,exports) {
console.log("我是main.js 2");

getCSS.onclick = function () {
    var request = new XMLHttpRequest();
    request.open("GET", "/style.css");
    request.onload = function () {
        console.log('request.response');
        console.log(request.response);

        //创建 style 标签
        var style = document.createElement('style');
        //填写 style 内容
        style.innerHTML = request.response;
        //插到头里面
        document.head.appendChild(style);
    };
    request.onerror = function () {
        console.log("失败了");
    };
    request.send();
};

getJS.onclick = function () {
    var request = new XMLHttpRequest();
    request.open("GET", "/2.js");
    request.onload = function () {
        console.log('request.response');
        console.log(request.response);

        //创建 script 标签
        var script = document.createElement('script');
        //填写 script 内容
        script.innerHTML = request.response;
        //插到身体里面
        document.body.appendChild(script);
    };
    request.onerror = function () {
        console.log("失败了");
    };
    request.send();
};

getHTML.onclick = function () {
    var request = new XMLHttpRequest();
    request.open("GET", "/3.html");
    request.onload = function () {
        console.log('request.response');
        console.log(request.response);

        //创建 div 标签
        var div = document.createElement('div');
        //填写 div 内容
        div.innerHTML = request.response;
        //插到身体里面
        document.body.appendChild(div);
    };
    request.onerror = function () {
        console.log("失败了");
    };
    request.send();
};

getXML.onclick = function () {
    var request = new XMLHttpRequest();
    request.open("GET", "/4.xml");
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            var dom = request.responseXML;
            var text = dom.getElementsByTagName('warning')[0].textContent;
            console.log(text.trim());
        }
    };
    request.send();
};

getJSON.onclick = function () {
    var request = new XMLHttpRequest();
    request.open("GET", "/5.json");
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            console.log(request.response);
            var object = JSON.parse(request.response);
            myName.textContent = object.name;
        }
    };
    request.send();
};

var n = 1;
getPage.onclick = function () {
    var request = new XMLHttpRequest();
    request.open("GET", "/page" + (n + 1));
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            var array = JSON.parse(request.response);
            array.forEach(function (item) {
                var li = document.createElement("li");
                li.textContent = item.id;
                xxx.appendChild(li);
            });
            n += 1;
        }
    };
    request.send();
};
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.2d76b68c.map