import type { Part } from './parts';

/**
 * Draw an avatar on a canvas.
 * By default, the avatar will have glasses and a shadow.
 * 
 * @param ctx 2D canvas context. Should be 600x600.
 * @param allParts List of all parts.
 * @param partIDs List of part ids to draw. Front of the array is drawn first (bottom).
 * Do not include body, hair, glasses, or shadow in this list.
 * @param glasses Set to false to not draw glasses. Optional, defaults to true.
 * @param shadow Set to false to not draw the overlay shadow. Optional, defaults to true.
 * @param clear Set to false to not clear the canvas before drawing (why...?). Optional, defaults to true.
 */
export function draw(ctx: CanvasRenderingContext2D, allParts: Part[], partIDs: string[], glasses=true, shadow=true, clear=true) {
  if (clear) {
    ctx.clearRect(0, 0, 600, 600);
  }

  // TODO: handle if (somehow?) the parts are not loaded yet.
  ctx.drawImage(allParts.find(p => p.id === 'body')!.image, 0, 0, 600, 600);
  ctx.drawImage(allParts.find(p => p.id === 'hair')!.image, 0, 0, 600, 600);
  if (glasses) {
    ctx.drawImage(allParts.find(p => p.id === 'glasses')!.image, 0, 0, 600, 600);
  }

  partIDs.forEach((partName) => {
    const part = allParts.find(p => p.id === partName);
    if (part) {
      if (part.type === 'body' || part.type === 'hair' || part.type === 'glasses' || part.type === 'shadow') {
        throw new Error(`do not pass ${partName} -- it is a ${part.type} and is controlled elsewhere.`);
      }
      ctx.drawImage(part.image, 0, 0, 600, 600);
    } else {
      throw new Error(`part ${partName} not found`);
    }
  });
  if (shadow) {
    ctx.drawImage(allParts.find(p => p.id === 'shadow')!.image, 0, 0, 600, 600);
  }
}