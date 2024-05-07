// import ytouch from '../src/index.js';
import YSwipe from '../dist/yswipe.min.js';
let box = new YSwipe('box');
let label = document.getElementById('label');

box.left(() => {
  label.textContent = 'is left';
  console.log('is left');
});
box.right(() => {
  label.textContent = 'is right';
  console.log('is right');
});
box.top(() => {
  label.textContent = 'is top';
  console.log('is top');
});
box.down(() => {
  label.textContent = 'is down';
  console.log('is down');
});
