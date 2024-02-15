<script lang="ts">
	import dayjs from 'dayjs';
	import PixelarticonsBookOpen from '~icons/pixelarticons/book-open';
	import PixelarticonsCalendar from '~icons/pixelarticons/calendar';
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
						<PixelarticonsBookOpen class="sm:h-8 sm:w-8 ms-2 hidden sm:block text-gray-400 group-hover:text-blue-400 group-focus:text-blue-400" />
					</div>
					<span class="font-serif text-gray-700 sm:text-xl">{post.description}</span>
					<div class="flex items-top mt-2">
           <PixelarticonsCalendar class="sm:h-6 sm:w-6 me-3 hidden sm:block text-gray-400" />
            <span
              class={`block font-bold sm:text-lg sm:mt-px ${i % 2 === 0 ? 'text-gray-500' : 'text-gray-600'}`}
            >
              Posted on
              <time class="text-gray-900">
                {dayjs(post.date).format('YYYY-MMM-DD')}
              </time>
            </span>
          </div>
				</a>
			</li>
		{/each}
	</ul>
</div>
