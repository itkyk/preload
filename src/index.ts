class Video{
    private counter: number;
    private readonly target: HTMLCollectionOf<Element>;
    private readonly func:()=>void;
    constructor(_className:string, func:()=>void){
        this.counter = 0;
        this.target = document.getElementsByClassName(_className);
        this.func = func;
        this.preload();
    }

    preload = () => {
        const video:HTMLVideoElement = this.target[this.counter] as HTMLVideoElement;
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

export default {Video}