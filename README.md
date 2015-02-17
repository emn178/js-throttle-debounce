# js-throttle-debounce
[![Build Status](https://travis-ci.org/emn178/js-throttle-debounce.svg?branch=master)](https://travis-ci.org/emn178/js-throttle-debounce)
[![Coverage Status](https://coveralls.io/repos/emn178/js-throttle-debounce/badge.svg?branch=master)](https://coveralls.io/r/emn178/js-throttle-debounce?branch=master)  
[![NPM](https://nodei.co/npm/js-throttle-debounce.png?stars&downloads)](https://nodei.co/npm/js-throttle-debounce/)  
A javascript prototype plugin provides throttle and debounce methods.  
This refers to [jquery-throttle-debounce](https://github.com/cowboy/jquery-throttle-debounce)

## Download
[Compress](https://raw.github.com/emn178/js-throttle-debounce/master/build/js-throttle-debounce.min.js)  
[Uncompress](https://raw.github.com/emn178/js-throttle-debounce/master/src/js-throttle-debounce.js)

## Installation
You can also install js-throttle-debounce by using Bower.

    bower install js-throttle-debounce

For node.js, you can use this command to install:

    npm install js-throttle-debounce

## Demo
[Demo](http://emn178.github.io/js-throttle-debounce/samples/demo/)

## Usage
You could use like this:
JavaScript
```JavaScript
function yourMethod() {
  // ...
}
var throttle = yourMethod.throttle();
var throttleIgnoreLast = yourMethod.throttle(500, true);
var debounce = yourMethod.debounce(100);
```

### Methods

#### Function.throttle([delay], [ignoreLast])

Create a throttle method.

##### *delay: `Number` (default: `100`)*

Set delay in milliseconds.

##### *ignoreLast: `Boolean` (default: `false`)*

Set true that last trigger will not be executed.

#### Function.debounce([delay])

Create a debounce method.

##### *delay: `Number` (default: `100`)*

Set delay in milliseconds.

## Example
### AJAX Search
HTML
```HTML
<input type="text" onchange="search()" />
```
JavaScript
```JavaScript
function ajaxSearch() {
  // ... do AJAX search by keyword
}
search = ajaxSearch.debounce();
```
### Resize
JavaScript
```JavaScript
function updateLayouts() {
  // ... render something when resizing
}
window.onresize = updateLayouts.throttle();
```

## License
The project is released under the [MIT license](http://www.opensource.org/licenses/MIT).

## Contact
The project's website is located at https://github.com/emn178/js-throttle-debounce  
Author: emn178@gmail.com
