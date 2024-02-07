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
interface Part {
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
 * 
 * ** THIS CAN ONLY RUN IN THE BROWSER **
 * @returns {Promise<Part[]>} A promise that resolves to an array of parts.
 * @example
 * const parts = await loadParts();
 * // => [ { image: HTMLImageElement, type: 'eyes', id: 'eyes-001' }, ... ]
 */
export function loadParts(): Promise<Part[]> {
  if (typeof window === 'undefined') {
    throw new Error('you tried to loadParts outside of the browser...');
  }
  const parts = [
    // fixed parts
    loadPart('/av/body.png', 'body', 'body'),
    loadPart('/av/shadow.png', 'shadow', 'shadow'),
    loadPart('/av/hair.png', 'hair', 'hair'),

    // swappable parts
    loadPart('/av/glasses.png', 'glasses', 'glasses'), // glasses, default pfp, toggle if needed.
    loadPart('/av/eyebrows-001.png', 'eyebrows', 'eyebrows-001'), // slightly raised eyebrows, default pfp
    loadPart('/av/mouth-009.png', 'mouth', 'mouth-009'), // slight frown, default pfp
    loadPart('/av/outfit-018.png', 'outfit', 'outfit-018'), // blazer and shirt and tie, default pfp
    loadPart('/av/halo-003.png', 'halo', 'halo-003'), // red melting halo, default pfp
  ]
  return Promise.all(parts);
}

