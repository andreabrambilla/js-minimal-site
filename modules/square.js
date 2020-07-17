"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.draw = draw;
exports.reportArea = reportArea;
exports.reportPerimeter = reportPerimeter;
exports.default = exports.name = void 0;
const name = 'square';
exports.name = name;

function draw(ctx, length, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, length, length);
  return {
    length: length,
    x: x,
    y: y,
    color: color
  };
}

function random(min, max) {
  let num = Math.floor(Math.random() * (max - min)) + min;
  return num;
}

function reportArea(length, listId) {
  let listItem = document.createElement('li');
  listItem.textContent = `${name} area is ${length * length}px squared.`;
  let list = document.getElementById(listId);
  list.appendChild(listItem);
}

function reportPerimeter(length, listId) {
  let listItem = document.createElement('li');
  listItem.textContent = `${name} perimeter is ${length * 4}px.`;
  let list = document.getElementById(listId);
  list.appendChild(listItem);
}

function randomSquare(ctx) {
  let color1 = random(0, 255);
  let color2 = random(0, 255);
  let color3 = random(0, 255);
  let color = `rgb(${color1},${color2},${color3})`;
  ctx.fillStyle = color;
  let x = random(0, 480);
  let y = random(0, 320);
  let length = random(10, 100);
  ctx.fillRect(x, y, length, length);
  return {
    length: length,
    x: x,
    y: y,
    color: color
  };
}

var _default = randomSquare;
exports.default = _default;