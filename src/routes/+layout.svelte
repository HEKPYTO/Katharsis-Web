<script lang="ts">
	import '../app.css';
	import Navigation from '$lib/components/Navigation.svelte';
	import { ModeWatcher } from 'mode-watcher';

	let { children } = $props();
</script>

<svelte:head>
	<title>Personal Portfolio - Developer & Tech Enthusiast</title>
	<meta
		name="description"
		content="Personal website of a passionate developer showcasing projects, interests, and professional journey"
	/>
	<meta name="keywords" content="developer, portfolio, projects, anime, technology" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Personal Portfolio - Developer & Tech Enthusiast" />
	<meta
		property="og:description"
		content="Explore my journey as a developer, discover my projects, and learn about my interests in technology and anime."
	/>
	<meta name="twitter:card" content="summary_large_image" />

	<!-- Google Fonts -->
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;1,400&family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:ital,wght@0,400;0,500;0,600;1,400&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<ModeWatcher />
<div class="bg-background text-foreground min-h-screen">
	<Navigation />
	<main>
		{@render children()}
	</main>
</div>
