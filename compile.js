var LineByLineReader = require('line-by-line'),
    lr = new LineByLineReader('building.arpp');
let arpp = require("./main.js");

arpp.init();

// lr.on('error', function (err) {});

lr.on('line', function (line) {
    if (line == "" || line == " ") return;
    if (line.startsWith("render")) {
        let renderType = line.split(" ")[1];
        if (renderType == "2d") {
            arpp.setRender("2d")
        } else if (renderType == "3d") {
            arpp.setRender("3d");
        } else throw "Unknown render type, only 2d and 3d are supported";

        console.log("Changing render type to " + renderType)
    } else if (line.startsWith("room")) {
        let splitIt = line.split(" ");
        let roomHeight;
        let roomWidth;
        if (splitIt[1].startsWith("height:")) {
            roomHeight = splitIt[1].slice(7);
            console.log("room height: " + roomHeight)
        } else throw "Error in room, expected room height:y width:x (where x and y are numbers)";
        if (splitIt[2].startsWith("width:")) {
            roomWidth = splitIt[2].slice(6);
            console.log("room width: " + roomWidth)
        } else throw "Error in room, expected room height:y width:x (where x and y are numbers)";
        arpp.createRoom(roomWidth,roomHeight);
    }
});

lr.on('end', function () {
    arpp.save();
});