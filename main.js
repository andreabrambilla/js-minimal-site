"use strict";

var _canvas = require("./modules/canvas.js");

var _square = _interopRequireWildcard(require("./modules/square.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

let myCanvas = (0, _canvas.create)('myCanvas', document.body, 480, 320);
let reportList = (0, _canvas.createReportList)(myCanvas.id);
let square1 = (0, _square.draw)(myCanvas.ctx, 50, 50, 100, 'blue');
(0, _square.reportArea)(square1.length, reportList);
(0, _square.reportPerimeter)(square1.length, reportList); // Use the default

let square2 = (0, _square.default)(myCanvas.ctx);