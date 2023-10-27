declare type PreloadCallback = (status: "complete" | "loading", loadedFiles: string[], total: number) => void;
declare class Video {
    private counter;
    private readonly target;
    private readonly func;
    private loadedFiles;
    constructor(attribute: string, callback: PreloadCallback);
    preload: () => void;
}
declare class Image {
    private counter;
    private readonly filePathArray;
    private readonly func;
    private loadFiles;
    constructor(filePathArray: Array<string>, callback: PreloadCallback);
    preload: () => void;
}
export { Video, Image };
