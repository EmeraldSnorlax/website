// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import 'unplugin-icons/types/svelte'

declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
		interface MdsvexFile {
			default: import('svelte/internal').SvelteComponent;
			metadata: Record<string, string>;
		}
		interface Post {
			/** slug as it appears in the url. same as file path. */
			slug: string;
			/** full title of the post */
			title: string;
			/** date of the post. this is a EVIL FAKE STRING AS A DATE!! */
			date: string;
			/** one or two line description of the post for social embeds */
			description: string;
			/** tags for the post */
			tags?: string[];
		}
	}
}

export {};
