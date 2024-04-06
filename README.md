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
    -npm init
    -package.json:configuration file
    -you can create your own script on package.json

Modules/Packages:
    -Modular Programming: break code base into pieces
    -require function is use for import external module [require only in node not in js]
    -you have to export your function[module.exports]
    -we can export by using module.exports or directly use exports [exports.add = (a, b)=>a+b]
    -we use dot to find in current directory and diret name to built-in modules

File Handling(FS Module)
    -you cant do this through javascript
    -use to interact with files

    -writeFileSync:Syncronous [Blocking]
    -writeFile:Asyncronous[Non Blocking]

    -readFileSync: return and we can store in an variable
    -readFile:Doesn't return but us a arrow function as 3rd parameter to find if error or result

    -appendFileSync: to add data 
    -cpSync:to copy file
    -statSync:statistic of file
    -unlinkSync:delete file
    -mkdirSync: to make directory [fs.mkdirSync("uzain/a/b", {recursive:true})]

Architecture:
    -Start with client make request to the server wich is in nodejs->
    ->event queue ->event loop[check event queue has requests][pickup queue can be of 2 types blocking operations, and non-blocking operation]
    -Blocking operation:Sync task
    -Non-Blocking:Async Task
    -if request is non-blocking ops=> process=>response
    -if blocking =>thread pool[thread:worker]=>result=>Response
    -Initially/default we have 4 threads 
    -Max? = 8core so 8 threads