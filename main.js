/*
 * Official Arpp language.
 * MIT License.
 * Copyright AhmadHrb. All Rights Reserved.
 */

let renderType = 0; //2d or 3d

// current position, used to draw
let currentX = 0;
let currentY = 0;

// change 2d and 3d rendering
function setRender(type) {
    if (type == "2d") {
        renderType = 0;
    } else if (type == "3d") {
        renderType = 1;
    } else {
        throw "render type, only 2d and 3d are allowed.";
    }
}

