/**
 * @file Load parts for use in the avatar.
 */

/**
  * What type the avatar part is.
  * @description Parts are written as the singular form.
  * @example 'eyes' // *one* pair of eyes.
  * @example 'mouth' // *one* mouth.
*/
type PartType = 'shadow' | 'halo' | 'hair' | 'pupils' | 'outfit' | 'mark' | 'eyebrows' | 'mouth' | 'eyes' | 'glasses' | 'body';

/**
 * A part of the avatar.
 * @example { image: HTMLImageElement, type: 'eyes', id: 'eyes-001' }
 */
export interface Part {
  image: HTMLImageElement;
  type: PartType;
  id: string;
}

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve) => {
    const img = new Image();
    img.addEventListener("load", () => { resolve(img); });
    img.src = src;
  });
}

async function loadPart(src: string, type: PartType, id: string): Promise<Part> {
  const image = await loadImage(src);
  return { image, type, id };
}

/**
  * Fetch all the parts we can use.
  * @description
  * To add additional parts, edit the `parts` object in this function.
  * 
  * ** THIS CAN ONLY RUN IN THE BROWSER **
  * @example
  * const parts = await loadParts();
  *	const ctx = canvas.getContext('2d');
  *	draw(ctx, [parts.body, parts.shadow]);
  * */
export function loadParts(): Promise<{ [id: string]: Part }> {
  if (typeof window === 'undefined') {
    throw new Error('you tried to loadParts outside of the browser...');
  }
  // Parts that we want to load and use.
  const parts = {
    'body': loadPart('/av/body.webp', 'body', 'body'),
    'shadow': loadPart('/av/shadow.webp', 'shadow', 'shadow'),
    'hair': loadPart('/av/hair.webp', 'hair', 'hair'),
    'glasses': loadPart('/av/glasses.webp', 'glasses', 'glasses'),
    'eyebrows-001': loadPart('/av/eyebrows-001.webp', 'eyebrows', 'eyebrows-001'),
    'mouth-009': loadPart('/av/mouth-009.webp', 'mouth', 'mouth-009'),
    'outfit-018': loadPart('/av/outfit-018.webp', 'outfit', 'outfit-018'),
    'halo-003': loadPart('/av/halo-003.webp', 'halo', 'halo-003'),
    'eyes-011': loadPart('av/eyes-011.webp', 'eyes', 'eyes-011'),
  }

  return Promise.all(Object.entries(parts).map(([id, partPromise]) => partPromise.then(part => [id, part])))
    .then(entries => Object.fromEntries(entries));
}

