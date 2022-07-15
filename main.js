/*
 * Official Arpp language.
 * MIT License.
 * Copyright AhmadHrb. All Rights Reserved.
 */

const Drawing = require('dxf-writer');
let d = new Drawing();
const fs = require('fs');

exports.renderType = 0; //2d or 3d

// current position, used to draw
exports.currentX = 0;
exports.currentY = 0;
exports.currentZ = 0;
exports.currentColor = "ffffff";

exports.init = function () {
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
        this.renderType = 0;
    } else if (type == "3d") {
        this.renderType = 1;
    } else {
        throw "render type, only 2d and 3d are allowed.";
    }
}

exports.createRoom = function (width, height) {
    if (this.renderType == 0) {
        d.drawRect(this.currentX, this.currentY, this.currentX + width, this.currentY + height);
        console.log(this.currentX, this.currentY, this.currentX + width, this.currentY + height)
    }
}
exports.forward = function (steps) {
    this.currentY += steps;
}
exports.right = function (steps) {
    this.currentX += steps;
}