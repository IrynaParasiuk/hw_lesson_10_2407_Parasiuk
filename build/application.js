webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _trafficLight = __webpack_require__(1);

(0, _trafficLight.trafficLight)('.trafficLight-root');

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.trafficLight = undefined;

__webpack_require__(2);

/**
 * 
 * @param {String} selector Simple css selector of root element
 */
function trafficLight(selector) {
    var rootElement = document.querySelector(selector);
    var widgetTemplate = '     \n      <button  class="stateStop" data-state="stop"></button>\n      <button  class="stateWait" data-state="wait"</button>\n      <button  class="stateStart" data-state="start"></button>    \n  ';
    var startLight = void 0;
    var waitLight = void 0;
    var stopLight = void 0;

    function clickHandler() {
        changeColor(this.getAttribute('data-state'));
    }

    function changeColor(stateParam) {
        switch (stateParam) {
            case "start":
                console.log('start');
                startLight.style.background = 'green';
                stopLight.style.background = '#A6ABAB';
                waitLight.style.background = '#A6ABAB';
                break;
            case "wait":
                console.log('wait');
                startLight.style.background = '#A6ABAB';
                stopLight.style.background = '#A6ABAB';
                waitLight.style.background = 'yellow';
                break;
            case "stop":
                console.log('stop');
                startLight.style.background = '#A6ABAB';
                stopLight.style.background = 'red';
                waitLight.style.background = '#A6ABAB';
                break;
        }
    }

    function renderStatic() {
        rootElement.innerHTML = widgetTemplate;
        startLight = rootElement.querySelector('.stateStart');
        stopLight = rootElement.querySelector('.stateStop');
        waitLight = rootElement.querySelector('.stateWait');
    }

    function handleEvents() {
        startLight.addEventListener("click", clickHandler);
        stopLight.addEventListener("click", clickHandler);
        waitLight.addEventListener("click", clickHandler);
    }
    renderStatic();
    handleEvents();
}
exports.trafficLight = trafficLight;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
],[0]);