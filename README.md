# Preloader

## install
```
npm i @itkyk/preload
```

## How to use?
### Import this Module

```typescript
import * as Preload from "@itkyk/preload";
// OR
import {Image, Video} from "@itkyk/preload";
```

### Use Video Preload
```html
// HTML
<video class="js-preload-video" src="" data-video-path="/video/to/path/hoge.mp4" />
```
```typescript
new Preload.Video(".js-preload-video", (status, loadedFiles, total) => {
  console.log(status, loadedFiles, total); // complete, ["/video/to/path/hoge.mp4"] 1;
});
```

### Use Image Preload
```typescript
const fileNameArray = ["/img/to/path/hoge.jpg","/img/to/path/fuga.jpg"];
const imagePreload = new Preload.Image(fileNameArray, (status, loadedFiles, total) => {
  console.log(status, loadedFiles, total); // loading ["/img/to/path/hoge.jpg"] 2;
});
```

## Params
### VideoPreloader
| argument  | type  | description      | 
|-----------|------|------------------|
| attribute | string | ターゲットとするクラス名を指定  |
| callback  | function | 各ファイルが読み込まれた時に実行 |

### ImagePreloader
| argument      | type | default | description                | 
|---------------|------|---------|----------------------------|
| filePathArray | Array<string> | null | プリロードしたい画像のパスを指定(配列で複数指定可) |
| callback      | function | null | 各ファイルが読み込まれた時に実行  |