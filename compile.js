var LineByLineReader = require('line-by-line'),
    lr = new LineByLineReader('building.arpp');
let arpp = require("./main.js");

arpp.init();

// lr.on('error', function (err) {});

lr.on('line', function (line) {
    if (line == "" || line == " " || line.startsWith("//")) return;
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
            if (parseInt(roomHeight)) {
                console.log("room height: " + roomHeight)
            } else throw "Error expected number for room height";
        } else throw "Error in room, expected room height:y width:x (where x and y are numbers)";
        if (splitIt[2].startsWith("width:")) {
                roomWidth = splitIt[2].slice(6);
            if (parseInt(roomWidth)) {
                console.log("room width: " + roomWidth)
            } else throw "Error expected number for room width";
        } else throw "Error in room, expected room height:y width:x (where x and y are numbers)";
        arpp.createRoom(parseInt(roomWidth),parseInt(roomHeight));
    } else if (line.startsWith("forward")) {
        let forward = line.split(" ");
        if (parseInt(forward[1])) {
            arpp.forward(parseInt(forward[1]));
        } else throw "Error expected number for forward, example: forward 10";
    } else if (line.startsWith("right")) {
        let right = line.split(" ");
        if (parseInt(right[1])) {
            arpp.right(parseInt(right[1]));
        } else throw "Error expected number for right, example: right 10";
    }
});

lr.on('end', function () {
    arpp.save();
});