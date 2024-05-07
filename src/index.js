export default class YSwipe {
  #element;
  #leftCallback = () => {};
  #rightCallback = () => {};
  #topCallback = () => {};
  #downCallback = () => {};
  #startX = null;
  #startY = null;
  #threshold = 10;
  constructor(id) {
    this.#element = document.getElementById(id);

    const start = event => {
      if (typeof window.ontouchstart !== 'undefined') {
        const touch = event.touches[0];
        this.#startX = touch.clientX;
        this.#startY = touch.clientY;
      } else {
        this.#startX = event.clientX;
        this.#startY = event.clientY;
      }
    };
    const gesture = (deltaX, deltaY) => {
      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        if (deltaX > this.#threshold) {
          if (this.#startX !== null) {
            this.#rightCallback();
          }
        } else if (deltaX < -this.#threshold) {
          if (this.#startX !== null) {
            this.#leftCallback();
          }
        }
      } else {
        if (deltaY > this.#threshold) {
          if (this.#startY !== null) {
            this.#downCallback();
          }
        } else if (deltaY < -this.#threshold) {
          if (this.#startY !== null) {
            this.#topCallback();
          }
        }
      }
    };
    const move = event => {
      if (!this.#startX || !this.#startY) return;
      const deltaX = (event.clientX || event.touches[0].clientX) - this.#startX;
      const deltaY = (event.clientY || event.touches[0].clientY) - this.#startY;

      gesture(deltaX, deltaY);

      this.#startX = null;
      this.#startY = null;
    };
    const up = () => {
      this.#startX = null;
      this.#startY = null;
    };
    this.#element.addEventListener('mousedown', function (event) {
      start(event);
    });
    this.#element.addEventListener('mousemove', function (event) {
      move(event);
    });
    this.#element.addEventListener('mouseup', function () {
      up();
    });
    this.#element.addEventListener('touchstart', function (event) {
      start(event);
    });
    this.#element.addEventListener('touchmove', function (event) {
      event.preventDefault();
      move(event);
    });
    this.#element.addEventListener('touchend', function () {
      up();
    });
  }

  left(callback) {
    this.#leftCallback = callback;
    return this;
  }
  right(callback) {
    this.#rightCallback = callback;
    return this;
  }
  top(callback) {
    this.#topCallback = callback;
    return this;
  }
  down(callback) {
    this.#downCallback = callback;
    return this;
  }
}
