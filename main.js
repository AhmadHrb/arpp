/*
 * Official Arpp language.
 * MIT License.
 * Copyright AhmadHrb. All Rights Reserved.
 */

const Drawing = require('dxf-writer');
let d = new Drawing();
const fs = require('fs');

let renderType = 0; //2d or 3d

// current position, used to draw
let currentX = 0;
let currentY = 0;

exports.init = function() {
    d.setUnits('Centimeters');
    d.addLayer('main', Drawing.ACI.RED, 'CONTINUOUS');
    d.setActiveLayer('main');

}
exports.save = function () {
    fs.writeFileSync('building.dxf', d.toDxfString());
}
// change 2d and 3d rendering
exports.setRender = function (type) {
    if (type == "2d") {
        renderType = 0;
    } else if (type == "3d") {
        renderType = 1;
    } else {
        throw "render type, only 2d and 3d are allowed.";
    }
}

exports.createRoom = function (width,height) {
if (renderType == 0) {
    d.drawRect(currentX,currentY,width,height);
}
}
exports.forward = function (steps) {
    currentY += steps;
}
exports.right = function (steps) {
    currentX += steps;
}