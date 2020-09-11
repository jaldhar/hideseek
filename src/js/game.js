"use strict";

var $ = {};

$.init = function () {
    $.loop();
};

$.loop = function () {
    $.render();
    $.update();

    window.requestAnimFrame($.loop);
};

$.update = function () {
};

$.render = function () {
};

window.addEventListener('load', $.init, false);
