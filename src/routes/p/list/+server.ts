import { json } from "@sveltejs/kit";


export async function GET() {
	const modules = import.meta.glob(`/src/routes/p/*/+page.{md,svx,svelte.md}`);

	const postPromises = Object.entries(modules).map(([path, resolver]) =>
		resolver().then(
			(post) => ({
				slug: path.split("/")[4],
				...(post as unknown as App.MdsvexFile).metadata
			} as App.Post)
		)
	);

	const posts = await Promise.all(postPromises);
	posts.sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1));

	return json(posts);
}
