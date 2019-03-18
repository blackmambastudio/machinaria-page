"use strict";function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}var SELECTORS={tvButton:".tv__button",channel:".tv__channel",active:".active"},CLASSNAMES={active:"active"},Television=function(){function t(e){_classCallCheck(this,t),this.element=e,this.buttons=this.element.querySelectorAll(SELECTORS.tvButton),this.channels=this.element.querySelectorAll(SELECTORS.channel),this.currentChannel=0,this.init()}return _createClass(t,[{key:"init",value:function(){var t=this;window.cosito=this,document.addEventListener("keyup",function(e){t.handleKey(e.keyCode)})}},{key:"handleKey",value:function(e){13===e?this.setChannel(this.currentChannel+1):13===e?this.setChannel(this.currentChannel+1):66===e?this.setChannel(this.currentChannel-1):82===e&&this.setChannel(0)}},{key:"setChannel",value:function(e){e===this.channels.length&&(e=0),this.channels[this.currentChannel].classList.remove(CLASSNAMES.active),this.channels[e].classList.add(CLASSNAMES.active),this.currentChannel=e}}]),t}(),initTelevision=function(){return _toConsumableArray(document.querySelectorAll("[data-television]")).map(function(e){return new Television(e)})};initTelevision();