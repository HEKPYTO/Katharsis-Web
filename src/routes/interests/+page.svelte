<script lang="ts">
	import {
		IconHeart,
		IconStar,
		IconPlayerPlay,
		IconDeviceDesktop,
		IconCpu,
		IconDeviceSdCard,
		IconArchive,
		IconKeyboard
	} from '@tabler/icons-svelte';

	interface AnimeItem {
		title: string;
		genre: string;
		rating: number;
		status: 'Completed' | 'Watching';
	}

	const animeList: AnimeItem[] = [
		{ title: 'Attack on Titan', genre: 'Action/Drama', rating: 98, status: 'Completed' },
		{ title: 'Demon Slayer', genre: 'Action/Supernatural', rating: 95, status: 'Watching' },
		{ title: 'Your Name', genre: 'Romance/Drama', rating: 97, status: 'Completed' },
		{ title: 'Spirited Away', genre: 'Adventure/Family', rating: 99, status: 'Completed' },
		{ title: 'One Piece', genre: 'Adventure/Comedy', rating: 96, status: 'Watching' },
		{ title: 'Jujutsu Kaisen', genre: 'Action/Supernatural', rating: 94, status: 'Completed' }
	];
</script>

<svelte:head>
	<title>About - Creative Developer Portfolio</title>
	<meta
		name="description"
		content="Learn about my interests in anime and technology, plus my development setup."
	/>
</svelte:head>

<section class="section-spacing bg-sketch-hero">
	<div class="container-sketch">
		<div class="space-y-16">
			<!-- Header -->
			<div class="space-y-4 text-center">
				<h1 class="heading-xl text-foreground text-balance">About me</h1>
				<p class="text-muted-foreground mx-auto max-w-3xl text-lg text-balance">
					Beyond coding, I'm passionate about anime storytelling and building the perfect
					development environment. Here's what drives my creativity and productivity.
				</p>
			</div>

			<!-- Anime Section -->
			<div class="space-y-8">
				<div class="space-y-4 text-center">
					<div
						class="bg-card/80 text-card-foreground border-border inline-flex items-center space-x-2 rounded-full border px-4 py-2 text-sm font-medium backdrop-blur-sm"
					>
						<IconHeart class="h-4 w-4 text-pink-500" />
						<span>Anime Collection</span>
					</div>
					<h2 class="heading-md text-foreground">My favorite series</h2>
				</div>

				<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
					{#each animeList as anime (anime.title)}
						<div class="sketch-card group transition-all duration-200 hover:shadow-lg">
							<div class="space-y-4 p-6">
								<div class="flex items-start justify-between">
									<div class="space-y-1">
										<h3 class="text-foreground text-lg font-semibold">{anime.title}</h3>
										<p class="text-muted-foreground text-sm">{anime.genre}</p>
									</div>
									<div class="flex items-center space-x-1">
										<IconStar class="h-4 w-4 text-yellow-500" />
										<span class="text-foreground text-sm font-medium">{anime.rating / 10}</span>
									</div>
								</div>

								<div class="space-y-2">
									<div class="flex justify-between text-sm">
										<span class="text-muted-foreground">Rating</span>
										<span class="text-foreground font-medium">{anime.rating}%</span>
									</div>
									<div class="bg-muted h-2 w-full rounded-full">
										<div
											class="h-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 transition-all duration-300"
											style="width: {anime.rating}%"
										></div>
									</div>
								</div>

								<div class="flex items-center justify-between pt-2">
									<span
										class="rounded-full px-2 py-1 text-xs font-medium {anime.status === 'Completed'
											? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
											: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300'}"
									>
										{anime.status}
									</span>
									<button class="hover:bg-accent rounded-full p-2 transition-colors">
										<IconPlayerPlay class="text-muted-foreground h-4 w-4" />
									</button>
								</div>
							</div>
						</div>
					{/each}
				</div>
			</div>

			<!-- Setup Section -->
			<div class="space-y-8">
				<div class="space-y-4 text-center">
					<div
						class="bg-card/80 text-card-foreground border-border inline-flex items-center space-x-2 rounded-full border px-4 py-2 text-sm font-medium backdrop-blur-sm"
					>
						<IconDeviceDesktop class="h-4 w-4 text-blue-500" />
						<span>Development Setup</span>
					</div>
					<h2 class="heading-md text-foreground">My workspace</h2>
				</div>

				<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
					<div class="sketch-card transition-all duration-200 hover:shadow-lg">
						<div class="flex items-center space-x-4 p-6">
							<div class="bg-muted rounded-xl p-3">
								<IconCpu class="text-muted-foreground h-6 w-6" />
							</div>
							<div class="flex-1">
								<h3 class="text-foreground font-semibold">Processor</h3>
								<p class="text-muted-foreground text-sm">AMD Ryzen 9 5900X</p>
							</div>
						</div>
					</div>

					<div class="sketch-card transition-all duration-200 hover:shadow-lg">
						<div class="flex items-center space-x-4 p-6">
							<div class="bg-muted rounded-xl p-3">
								<IconDeviceDesktop class="text-muted-foreground h-6 w-6" />
							</div>
							<div class="flex-1">
								<h3 class="text-foreground font-semibold">Graphics Card</h3>
								<p class="text-muted-foreground text-sm">NVIDIA RTX 4080</p>
							</div>
						</div>
					</div>

					<div class="sketch-card transition-all duration-200 hover:shadow-lg">
						<div class="flex items-center space-x-4 p-6">
							<div class="bg-muted rounded-xl p-3">
								<IconDeviceSdCard class="text-muted-foreground h-6 w-6" />
							</div>
							<div class="flex-1">
								<h3 class="text-foreground font-semibold">Memory</h3>
								<p class="text-muted-foreground text-sm">32GB DDR4 3600MHz</p>
							</div>
						</div>
					</div>

					<div class="sketch-card transition-all duration-200 hover:shadow-lg">
						<div class="flex items-center space-x-4 p-6">
							<div class="bg-muted rounded-xl p-3">
								<IconArchive class="text-muted-foreground h-6 w-6" />
							</div>
							<div class="flex-1">
								<h3 class="text-foreground font-semibold">Storage</h3>
								<p class="text-muted-foreground text-sm">2TB NVMe SSD</p>
							</div>
						</div>
					</div>

					<div class="sketch-card transition-all duration-200 hover:shadow-lg">
						<div class="flex items-center space-x-4 p-6">
							<div class="bg-muted rounded-xl p-3">
								<IconDeviceDesktop class="text-muted-foreground h-6 w-6" />
							</div>
							<div class="flex-1">
								<h3 class="text-foreground font-semibold">Monitor</h3>
								<p class="text-muted-foreground text-sm">27" 4K 144Hz Display</p>
							</div>
						</div>
					</div>

					<div class="sketch-card transition-all duration-200 hover:shadow-lg">
						<div class="flex items-center space-x-4 p-6">
							<div class="bg-muted rounded-xl p-3">
								<IconKeyboard class="text-muted-foreground h-6 w-6" />
							</div>
							<div class="flex-1">
								<h3 class="text-foreground font-semibold">Keyboard</h3>
								<p class="text-muted-foreground text-sm">Mechanical RGB</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Personal Philosophy Section -->
			<div class="space-y-8">
				<div class="space-y-4 text-center">
					<h2 class="heading-md text-foreground">My philosophy</h2>
					<p class="text-muted-foreground mx-auto max-w-2xl text-lg">
						Great software is built by people who care about the details and understand that
						technology should serve humanity.
					</p>
				</div>

				<div class="grid grid-cols-1 gap-6 md:grid-cols-3">
					<div class="sketch-card space-y-4 p-8 text-center">
						<div class="text-4xl">🎯</div>
						<h3 class="text-foreground text-xl font-semibold">Purpose-Driven</h3>
						<p class="text-muted-foreground leading-relaxed">
							Every line of code should have a purpose and contribute to solving real problems.
						</p>
					</div>

					<div class="sketch-card space-y-4 p-8 text-center">
						<div class="text-4xl">🌱</div>
						<h3 class="text-foreground text-xl font-semibold">Always Learning</h3>
						<p class="text-muted-foreground leading-relaxed">
							Technology evolves rapidly, and staying curious is the key to growth.
						</p>
					</div>

					<div class="sketch-card space-y-4 p-8 text-center">
						<div class="text-4xl">🤝</div>
						<h3 class="text-foreground text-xl font-semibold">Collaboration</h3>
						<p class="text-muted-foreground leading-relaxed">
							The best solutions come from diverse perspectives working together.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
