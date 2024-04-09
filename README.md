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

HTTP Server:

URL: Uniforn Resource Locator
    =https://www.uzainali.com/
        -https://[Protocol][Secure][http:Not Secure,no ssl certificate][Hypertext Transfer Protocol Secure]
        -www.uzainali.com: [Domain][User Friendly of IP Address of my server]
        -/[Path, homepage, root path]
        -we can have many path. nested path also
        -Query Parameter[Extra information we can pass on the url][after ?]
        -Server: Req=> url parsing=>get data from database =>provide data

HTTP METHOD:
    -GET: GET DATA FROM SERVER[Read]
    -POST: Send and mutate data in server[Write][form data usually]
    - PUT: file or image upload
    -PATCH: Update
    -DELETE: delete data


ExpressJS:
    -Framework/Library
    -app is basically a handler function
    -http module is already in express
    -app.method(path, handler)

Versioning:
    -imporant in security pov
    -i can hack your whole server
    -4.18.2
        -1st part -> 4[Major/Breaking Release/Update][if app is in 4 version and now you're using 5 version your app will break]
        -2nd part -> 18[Recommended Bug Fix][Security Fix][Functionality add]
        -3rd part -> 2[minor fixes][Optional update]
        -"^":Install all recommended and minor updates
        -"^4.18.2":compatible with version[4.18.2 => < 5.0.0]
        -"~":only install minor updates
        -range: 4.0.0 - 4.9-9
        -"or operatore":4.18.2 || 4.17.2 
        -latest: install latest version
        -npm i express@4.18.2


RESTfull/REST API:
    -The rules follows by server and client on sending requests and responses
    -SSR: SERvers Side Rendering[page rendered on server, page developed on server]
    -JSON:key value pair
    -type of api
    -Rules:
        -Server Client Architecture[Server and clients and diff machines they're not dependent on each other]
        -Always respect all http methods[use respected method for relative task]
        -Authentication/Authorization
