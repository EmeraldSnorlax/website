export async function load({ fetch }) {
	return { posts: (await (await fetch('/p/list')).json()) as App.Post[] };
}
