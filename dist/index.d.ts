declare class VideoPreload {
    private counter;
    private readonly target;
    private readonly func;
    constructor(_className: string, func: () => void);
    preload: () => void;
}
declare const _default: {
    VideoPreload: typeof VideoPreload;
};
export default _default;
