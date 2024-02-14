<script lang="ts">
	export let data;
</script>

<svelte:head>
	<title>rain.lgbt | posts</title>
</svelte:head>

<div class="window p-4 my-8 w-auto bg-gray-100 sm:mx-4 md:my-14 lg:mx-auto lg:max-w-screen-lg">
	<h1 class="absolute -top-8 font-sans text-3xl font-bold">Posts</h1>
	<ul class="-m-4">
		{#each data.posts as post, i}
			<li class={`${i % 2 === 0 ? 'bg-gray-100' : 'bg-gray-200'}`}>
				<a
					href="/p/{post.slug}"
					class={`group block ${i + 1 !== data.posts.length ? 'border-b-2 border-black' : ''} px-4 py-2`}
				>
					<div class="flex items-center">
						<h2
							class="font-sans text-2xl font-bold text-black group-hover:underline group-focus:underline sm:text-4xl"
						>
							{post.title}
						</h2>
						<svg
							role="presentation"
							xmlns="http://www.w3.org/2000/svg"
							class="ms-4 h-6 text-gray-400 sm:h-8"
							viewBox="0 0 24 24"
							><path
								fill="currentColor"
								d="M3 3h8v2H3v12h8V5h2v12h8V5h-8V3h10v16H13v2h-2v-2H1V3zm16 7h-4v2h4zm-4-3h4v2h-4zm2 6h-2v2h2z"
							/></svg
						>
					</div>
					<span class="font-serif text-gray-700 sm:text-xl">{post.description}</span>
					<div class="flex items-top mt-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 sm:h-6 me-2 text-gray-400" viewBox="0 0 24 24"><path fill="currentColor" d="M15 2h2v2h4v18H3V4h4V2h2v2h6zM5 8h14V6H5zm0 2v10h14V10z"/></svg>
            <span
              class={`block font-bold sm:text-lg sm:mt-px ${i % 2 === 0 ? 'text-gray-500' : 'text-gray-600'}`}
            >
              Posted on
              <time class="text-gray-900">
                {new Date(post.date).getFullYear()}-{(new Date(post.date).getMonth() + 1)
                  .toString()
                  .padStart(2, '0')}-{new Date(post.date).getDate().toString().padStart(2, '0')}
              </time>
            </span>
          </div>
				</a>
			</li>
		{/each}
	</ul>
</div>
