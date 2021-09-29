class Video{
    private counter: number;
    private readonly target: HTMLCollectionOf<Element>;
    private readonly func:()=>void;
    constructor(_className:string="js-preload-video", _func:()=>void){
        this.counter = 0;
        this.target = document.getElementsByClassName(_className);
        this.func = _func;
        this.preload();
    }

    preload = () => {
        const video = this.target[this.counter] as HTMLVideoElement;
        video.src = video.getAttribute("data-video-path") as string;
        this.target[this.counter].addEventListener("canplaythrough", () => {
            if (this.target.length - 1 === this.counter) {
                this.func();
            } else {
                this.counter++;
                this.preload();
            }
        });
        video.load();
    }
}

class Image {
    private counter: number;
    private readonly filePathArray: Array<string>;
    private readonly func: ()=>{};

    constructor(_fileNameArray:Array<string>, _func:()=>{}) {
        this.counter = 0;
        this.filePathArray = _fileNameArray;
        this.func = _func;
        this.preload();
    }

    preload = () => {
        const image = document.createElement("img") as HTMLImageElement;
        image.src = this.filePathArray[this.counter];
        image.onload = () => {
            this.counter++;
            if (this.filePathArray.length !== this.counter) {
                this.preload();
            } else {
                this.counter = 0;
                if (this.func) {
                    this.func();
                }
            }
        }
    }
}

export default {Video, Image};