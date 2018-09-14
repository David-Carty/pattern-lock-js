!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=function(){var t={},e=function(e,n){var r=t[e]=t[e]||[];return r.splice(r.indexOf(n)>>>0,1)};return{on:function(n,r){var i=t[n]=t[n]||[];return i.push(r),e.bind(null,i,r)},off:e,emit:function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var o=t[e];return o&&o.length?o.map(function(t){return t.apply(void 0,r)}):[]}}};e.default=r},function(t,e,n){"use strict";var r=function(t){return t&&t.__esModule?t:{default:t}}(n(2)),i=n(7);function o(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var a=function(t){var e=t.name,n=t.value,r=t.isSelected,o=t.onSelect;return(0,i.h)("label")({style:"padding: .3em .5em;"},[(0,i.onChange)(o,(0,i.input)(function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}({type:"radio",name:e},r?"checked":"unchecked",!0))),(0,i.text)(n)])},c=function(t){var e=t.list,n=t.onItemSelect,r=t.name,o=t.selected;return(0,i.div)({style:"padding: 1em 0;"},[(0,i.div)({style:"font-size: 1.3em;"},[(0,i.h)("strong")({},[(0,i.text)(r)])]),(0,i.div)({},e.map(function(t,e){return a({name:r,value:t,isSelected:e===o,onSelect:n(t,e)})}))])},s=function(){var t=function(){var t=(0,i.h)("canvas")(),e=(0,r.default)({$canvas:t,width:300,height:430,grid:[3,3]});return e.matchHash(["LTExNjI0MjcxOTA=","MTQ2NjgyMjczMw=="]).onSuccess(function(){return e.setThemeState("success")}).onFailure(function(){return e.setThemeState("failure")}),e.onStart(function(){return e.setThemeState("default")}),{lock:e,$canvas:t}}(),e=t.lock,n=t.$canvas,a=(0,i.input)();return e.onComplete(function(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).hash;return a.value=t}),{$app:(0,i.div)({},[(0,i.div)({class:"title"},[(0,i.text)("PatternLockJS")]),(0,i.div)({class:"subtitle"},[(0,i.text)("Draw unlock pattern to generate a hash")]),(0,i.div)({class:"canvas-wrapper"},[n]),(0,i.div)({class:"password"},[(0,i.text)("Your password is: "),a]),c({name:"Grid",list:[[2,2],[3,3],[3,4],[4,4],[4,5]],selected:1,onItemSelect:function(t){return function(){return e.setGrid.apply(e,o(t))}}}),c({name:"Theme",list:["dark","light"],selected:0,onItemSelect:function(t){return function(){return e.setTheme(t)}}}),c({name:"Theme State",list:["default","success","failure"],selected:0,onItemSelect:function(t){return function(){return e.setThemeState(t)}}})]),lock:e}};document.addEventListener("DOMContentLoaded",function(){var t=s(),e=t.$app,n=t.lock,r=document.getElementById("root");(0,i.render)(e,r),n.recalculateBounds()})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.PatternLock=void 0;var r=s(n(0)),i=s(n(3)),o=n(4),a=n(5),c=s(n(6));function s(t){return t&&t.__esModule?t:{default:t}}function u(t,e,n){return(u=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var i=new(Function.bind.apply(t,r));return n&&l(i,n.prototype),i}).apply(null,arguments)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function h(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],r=!0,i=!1,o=void 0;try{for(var a,c=t[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){i=!0,o=t}finally{try{r||null==c.return||c.return()}finally{if(i)throw o}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){v(t,e,n[e])})}return t}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function v(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var p=function(t){return new Error("Invalid or empty ".concat(t," passed"))},m={PATTERN_COMPLETE:"complete",PATTERN_START:"start"},y={theme:"dark",grid:[3,3],width:300,height:430},g=function(){function t(e){var n=this;if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),v(this,"forceRender",function(){return(0,a.raf)(function(){var t=n._isDragging;n._isDragging=!0,n.calculationLoop(!1),(0,a.raf)(function(){n.renderLoop(!1),n._isDragging=t})})}),v(this,"destroy",function(){return n._subscriptions.map(function(t){return t()})}),v(this,"emit",function(){var t;return(t=n.eventBus).emit.apply(t,arguments)}),v(this,"onStart",function(t){return n.on(m.PATTERN_START,t)}),v(this,"onComplete",function(t){return n.on(m.PATTERN_COMPLETE,t)}),v(this,"_emitPatternStart",function(){return n.emit(m.PATTERN_START,{})}),v(this,"recalculateBounds",function(){return n.bounds={x:n.$canvas.offsetLeft,y:n.$canvas.offsetTop}}),v(this,"_onResize",function(){return(0,a.raf)(n.recalculateBounds)}),v(this,"_onTouchStart",function(t){t&&t.preventDefault(),n.setInitialState(),n.forceRender(),n._emitPatternStart(),n._isDragging=!0}),v(this,"_onTouchStop",function(t){t&&t.preventDefault(),n.coordinates=null,n.renderLoop(!1),n._emitPatternComplete(),n._isDragging=!1}),v(this,"_onTouchMove",function(t){if(t&&t.preventDefault(),n._isDragging){var e={x:t.pageX||t.touches[0].pageX,y:t.pageY||t.touches[0].pageY};e={x:e.x-n.bounds.x,y:e.y-n.bounds.y},n.isPointInCanvas(e)?n.coordinates=e:n._onTouchStop()}}),v(this,"isPointInCanvas",function(t){var e=t.x,r=t.y;return e<=n.dimens.width&&e>0&&r<=n.dimens.height&&r>0}),v(this,"isSelected",function(t){return!!n.selectedNodes.filter(function(e){return e.row===t.row&&e.col===t.col}).length}),v(this,"calculationLoop",function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];n._isDragging&&n.coordinates&&n.forEachNode(function(t,e){if(Math.sqrt(Math.pow(n.coordinates.x-t,2)+Math.pow(n.coordinates.y-e,2))<n.themeState.dimens.node_radius+1){var r={row:t/n.interval.x,col:e/n.interval.y};if(!n.isSelected(r))return n.addIntermediaryNodes(r),n.selectedNodes.push(r),!1}}),t&&(0,a.raf)(n.calculationLoop)}),v(this,"renderLoop",function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(n._isDragging){var e=n.themeState,r=e.colors,i=r.accent,o=r.primary,c=e.dimens.node_ring;n.ctx.clearRect(0,0,n.dimens.width,n.dimens.height),n.renderGrid();var s=n.selectedNodes.reduce(function(t,e){if(t){var r={x:e.row*n.interval.x,y:e.col*n.interval.y},a={x:t.row*n.interval.x,y:t.col*n.interval.y};n.drawNode(r.x,r.y,i,o,c+3),n.drawNode(a.x,a.y,i,o,c+3),n.joinNodes(t.row,t.col,e.row,e.col)}return e},null);if(s&&n.coordinates){var u={x:s.row*n.interval.x,y:s.col*n.interval.y};n.drawNode(u.x,u.y,i,o,c+6),n.joinNodes(u.x,u.y,n.coordinates.x,n.coordinates.y,!0)}}t&&(0,a.raf)(n.renderLoop)}),v(this,"matchHash",function(t){var e=(0,i.default)(t,n.eventBus);return n.onComplete(function(t){return e.check(t.hash)}),e}),!e.$canvas)throw p("$canvas");if(!e.width)throw p("width");if(!e.height)throw p("height");e=d({},y,e),this.dimens={width:e.width,height:e.height},this.setUpCanvas(e),this.initialize(e)}return function(t,e,n){e&&f(t.prototype,e),n&&f(t,n)}(t,[{key:"setUpCanvas",value:function(t){this.$canvas=t.$canvas,this.ctx=this.$canvas.getContext("2d");var e=(0,a.getPixelRatio)(this.ctx);this.$canvas.width=this.dimens.width*e,this.$canvas.height=this.dimens.height*e,this.$canvas.style.width=this.dimens.width+"px",this.$canvas.style.height=this.dimens.height+"px",this.ctx.setTransform(e,0,0,e,0,0)}},{key:"initialize",value:function(t){var e=t.theme,n=h(t.grid,2),i=n[0],o=n[1];this._subscriptions=[],this.eventBus=(0,r.default)(),this.setTheme(e,!1),this.setGrid(i,o),this.renderGrid(),this.attachEventHandlers()}},{key:"setInitialState",value:function(){this.coordinates=null,this.selectedNodes=[],this.lastSelectedNode=null}},{key:"setGrid",value:function(t,e){return this.rows=t,this.cols=e,this.setInitialState(),this._onResize(),this.forceRender(),this}},{key:"setTheme",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if("string"==typeof t&&(t=c.default[t]),!t)throw p("theme");return this.theme=t,this.setThemeState("default",!1),e&&this.forceRender(),this}},{key:"setThemeState",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!this.theme)throw p("theme");return this.themeState=this.theme[t||"default"]||{},this.themeState.colors=d({},this.theme.default.colors,this.themeState.colors),this.themeState.dimens=d({},this.theme.default.dimens,this.themeState.dimens),e&&this.forceRender(),this}},{key:"attachEventHandlers",value:function(){var t=this,e=function(e,n,r){return t._subscriptions.push((0,a.registerEvent)(e,n,r))};e(this.$canvas,"mousedown touchstart",this._onTouchStart),e(this.$canvas,"mouseup touchend",this._onTouchStop),e(window,"mousemove touchmove",this._onTouchMove),e(window,"resize",this._onResize),(0,a.raf)(this.renderLoop),(0,a.raf)(this.calculationLoop)}},{key:"on",value:function(t,e){var n=this.eventBus.on(t,e);return this._subscriptions.push(n),n}},{key:"_emitPatternComplete",value:function(){var t=this.selectedNodes,e=(0,o.patternToWords)(t),n=(0,o.hashCode)(e);this.emit(m.PATTERN_COMPLETE,{nodes:t,hash:n})}},{key:"addIntermediaryNodes",value:function(t){var e=this.getIntermediaryStepDirection(this.lastSelectedNode,t);if(0!==e.row||0!==e.col)for(var n={row:this.lastSelectedNode.row+e.row,col:this.lastSelectedNode.col+e.col},r=Math.max(this.rows,this.cols),i=0;i++<r&&(n.row!==t.row||n.col!==t.col);)this.selectedNodes.push(n),n={row:n.row+e.row,col:n.col+e.col};this.lastSelectedNode=t}},{key:"getIntermediaryStepDirection",value:function(t,e){var n={row:0,col:0};if(!t)return n;var r=Math.abs(t.row-e.row),i=Math.abs(t.col-e.col);if(1===r||1===i)return n;var a=t.row-e.row<0?1:-1,c=t.col-e.col<0?1:-1;if(0===r)0!==i&&(n.col=c);else if(0===i)n.row=a;else{var s=Math.max(r,i),u=Math.min(r,i),l=(0,o.gcd)(s,u);s%u==0&&(n.col=i/l*c,n.row=r/l*a)}return n}},{key:"renderGrid",value:function(){this.ctx.fillStyle=this.themeState.colors.bg,this.ctx.fillRect(0,0,this.dimens.width,this.dimens.height),this.interval={x:this.dimens.width/(this.rows+1),y:this.dimens.height/(this.cols+1)},this.forEachNode(this.drawNode.bind(this))}},{key:"forEachNode",value:function(t){var e=Array(this.rows+1).fill(this.interval.x),n=Array(this.cols+1).fill(this.interval.y),r=new Error("Break Exception");try{n.reduce(function(n,i){return e.reduce(function(e,i){if(!1===t(e,n))throw r;return e+i}),n+i})}catch(t){if(t!==r)throw t}}},{key:"drawNode",value:function(t,e,n,r,i){var o=this.themeState,a=o.dimens,c=a.node_ring,s=a.node_radius,u=a.node_core,l=o.colors.primary;this.ctx.lineWidth=i||c,this.ctx.fillStyle=n||l,this.ctx.strokeStyle=r||l,this.ctx.beginPath(),this.ctx.arc(t,e,u,0,2*Math.PI),this.ctx.fill(),this.ctx.beginPath(),this.ctx.arc(t,e,s,0,2*Math.PI),this.ctx.stroke()}},{key:"joinNodes",value:function(t,e,n,r){var i=arguments.length>4&&void 0!==arguments[4]&&arguments[4],o=this.interval;i&&(o={x:1,y:1});var a={x:o.x*t,y:o.y*e},c={x:o.x*n,y:o.y*r};this.ctx.lineWidth=this.themeState.dimens.line_width,this.ctx.strokeStyle=this.themeState.colors.accent,this.ctx.lineCap="round",this.ctx.beginPath(),this.ctx.moveTo(a.x,a.y),this.ctx.lineTo(c.x,c.y),this.ctx.stroke()}}]),t}();e.PatternLock=g;e.default=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return u(g,e)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.MATCH_FAILURE=e.MATCH_SUCCESS=void 0;var r=function(t){return t&&t.__esModule?t:{default:t}}(n(0));e.MATCH_SUCCESS="MATCH_SUCCESS";e.MATCH_FAILURE="MATCH_FAILURE";e.default=function(t,e){var n=e||(0,r.default)(),i={check:function(e){return function(t,e){return-1!==t.indexOf(e)}(t,e)?n.emit("MATCH_SUCCESS"):n.emit("MATCH_FAILURE")},onSuccess:function(t){return n.on("MATCH_SUCCESS",t),i},onFailure:function(t){return n.on("MATCH_FAILURE",t),i}};return i}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.gcd=e.hashCode=e.patternToWords=void 0;e.patternToWords=function(t){return JSON.stringify(t)};e.hashCode=function(t){if(!t.length)return"";var e=t.split("").reduce(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return(t=(t<<5)-t+(arguments.length>1?arguments[1]:void 0).charCodeAt(0))&t});return btoa(e+"")};e.gcd=function(t,e){for(;0!==e;){var n=t;t=e,e=n%e}return t}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getPixelRatio=e.raf=e.registerEvent=e.unregisterEvent=void 0;var r=function(t,e,n){return e.split(" ").forEach(function(e){return t.removeEventListener(e,n,{passive:!1})})};e.unregisterEvent=r;e.registerEvent=function(t,e,n){return e.split(" ").forEach(function(e){return t.addEventListener(e,n,{passive:!1})}),function(){return r(t,e,n)}};var i=requestAnimationFrame||function(t){return setTimeout(t,16)};e.raf=i;e.getPixelRatio=function(t){return(window.devicePixelRatio||1)/(t.webkitBackingStorePixelRatio||t.mozBackingStorePixelRatio||t.msBackingStorePixelRatio||t.oBackingStorePixelRatio||t.backingStorePixelRatio||1)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={},i={line_width:6,node_radius:20,node_core:8,node_ring:1};r.dark={default:{colors:{accent:"#ae64cd",primary:"#ffffff",bg:"#2c3e50"},dimens:i},success:{colors:{accent:"#51e980"}},failure:{colors:{accent:"#e74c3c"}}},r.light={default:{colors:{accent:"#ae64cd",primary:"#34495e",bg:"#ecf0f1"},dimens:i},success:{colors:{accent:"#27ae60"}},failure:{colors:{accent:"#e74c3c"}}};var o=r;e.default=o},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.render=e.onChange=e.onClick=e.onEvent=e.button=e.input=e.div=e.text=e.h=void 0;var r=function(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=document.createElement(t);return Object.keys(e).forEach(function(t){return r.setAttribute(t,e[t])}),n.forEach(function(t){return r.appendChild(t)}),r}};e.h=r;e.text=function(t){return document.createTextNode(t)};var i=r("div");e.div=i;var o=r("input");e.input=o;var a=r("button");e.button=a;var c=function(t){return function(e,n){return n.addEventListener(t,e),n}};e.onEvent=c;var s=c("click");e.onClick=s;var u=c("change");e.onChange=u;e.render=function(t,e){return e.appendChild(t)}}]);