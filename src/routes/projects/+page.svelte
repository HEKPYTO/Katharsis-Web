<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import Button from '$lib/components/ui/button.svelte';
	import { fetchGitHubProjects, type GitHubRepository } from '$lib/api/github';
	import { IconBrandGithub, IconExternalLink } from '@tabler/icons-svelte';

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
	<title>Projects - Kathayut Portfolio</title>
	<meta
		name="description"
		content="Explore my latest projects and contributions. A showcase of creative development work."
	/>
</svelte:head>

<div
	class="dark:to-background bg-gradient-to-b from-teal-300 via-blue-200 via-cyan-200 to-white dark:from-teal-800 dark:via-blue-900 dark:via-cyan-900"
>
	<div class="container-sketch">
		<div class="pt-16 pb-8 md:pt-24 md:pb-12 lg:pt-32 lg:pb-16">
			<div class="space-y-4 text-center">
				<h1 class="heading-xl text-foreground text-balance">All projects</h1>
				<p class="text-muted-foreground mx-auto max-w-3xl text-lg text-balance">
					A comprehensive collection of my work, from experimental ideas to production applications.
					Each project represents a unique challenge and creative solution.
				</p>
			</div>
		</div>
	</div>
</div>

<section class="dark:bg-background bg-white">
	<div class="container-sketch">
		<div class="space-y-16 py-16">
			{#if loading}
				<div class="py-16 text-center">
					<div class="text-muted-foreground inline-flex items-center space-x-3">
						<div
							class="h-6 w-6 animate-spin rounded-full border-2 border-current border-t-transparent"
						></div>
						<span class="text-lg">Loading all projects...</span>
					</div>
					<p class="text-muted-foreground/70 mt-2 text-sm">
						Fetching the latest repositories from GitHub
					</p>
				</div>
			{:else if projects.length > 0}
				<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
					{#each projects as project (project.id)}
						<div class="w-full">
							<ProjectCard {project} animationDelay={0} />
						</div>
					{/each}
				</div>
			{:else}
				<div class="sketch-card space-y-4 p-12 text-center">
					<IconBrandGithub class="text-muted-foreground mx-auto h-12 w-12" />
					<h3 class="text-foreground text-xl font-semibold">No projects found</h3>
					<p class="text-muted-foreground">Check back later for new projects.</p>
				</div>
			{/if}
		</div>
	</div>
</section>

<section
	class="section-spacing dark:from-background bg-gradient-to-b from-white via-blue-100 via-teal-100 to-cyan-100 dark:via-blue-900/40 dark:via-teal-900/40 dark:to-cyan-900/40"
>
	<div class="container-sketch">
		<div class="animate-fade-in mx-auto max-w-3xl space-y-8 text-center">
			<div class="space-y-4">
				<h2 class="heading-lg text-foreground">Want to see more?</h2>
				<p class="text-muted-foreground text-lg leading-relaxed">
					Visit my GitHub profile for a complete overview of my work, including contributions to
					open source projects.
				</p>
			</div>
			<div
				class="animate-fade-in-delayed group inline-flex rounded-full bg-gradient-to-r from-teal-300 via-blue-300 to-cyan-300 p-1"
			>
				<Button
					class="inline-flex items-center space-x-2 rounded-full bg-black px-8 py-4 text-white shadow-[inset_0_2px_0_rgba(255,255,255,0.2),_0_4px_6px_rgba(0,0,0,0.6)] transition-all duration-150 hover:translate-y-[0.5px] hover:bg-black hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.3),_0_2px_4px_rgba(0,0,0,0.8)] focus:outline-none active:translate-y-[0.75px]"
				>
					<a
						href="https://github.com/Jdomenusrex"
						target="_blank"
						rel="noopener noreferrer"
						class="flex items-center space-x-2"
					>
						<IconBrandGithub class="h-5 w-5" />
						<span class="font-medium">Visit GitHub</span>
						<IconExternalLink class="h-4 w-4" />
					</a>
				</Button>
			</div>
		</div>
	</div>
</section>
