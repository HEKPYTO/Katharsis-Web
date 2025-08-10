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
		IconBolt,
		IconTerminal2
	} from '@tabler/icons-svelte';

	let projects = $state<GitHubRepository[]>([]);
	let loading = $state(true);

	let terminalMode = $state<'normal' | 'minimized' | 'maximized' | 'closed'>('normal');

	const skills = [
		{
			icon: IconCode,
			title: 'Model Development',
			description:
				'Builds and trains models to deliver accurate, meaningful predictions for real-world problems'
		},
		{
			icon: IconPalette,
			title: 'Data Analytics',
			description:
				'Skilled in Python, Spark, and Databricks to analyze large datasets and uncover actionable insights'
		},
		{
			icon: IconRocket,
			title: 'Modern Stack',
			description:
				'Applies the latest tools and frameworks for scalable, reproducible data science workflows'
		},
		{
			icon: IconHeart,
			title: 'Human-Centered Insights',
			description:
				'Translates complex data into intuitive insights to support decision-makers and end users'
		},
		{
			icon: IconBrain,
			title: 'Analytical Thinking',
			description:
				'Breaks down problems using data exploration, feature engineering, and statistical reasoning'
		},
		{
			icon: IconBolt,
			title: 'Performance Optimization',
			description: 'Fine-tunes data pipelines and models for speed, efficiency, and scalability'
		}
	];

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
	<title>Kathayut Portfolio</title>
	<meta
		name="description"
		content="Personal portfolio showcasing creative development work and projects."
	/>
</svelte:head>

<Hero />

<section class="section-spacing bg-background relative z-20">
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
				{#if terminalMode !== 'closed'}
					<Terminal bind:terminalMode />
				{:else}
					<div class="mt-48 flex flex-col items-center justify-center">
						<button
							onclick={() => {
								terminalMode = 'normal';
							}}
							class="group flex h-24 w-24 flex-col items-center justify-center rounded-xl bg-neutral-900 text-gray-400 shadow-[inset_0_2px_0_rgba(255,255,255,0.2),_0_4px_6px_rgba(0,0,0,0.6)] transition-all duration-150 hover:translate-y-[0.5px] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.3),_0_2px_4px_rgba(0,0,0,0.8)] focus:outline-none active:translate-y-[0.75px] dark:bg-neutral-100 dark:text-neutral-600 dark:shadow-[inset_0_2px_0_rgba(0,0,0,0.1),_0_4px_6px_rgba(255,255,255,0.3)] dark:hover:shadow-[inset_0_1px_0_rgba(0,0,0,0.15),_0_2px_4px_rgba(255,255,255,0.4)]"
							aria-label="Re-open Terminal"
						>
							<IconTerminal2 class="h-10 w-10 transition-colors" />
							<span
								class="mt-2 text-xs transition-colors group-hover:text-gray-200 dark:group-hover:text-neutral-900"
							>
								Open
							</span>
						</button>
					</div>
				{/if}
			</div>
		</div>
	</div>
</section>

<section class="section-spacing bg-muted/30 relative z-10">
	<div class="container-sketch">
		<div class="space-y-12">
			<div class="animate-fade-in max-w-2xl">
				<div class="sketch-badge sketch-badge-prototype z-0 mb-4 animate-bounce">PORTFOLIO</div>
				<h2 class="heading-lg text-foreground mb-6">Things I've built</h2>
				<p class="text-muted-foreground text-lg leading-relaxed">
					Here are some of the projects I've worked on. Each one taught me something new and helped
					me grow as a developer.
				</p>
			</div>

			<div id="featured-work" class="space-y-8">
				<div class="animate-fade-in-delayed text-center">
					<h3 class="heading-md text-foreground mb-4">Featured Projects</h3>
					<p class="text-muted-foreground mx-auto max-w-xl">
						A selection of my recent work and personal projects.
					</p>
				</div>

				{#if loading}
					<div class="py-8 text-center">
						<div class="text-muted-foreground inline-flex items-center space-x-2">
							<div
								class="h-5 w-5 animate-spin rounded-full border-2 border-current border-t-transparent"
							></div>
							<span>Loading featured projects...</span>
						</div>
					</div>
				{:else if projects.length > 0}
					<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
						{#each projects.slice(0, 6) as project (project.id)}
							<ProjectCard {project} animationDelay={0} />
						{/each}
					</div>
				{:else}
					<div class="sketch-card animate-fade-in p-12 text-center">
						<p class="text-muted-foreground">No projects available at the moment.</p>
					</div>
				{/if}

				<div class="animate-fade-in-delayed text-center">
					<Button
						class="inline-flex items-center space-x-2 rounded-full bg-neutral-900 px-6 py-2 text-neutral-100 shadow-[inset_0_2px_0_rgba(255,255,255,0.2),_0_4px_6px_rgba(0,0,0,0.6)] transition-all duration-150 hover:translate-y-[0.5px] hover:bg-neutral-900 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.3),_0_2px_4px_rgba(0,0,0,0.8)] focus:outline-none active:translate-y-[0.75px] dark:bg-neutral-100 dark:text-neutral-900 dark:shadow-[inset_0_2px_0_rgba(0,0,0,0.1),_0_4px_6px_rgba(255,255,255,0.3)] dark:hover:bg-neutral-100 dark:hover:shadow-[inset_0_1px_0_rgba(0,0,0,0.15),_0_2px_4px_rgba(255,255,255,0.4)]"
					>
						<a href="/projects" class="flex items-center space-x-2">
							<span>View all projects</span>
							<IconArrowRight class="h-4 w-4" />
						</a>
					</Button>
				</div>
			</div>
		</div>
	</div>
</section>

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
				{#each skills as skill (skill.title)}
					<div
						class="sketch-card group space-y-4 p-8 text-center transition-all duration-700 hover:-translate-y-1 hover:scale-105 hover:shadow-lg"
					>
						<div class="flex justify-center">
							<div
								class="bg-muted group-hover:bg-primary/10 rounded-xl p-3 transition-all duration-700 group-hover:scale-110"
							>
								<skill.icon
									class="text-muted-foreground group-hover:text-primary h-6 w-6 transition-colors duration-700"
								/>
							</div>
						</div>
						<h3
							class="text-foreground group-hover:text-primary text-xl font-semibold transition-colors duration-700"
						>
							{skill.title}
						</h3>
						<p class="text-muted-foreground leading-relaxed">{skill.description}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<section
	class="section-spacing dark:from-background bg-gradient-to-b from-white via-pink-100 via-purple-100 to-blue-100 dark:via-pink-900/40 dark:via-purple-900/40 dark:to-blue-900/40"
>
	<div class="container-sketch">
		<div class="animate-fade-in mx-auto max-w-3xl space-y-8 text-center">
			<div class="space-y-4">
				<div class="text-6xl hover:animate-pulse">👋</div>
				<h2 class="heading-lg text-foreground">Let's connect and create something amazing</h2>
				<p class="text-muted-foreground text-lg leading-relaxed">
					I'm always interested in new opportunities, collaborations, or just having a chat about
					technology and development.
				</p>
			</div>
			<div
				class="animate-fade-in-delayed group inline-flex rounded-full bg-gradient-to-r from-purple-300 via-pink-300 to-orange-300 p-1"
			>
				<Button
					class="inline-flex items-center space-x-2 rounded-full bg-black px-6 py-1.5 text-white shadow-[inset_0_2px_0_rgba(255,255,255,0.2),_0_4px_6px_rgba(0,0,0,0.6)] transition-all duration-150 hover:translate-y-[0.5px] hover:bg-black hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.3),_0_2px_4px_rgba(0,0,0,0.8)] focus:outline-none active:translate-y-[1px]"
				>
					<a href="/socials">Say hello</a>
					<IconHeart class="h-5 w-5" />
				</Button>
			</div>
		</div>
	</div>
</section>
