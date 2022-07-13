# arpp
The idea behind this repo is to create a very simple programming language used by architects to simplify their work.

The language will also have an official application used for creation of buildings with a preview.

Plans include both 2D and 3D renders and ability to export to AutoCAD.

### Current Progress:
##### 2d.arpp
```
render 2d

room height:5 width:5

forward 10
right 5

room height:10 width:10
  ```
  ##### 3d.arpp
```
render 3d

goto 0 0 0
color 0a0a0a
room 50 10 10
```
###### Note: The current proof-of-concept caused the change in the code for 2d and 3d renders, both renders will have the same code syntax as development continues..
  ### Compiling:
  ##### 2d:
  Write an arpp file (example above) and save it to building.arpp in the same directory of the compiler file (to change name you need to change compiler code for now), then run `node compiler.js` and a building.dxf should be created.
  ##### 3d:
  Write an arpp file (example above) and save it to building.arpp in the same directory of the compiler file (to change name you need to change compiler code for now), then run `node compiler.js` and a 3d.json should be created. Then start an HTTP server in the directory (with index.html being in the )
  More soon.
