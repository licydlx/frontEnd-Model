webpackJsonp([1],{

/***/ "fujM":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "vGYV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("M4fF");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
__webpack_require__("fujM");
// import _ from 'lodash';
// import {
// 	printMe
// } from './print.js';

// function component() {
// 	var element = document.createElement('div');
// 	var btn = document.createElement('button');

// 	element.innerHTML = _.join(['Hello', 'webpack'], ' ');

// 	btn.innerHTML = 'Click me and check the console!';
// 	btn.onclick = printMe; // onclick 事件绑定原始的 printMe 函数上

// 	element.appendChild(btn);

// 	return element;
// }

// // document.body.appendChild(component());
// let element = component(); // 当 print.js 改变导致页面重新渲染时，重新获取渲染的元素
// document.body.appendChild(element);

// if (module.hot) {
// 	module.hot.accept('./print.js', function() {
// 		console.log('Accepting the updated printMe module!');
// 		// printMe();
// 		document.body.removeChild(element);
// 		element = component(); // 重新渲染页面后，component 更新 click 事件处理
// 		document.body.appendChild(element);
// 	})
// }


// import {
// 	cube
// } from './math.js';

// if (process.env.NODE_ENV !== 'production') {
// 	console.log('Looks like we are in development mode!');
// }

// function component() {
// 	var element = document.createElement('pre');
// 	element.innerHTML = [
// 		'Hello webpack!',
// 		'5 cubed is equal to ' + cube(5)
// 	].join('\n\n');

// 	return element;
// }

// document.body.appendChild(component());

// async function getComponent() {
// 	var element = document.createElement('div');
// 	const _ = await
// 	import ( /* webpackChunkName: "lodash" */ 'lodash');
// 	element.innerHTML = _.join(['Hello', 'webpack'], ' ');
// 	return element;
// }

// getComponent().then(component => {
// 	document.body.appendChild(component);
// })

// import _ from 'lodash';
// function component() {
// 	var element = document.createElement('div');
// 	var button = document.createElement('button');
// 	var br = document.createElement('br');

// 	button.innerHTML = 'Click me and look at the console!';
// 	element.innerHTML = _.join(['Hello', 'webpack'], ' ');
// 	element.appendChild(br);
// 	element.appendChild(button);

// 	// Note that because a network request is involved, some indication
// 	// of loading would need to be shown in a production-level site/app.
// 	button.onclick = e =>
// 		import ( /* webpackChunkName: "print" */ './print').then(module => {
// 			var print = module.default;
// 			print();
// 		});
// 	return element;
// }
// document.body.appendChild(component());


//import Print from './print';

function component() {
	var element = document.createElement('div');
	// lodash 是由当前 script 脚本 import 导入进来的
	element.innerHTML = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.join(['Hello', 'webpack'], ' ');
	//element.onclick = Print.bind(null, 'Hello webpack!');
	return element;
}
document.body.appendChild(component());

/***/ })

},["vGYV"]);