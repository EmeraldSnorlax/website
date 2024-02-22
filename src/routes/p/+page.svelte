<script lang="ts">
	import dayjs from 'dayjs';
	import PixelarticonsBookOpen from '~icons/pixelarticons/book-open';
	import PixelarticonsCalendar from '~icons/pixelarticons/calendar';
	export let data;
</script>

<svelte:head>
	<title>rain.lgbt | posts</title>
	<meta name="author" content="rain" />
	<meta name="description" content="rain's posts." />

	<meta property="og:title" content="posts" />
	<meta property="og:description" content="rain's posts." />
	<meta name="twitter:title" content="posts" />
	<meta name="twitter:site" content="rain.lgbt" />
	<meta property="og:image" content="/av/pfp.webp" />
	<meta property="og:image:type" content="image/webp" />
	<meta property="og:image:width" content="300" />
	<meta property="og:image:height" content="300" />
</svelte:head>

<div
	class="my-8 w-auto border-2 border-neutral-300 bg-neutral-300 sm:mx-4 md:my-14 lg:mx-auto lg:max-w-screen-lg dark:border-neutral-400 dark:bg-slate-800"
>
	<h1 class="px-4 py-0.5 font-sans text-3xl font-bold dark:bg-neutral-900 dark:text-white">
		Posts
	</h1>
	<ul>
		{#each data.posts as post, i}
			<li class={`dark:bg-neutral-800 ${i % 2 === 0 ? 'bg-gray-100' : 'bg-gray-200'}`}>
				<a
					href="/p/{post.slug}"
					class={`group block ${i + 1 !== data.posts.length ? 'border-b-2 border-black' : ''} px-4 py-2`}
				>
					<div class="flex items-center">
						<h2
							class="font-sans text-2xl font-bold text-black group-hover:underline group-focus:underline sm:text-4xl dark:text-white"
						>
							{post.title}
						</h2>
						<PixelarticonsBookOpen
							class="ms-2 hidden text-neutral-400 group-hover:text-blue-400 group-focus:text-blue-400 sm:block sm:h-8 sm:w-8 dark:text-neutral-300"
						/>
					</div>
					<span class="font-serif-bitmap text-gray-700 sm:text-xl dark:text-neutral-100"
						>{post.description}</span
					>
					<div class="items-top mt-2 flex">
						<PixelarticonsCalendar
							class="me-3 hidden text-neutral-400 sm:block sm:h-6 sm:w-6 dark:text-neutral-300"
						/>
						<span
							class={`block font-bold sm:mt-px sm:text-lg dark:text-neutral-400 ${i % 2 === 0 ? 'text-neutral-600' : 'text-neutral-700'}`}
						>
							Posted on
							<time class="text-neutral-900 dark:text-neutral-200">
								{dayjs(post.date).format('YYYY-MMM-DD')}
							</time>
						</span>
					</div>
				</a>
			</li>
		{/each}
	</ul>
</div>
