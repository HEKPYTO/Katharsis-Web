<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import Button from '$lib/components/ui/button.svelte';
	import Terminal from '$lib/components/Terminal.svelte';
	import { fetchGitHubProjects, type GitHubRepository } from '$lib/api/github';
	import {
		IconArrowRight,
		IconCode,
		IconPalette,
		IconRocket,
		IconHeart,
		IconBrain,
		IconBolt
	} from '@tabler/icons-svelte';

	let projects = $state<GitHubRepository[]>([]);
	let loading = $state(true);

	$effect(() => {
		loadProjects();
	});

	async function loadProjects(): Promise<void> {
		try {
			projects = await fetchGitHubProjects();
		} catch (error) {
			console.error('Failed to load projects:', error);
		} finally {
			loading = false;
		}
	}
</script>

<svelte:head>
	<title>Creative Developer Portfolio</title>
	<meta
		name="description"
		content="Personal portfolio showcasing creative development work and projects."
	/>
</svelte:head>

<Hero />

<!-- Interactive Terminal Section -->
<section class="section-spacing bg-background">
	<div class="container-sketch">
		<div class="space-y-12">
			<div class="animate-fade-in max-w-2xl">
				<h2 class="heading-lg text-foreground mb-6">My development approach</h2>
				<p class="text-muted-foreground text-lg leading-relaxed">
					Explore my development philosophy through an interactive terminal. Type commands to learn
					more about my approach to building software.
				</p>
			</div>

			<div class="animate-fade-in-delayed">
				<Terminal />
			</div>
		</div>
	</div>
</section>

<!-- My projects section -->
<section class="section-spacing bg-muted/30">
	<div class="container-sketch">
		<div class="space-y-12">
			<div class="animate-fade-in max-w-2xl">
				<div class="sketch-badge sketch-badge-prototype animate-bounce-gentle mb-4">PORTFOLIO</div>
				<h2 class="heading-lg text-foreground mb-6">Things I've built</h2>
				<p class="text-muted-foreground text-lg leading-relaxed">
					Here are some of the projects I've worked on. Each one taught me something new and helped
					me grow as a developer.
				</p>
			</div>

			<!-- Projects showcase -->
			<div id="featured-work" class="space-y-8">
				<div class="animate-fade-in-delayed text-center">
					<h3 class="heading-md text-foreground mb-4">Featured Projects</h3>
					<p class="text-muted-foreground mx-auto max-w-xl">
						A selection of my recent work and personal projects.
					</p>
				</div>

				{#if loading}
					<div class="stagger-animation grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
						{#each Array(6) as _, index (index)}
							<div class="sketch-card animate-pulse p-6">
								<div
									class="-m-6 mb-4 h-20 rounded-t-2xl bg-gradient-to-r from-purple-400 to-pink-400"
								></div>
								<div class="space-y-3">
									<div class="bg-muted h-4 rounded"></div>
									<div class="bg-muted h-3 w-2/3 rounded"></div>
								</div>
							</div>
						{/each}
					</div>
				{:else if projects.length > 0}
					<div class="stagger-animation grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
						{#each projects.slice(0, 6) as project (project.id)}
							<ProjectCard {project} />
						{/each}
					</div>
				{:else}
					<div class="sketch-card animate-fade-in p-12 text-center">
						<p class="text-muted-foreground">Loading projects...</p>
					</div>
				{/if}

				<div class="animate-fade-in-delayed text-center">
					<Button
						class="bg-muted text-muted-foreground hover:bg-muted/80 border-border rounded-full border px-6 py-3 font-medium transition-all duration-500 hover:scale-105 hover:shadow-lg"
					>
						<a href="/projects" class="flex items-center">
							<span>View all projects</span>
							<IconArrowRight
								class="ml-2 h-4 w-4 transition-transform duration-500 group-hover:translate-x-1"
							/>
						</a>
					</Button>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Skills & Interests Section -->
<section class="section-spacing bg-background">
	<div class="container-sketch">
		<div class="space-y-12">
			<div class="animate-fade-in space-y-4 text-center">
				<h2 class="heading-lg text-foreground text-balance">What I love working with</h2>
				<p class="text-muted-foreground mx-auto max-w-2xl text-lg text-balance">
					These are the technologies and approaches that I'm passionate about and use in my daily
					work.
				</p>
			</div>

			<div class="stagger-animation grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
				<div
					class="sketch-card group space-y-4 p-8 text-center transition-all duration-700 hover:-translate-y-1 hover:scale-105 hover:shadow-lg"
				>
					<div class="flex justify-center">
						<div
							class="bg-muted group-hover:bg-primary/10 rounded-xl p-3 transition-all duration-700 group-hover:scale-110"
						>
							<IconCode
								class="text-muted-foreground group-hover:text-primary h-6 w-6 transition-colors duration-700"
							/>
						</div>
					</div>
					<h3
						class="text-foreground group-hover:text-primary text-xl font-semibold transition-colors duration-700"
					>
						Model Development
					</h3>
					<p class="text-muted-foreground leading-relaxed">
						Builds and trains models to deliver accurate, meaningful predictions for real-world
						problems
					</p>
				</div>

				<div
					class="sketch-card group space-y-4 p-8 text-center transition-all duration-700 hover:-translate-y-1 hover:scale-105 hover:shadow-lg"
				>
					<div class="flex justify-center">
						<div
							class="bg-muted group-hover:bg-primary/10 rounded-xl p-3 transition-all duration-700 group-hover:scale-110"
						>
							<IconPalette
								class="text-muted-foreground group-hover:text-primary h-6 w-6 transition-colors duration-700"
							/>
						</div>
					</div>
					<h3
						class="text-foreground group-hover:text-primary text-xl font-semibold transition-colors duration-700"
					>
						Data Analytics
					</h3>
					<p class="text-muted-foreground leading-relaxed">
						Skilled in Python, Spark, and Databricks to analyze large datasets and uncover
						actionable insights
					</p>
				</div>

				<div
					class="sketch-card group space-y-4 p-8 text-center transition-all duration-700 hover:-translate-y-1 hover:scale-105 hover:shadow-lg"
				>
					<div class="flex justify-center">
						<div
							class="bg-muted group-hover:bg-primary/10 rounded-xl p-3 transition-all duration-700 group-hover:scale-110"
						>
							<IconRocket
								class="text-muted-foreground group-hover:text-primary h-6 w-6 transition-colors duration-700"
							/>
						</div>
					</div>
					<h3
						class="text-foreground group-hover:text-primary text-xl font-semibold transition-colors duration-700"
					>
						Modern Stack
					</h3>
					<p class="text-muted-foreground leading-relaxed">
						Applies the latest tools and frameworks for scalable, reproducible data science
						workflows
					</p>
				</div>

				<div
					class="sketch-card group space-y-4 p-8 text-center transition-all duration-700 hover:-translate-y-1 hover:scale-105 hover:shadow-lg"
				>
					<div class="flex justify-center">
						<div
							class="bg-muted group-hover:bg-primary/10 rounded-xl p-3 transition-all duration-700 group-hover:scale-110"
						>
							<IconHeart
								class="text-muted-foreground group-hover:text-primary h-6 w-6 transition-colors duration-700"
							/>
						</div>
					</div>
					<h3
						class="text-foreground group-hover:text-primary text-xl font-semibold transition-colors duration-700"
					>
						Human-Centered Insights
					</h3>
					<p class="text-muted-foreground leading-relaxed">
						Translates complex data into intuitive insights to support decision-makers and end users
					</p>
				</div>

				<div
					class="sketch-card group space-y-4 p-8 text-center transition-all duration-700 hover:-translate-y-1 hover:scale-105 hover:shadow-lg"
				>
					<div class="flex justify-center">
						<div
							class="bg-muted group-hover:bg-primary/10 rounded-xl p-3 transition-all duration-700 group-hover:scale-110"
						>
							<IconBrain
								class="text-muted-foreground group-hover:text-primary h-6 w-6 transition-colors duration-700"
							/>
						</div>
					</div>
					<h3
						class="text-foreground group-hover:text-primary text-xl font-semibold transition-colors duration-700"
					>
						Analytical Thinking
					</h3>
					<p class="text-muted-foreground leading-relaxed">
						Breaks down problems using data exploration, feature engineering, and statistical
						reasoning
					</p>
				</div>

				<div
					class="sketch-card group space-y-4 p-8 text-center transition-all duration-700 hover:-translate-y-1 hover:scale-105 hover:shadow-lg"
				>
					<div class="flex justify-center">
						<div
							class="bg-muted group-hover:bg-primary/10 rounded-xl p-3 transition-all duration-700 group-hover:scale-110"
						>
							<IconBolt
								class="text-muted-foreground group-hover:text-primary h-6 w-6 transition-colors duration-700"
							/>
						</div>
					</div>
					<h3
						class="text-foreground group-hover:text-primary text-xl font-semibold transition-colors duration-700"
					>
						Performance Optimization
					</h3>
					<p class="text-muted-foreground leading-relaxed">
						Fine-tunes data pipelines and models for speed, efficiency, and scalability
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Personal CTA Section -->
<section class="section-spacing bg-sketch-hero">
	<div class="container-sketch">
		<div class="animate-fade-in mx-auto max-w-3xl space-y-8 text-center">
			<div class="space-y-4">
				<div class="animate-bounce-gentle text-6xl">👋</div>
				<h2 class="heading-lg text-foreground">Let's connect and create something amazing</h2>
				<p class="text-muted-foreground text-lg leading-relaxed">
					I'm always interested in new opportunities, collaborations, or just having a chat about
					technology and development.
				</p>
			</div>
			<Button
				class="bg-foreground text-background hover:bg-foreground/90 rounded-full px-8 py-4 text-base font-medium shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-xl"
			>
				<a href="/socials">Say hello</a>
			</Button>
		</div>
	</div>
</section>
