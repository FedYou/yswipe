# YSwipe

Detects `mouse` and `touch` movement (`left`, `right`, `top`, `down`).

## Instalacion

### Mediante local

Download the `yswipe.min.js` and `yswipe.min.js.map` file and import the `yswipe.min.js`.

```js
import YSwipe from './dist/yswipe.min.js';
```

### Mediante url

Copy the `github raw` url of `yswipe.min.js` and use it for importing.

```js
import YSwipe from 'https://raw.githubusercontent.com/FedYou/yswipe/main/dist/yswipe.min.js';
```

### Uso

```js
let swipe = new YSwipe('<Id del elemento>');

swipe.left(() => {
  //function
});
swipe.right(() => {
  //function
});
swipe.top(() => {
  //function
});
swipe.down(() => {
  //function
});
```

If motion is detected, it will activate the function.

> [!NOTE]
> You can use all movements simultaneously.
