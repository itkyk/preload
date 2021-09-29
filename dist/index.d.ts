declare class Video {
    private counter;
    private readonly target;
    private readonly func;
    constructor(_className: string | undefined, _func: () => void);
    preload: () => void;
}
declare class Image {
    private counter;
    private readonly filePathArray;
    private readonly func;
    constructor(_fileNameArray: Array<string>, _func: () => {});
    preload: () => void;
}
declare const _default: {
    Video: typeof Video;
    Image: typeof Image;
};
export default _default;
