import type { Part } from './parts';

/**
 * Draw an avatar on a canvas.
 * This will mutate the canvas, and return nothing.
 * @param ctx 2D canvas context. Should be 600x600.
 * @param parts Array of all parts to draw. Front of the array is the 'bottom' and will be covered by later elements.
 * @param clear Set to false to not clear the canvas before drawing (why...?). Optional, defaults to true.
 */
export function draw(ctx: CanvasRenderingContext2D|OffscreenCanvasRenderingContext2D, parts: Part[], clear = true) {
  if (clear) {
    ctx.clearRect(0, 0, 600, 600);
  }
  parts.forEach((part) => {
    ctx.drawImage(part.image, 0, 0, 600, 600);
  });
}