/*
 * js-throttle-debounce v0.1.1
 * https://github.com/emn178/js-throttle-debounce
 *
 * Copyright 2015, emn178@gmail.com
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */
;(function(root, undefined) {
  'use strict';

  Function.prototype.throttle = function(delay, ignoreLast) {
    var func = this;
    var lastTime = 0;
    var timer;
    if(delay === undefined) {
      delay = 100;
    }
    return function() {
      var self = this, args = arguments;
      var exec = function() {
        lastTime = new Date();
        func.apply(self, args);
      };
      if(timer) {
        clearTimeout(timer);
        timer = null;
      }
      var diff = new Date() - lastTime;
      if (diff > delay) {
        exec();
      } else if(!ignoreLast) {
        timer = setTimeout(exec, delay - diff);
      }
    };
  };

  Function.prototype.debounce = function(delay) {
    var func = this;
    var timer;
    if(delay === undefined) {
      delay = 100;
    }
    return function() {
      var self = this, args = arguments;
      if(timer) {
        clearTimeout(timer);
        timer = null;
      }
      timer = setTimeout(function() {
        func.apply(self, args);
      }, delay);
    };
  };
}(this));
