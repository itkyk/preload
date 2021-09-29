"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Video = /** @class */ (function () {
    function Video(_className, _func) {
        var _this = this;
        if (_className === void 0) { _className = "js-preload-video"; }
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
        this.func = _func;
        this.preload();
    }
    return Video;
}());
var Image = /** @class */ (function () {
    function Image(_fileNameArray, _func) {
        var _this = this;
        this.preload = function () {
            var image = document.createElement("img");
            image.src = _this.filePathArray[_this.counter];
            image.onload = function () {
                _this.counter++;
                if (_this.filePathArray.length !== _this.counter) {
                    _this.preload();
                }
                else {
                    _this.counter = 0;
                    if (_this.func) {
                        _this.func();
                    }
                }
            };
        };
        this.counter = 0;
        this.filePathArray = _fileNameArray;
        this.func = _func;
        this.preload();
    }
    return Image;
}());
exports.default = { Video: Video, Image: Image };
