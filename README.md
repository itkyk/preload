# Preloader

## install
```
npm i @itkyk/preload
```

## How to use?
### Import this Module
```
import Preload from "@itkyk/preload"
```

### Use Video Preload
```
// HTML
<video class="js-preload-video" src="" data-video-path="/video/to/path/hoge.mp4" />

// JS
const videoPreload = new Preload.Video(className, callback);
```

### Use Image Preload
```
// HTML
!! not Usage !!

// JS
const fileNameArray = ["/img/to/path/hoge.jpg","/img/to/path/fuga.jpg"];
const imagePreload = new Preload.Image(fileNameArray, callback);
```

## Params
### VideoPreloader
| argument | type | default | description | 
|----------|------|---------|-------------|
| _className | string | js-preload-video | ターゲットとするクラス名を指定 |
| _func | function | null | 全てロードした時に発火する関数 |

### ImagePreloader
| argument | type | default | description | 
|----------|------|---------|-------------|
| _fileNameArray | Array<string> | null | プリロードしたい画像のパスを指定(配列で複数指定可) |
| _func | function | null | 全てロードした時に発火する関数 |