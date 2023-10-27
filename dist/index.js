"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Image = exports.Video = void 0;
var Video = /** @class */ (function () {
    function Video(attribute, callback) {
        var _this = this;
        this.preload = function () {
            var video = _this.target[_this.counter];
            video.src = video.getAttribute("data-video-path");
            _this.target[_this.counter].addEventListener("canplaythrough", function () {
                _this.loadedFiles.push(video.src);
                if (_this.target.length - 1 === _this.counter) {
                    _this.func("complete", _this.loadedFiles, _this.target.length);
                }
                else {
                    _this.counter++;
                    _this.func("loading", _this.loadedFiles, _this.target.length);
                    _this.preload();
                }
            });
            video.load();
        };
        this.counter = 0;
        this.target = document.querySelectorAll(attribute);
        this.func = callback;
        this.loadedFiles = [];
        this.preload();
    }
    return Video;
}());
exports.Video = Video;
var Image = /** @class */ (function () {
    function Image(filePathArray, callback) {
        var _this = this;
        this.preload = function () {
            var image = document.createElement("img");
            image.src = _this.filePathArray[_this.counter];
            image.onload = function () {
                _this.loadFiles.push(_this.filePathArray[_this.counter]);
                _this.counter++;
                if (_this.filePathArray.length !== _this.counter) {
                    _this.func("loading", _this.loadFiles, _this.filePathArray.length);
                    _this.preload();
                }
                else {
                    _this.counter = 0;
                    _this.func("complete", _this.loadFiles, _this.filePathArray.length);
                }
            };
        };
        this.counter = 0;
        this.filePathArray = filePathArray;
        this.func = callback;
        this.loadFiles = [];
        this.preload();
    }
    return Image;
}());
exports.Image = Image;
