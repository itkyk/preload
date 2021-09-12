declare class Video {
    private counter;
    private readonly target;
    private readonly func;
    constructor(_className: string, func: () => void);
    preload: () => void;
}
declare const _default: {
    Video: typeof Video;
};
export default _default;
