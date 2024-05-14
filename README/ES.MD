# YSwipe

Detecta el movimiento del `mouse` y el `touch` (`left`, `right`, `top`, `down`).

## Instalacion

### Mediante local

Descarga el archivo `yswipe.min.js` y `yswipe.min.js.map` e importa el `yswipe.min.js`.

```js
import YSwipe from './dist/yswipe.min.js';
```

### Mediante url

Copia la url de `github raw` de `yswipe.min.js` y usalo para la importacion.

```js
import YSwipe from 'https://raw.githubusercontent.com/FedYou/yswipe/main/dist/yswipe.min.js';
```

### Uso

```js
let swipe = new YSwipe('<Id del elemento>');

swipe.left(() => {
  //función
});
swipe.right(() => {
  //función
});
swipe.top(() => {
  //función
});
swipe.down(() => {
  //función
});
```

Si se detecta el movimiento activara la función.

> [!NOTE]
> Puedes usar todos los movientos simultáneamente.
