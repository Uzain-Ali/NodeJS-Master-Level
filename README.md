# NodeJS-Master-Level
This repo is for mastering the NodeJS, basically the learning purpose

-You can't execute JS outside javascript because every browser have it's js engine
-Chrome: V8 Engine (most popular)
-FireFox: Spider Monkey
-Safari: Apple JS Engine
NodeJS
    -Ryan Dahl 
    -V8 Engine + C++ = NodeJS (Ryan)
    -You can run JS outside browser
    -JS can talk to native machine because of c++
    -You can create webservers in JS.
    -NodeJS is a Runtime Environment for JS
    -npm: node package manager [for install packages]
    -After V8 Engine got out for node all windows elements, DOM Manipulation remove.
    -After V8 Engine got out for node many other things also add

To start a project:
    -npn init
    -package.json:configuration file
    -you can create your own script on package.json

Modules/Packages:
    -Modular Programming: break code base into pieces
    -require function is use for import external module [require only in node not in js]
    -you have to export your function[module.exports]
    -we can export by using module.exports or directly use exports [exports.add = (a, b)=>a+b]
    -we use dot to find in current directory and diret name to built-in modules