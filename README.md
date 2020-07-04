# Pixels

:space_invader: A simple HTML canvas pixel art renderer.

## Quick Start

### Add to project

Include in your HTML.

```html
<script src="path/to/pixels.js"></script>
```

### Create a color palette

A palette is an array of valid color strings.

```js
const palette = ['transparent', '#D82800', '#887000', '#FC9838'];
```

### Define pixels

Defined pixels are of type `number[][]`.

The outer array defines each row of pixels, from top to bottom.

The inner array defines each pixel in the row from left to right and must refer to a valid index of your palette.

```js
const pixels = [
  [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
  [0, 0, 0, 2, 2, 2, 2, 3, 3, 2, 3, 0, 0, 0, 0],
  [0, 0, 2, 2, 3, 2, 3, 3, 3, 2, 3, 3, 3, 0, 0],
  [0, 0, 2, 2, 3, 2, 2, 3, 3, 3, 2, 3, 3, 3, 0],
  [0, 0, 2, 2, 2, 3, 3, 3, 3, 2, 2, 2, 2, 0, 0],
  [0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0],
  [0, 0, 0, 2, 2, 2, 1, 2, 2, 2, 0, 0, 0, 0, 0],
  [0, 0, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 0, 0],
  [0, 2, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2, 0],
  [0, 3, 3, 3, 2, 1, 3, 1, 1, 3, 1, 2, 3, 3, 0],
  [0, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 3, 3, 3, 0],
  [0, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 0],
  [0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0],
  [0, 0, 2, 2, 2, 2, 0, 0, 0, 2, 2, 2, 2, 0, 0],
  [0, 2, 2, 2, 2, 2, 0, 0, 0, 2, 2, 2, 2, 2, 0],
];
```

### Add a canvas

Add a canvas to your HTML that will be used as the rendering target.

> There is no need to define a height or width for the canvas as it is sized programmatically.

```html
<canvas id="mario"></canvas>
```

### Configure

Configure a new `Pixels` object.

```js
const canvas = document.querySelector('canvas#mario');

const mario = new Pixels({
  canvas, // <-- Target canvas.
  palette, // <-- Colour palette.
  pixels, // <-- Pixels to render.
  size: 10, // <-- The height & width of each rendered pixel (px).
});
```

### Render

Call `render()` to render the configured `Pixels` object.

```js
mario.render();
```

![Mario](/images/mario.PNG)
