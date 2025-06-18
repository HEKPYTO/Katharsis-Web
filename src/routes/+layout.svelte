<script lang="ts">
	import '../app.css';
	import Navigation from '$lib/components/Navigation.svelte';
	import { ModeWatcher } from 'mode-watcher';

	let { children } = $props();
</script>

<svelte:head>
	<title>Kathayut Kannasoot</title>
	<meta
		name="description"
		content="Personal website of a passionate data scientist showcasing projects, interests, and professional journey"
	/>
	<meta
		name="keywords"
		content="Jda, JDA, Kathayut, Kathayut Kannasoot, data scientist, portfolio, projects, anime, technology"
	/>
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Personal Portfolio - Data Scientist" />
	<meta
		property="og:description"
		content="Explore my journey as a data Scientist, discover my projects, and learn about my interests in technology and anime."
	/>

	<!-- Google Fonts -->
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
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
