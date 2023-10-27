type PreloadCallback = (status: "complete" | "loading", loadedFiles: string[], total: number) => void;

class Video{
    private counter: number;
    private readonly target: NodeListOf<Element>;
    private readonly func:PreloadCallback;
    private loadedFiles: string[];
    constructor(attribute: string, callback: PreloadCallback){
        this.counter = 0;
        this.target = document.querySelectorAll(attribute);
        this.func = callback;
        this.loadedFiles = [];
        this.preload();
    }

    preload = () => {
        const video = this.target[this.counter] as HTMLVideoElement;
        video.src = video.getAttribute("data-video-path") as string;
        this.target[this.counter].addEventListener("canplaythrough", () => {
          this.loadedFiles.push(video.src);
            if (this.target.length - 1 === this.counter) {
                this.func("complete", this.loadedFiles, this.target.length);
            } else {
                this.counter++;
                this.func("loading", this.loadedFiles, this.target.length)
                this.preload();
            }
        });
        video.load();
    }
}

class Image {
    private counter: number;
    private readonly filePathArray: Array<string>;
    private readonly func: PreloadCallback;
    private loadFiles: string[];

    constructor(filePathArray:Array<string>, callback:PreloadCallback) {
        this.counter = 0;
        this.filePathArray = filePathArray;
        this.func = callback;
        this.loadFiles = [];
        this.preload();
    }

    preload = () => {
        const image = document.createElement("img") as HTMLImageElement;
        image.src = this.filePathArray[this.counter];
        image.onload = () => {
            this.loadFiles.push(this.filePathArray[this.counter]);
            this.counter++;
            if (this.filePathArray.length !== this.counter) {
              this.func("loading", this.loadFiles, this.filePathArray.length);
                this.preload();
            } else {
                this.counter = 0;
                this.func("complete", this.loadFiles, this.filePathArray.length);
            }
        }
    }
}

export {Video, Image};