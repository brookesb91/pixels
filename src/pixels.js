(function (window) {
  class Pixels {

    get _context() {
      return this._canvas.getContext('2d');
    }

    /**
     * Creates an instance of Pixels.
     *
     * @param {Object} config Pixels configuration.
     * @param {HTMLCanvasElement} config.canvas Canvas to render to.
     * @param {string[]} config.palette Color palette.
     * @param {number[][]} config.pixels Pixels to render.
     * @param {number} config.size Size of each rendered pixel block in pixels.
     * @memberof Pixels
     */
    constructor(config) {
      this._height = config.pixels.length;
      this._width = config.pixels[0].length;
      this._canvas = config.canvas;
      this._palette = config.palette;
      this._pixels = config.pixels;
      this._size = config.size;
    }

    /**
     * Render pixels to the configured canvas.
     *
     * @memberof Pixels
     */
    render() {
      this._initCanvas();

      // --> Row
      for (let y = 0; y < this._pixels.length; y++) {
        // --> Column
        for (let x = 0; x < this._pixels[y].length; x++) {
          const pixel = this._pixels[y][x];
          this._draw(pixel, x, y);
        }
      }
    }

    _initCanvas() {
      // Set the canvas height & width multiplied by pixel size.
      this._canvas.height = this._height * this._size;
      this._canvas.width = this._width * this._size;
      this._context.clearRect(0, 0, this._canvas.width, this._canvas.height);
    }

    /**
     * Draw a pixel to the canvas
     *
     * @param {number} pixel Pixel value to draw.
     * @param {number} x
     * @param {number} y
     * @memberof Pixels
     */
    _draw(pixel, x, y) {
      const posX = x * this._size;
      const posY = y * this._size;
      this._context.fillStyle = this._palette[pixel];
      this._context.fillRect(posX, posY, this._size, this._size);
    }
  }

  window.Pixels = Pixels;
})(window);