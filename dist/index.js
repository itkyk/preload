"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Video = /** @class */ (function () {
    function Video(_className, func) {
        var _this = this;
        this.preload = function () {
            var video = _this.target[_this.counter];
            video.src = video.getAttribute("data-video-path");
            _this.target[_this.counter].addEventListener("canplaythrough", function () {
                if (_this.target.length - 1 === _this.counter) {
                    _this.func();
                }
                else {
                    _this.counter++;
                    _this.preload();
                }
            });
            video.load();
        };
        this.counter = 0;
        this.target = document.getElementsByClassName(_className);
        this.func = func;
        this.preload();
    }
    return Video;
}());
exports.default = { Video: Video };
