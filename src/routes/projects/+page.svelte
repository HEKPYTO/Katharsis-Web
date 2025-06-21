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

<section class="section-spacing bg-sketch-hero">
	<div class="container-sketch">
		<div class="space-y-16">
			<div class="space-y-4 text-center">
				<h1 class="heading-xl text-foreground text-balance">All projects</h1>
				<p class="text-muted-foreground mx-auto max-w-3xl text-lg text-balance">
					A comprehensive collection of my work, from experimental ideas to production applications.
					Each project represents a unique challenge and creative solution.
				</p>
			</div>

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
					{#each projects as project, index (project.id)}
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

			<div class="text-center">
				<div class="sketch-card mx-auto max-w-2xl space-y-4 p-8">
					<h3 class="text-foreground text-2xl font-semibold">Want to see more?</h3>
					<p class="text-muted-foreground leading-relaxed">
						Visit my GitHub profile for a complete overview of my work, including contributions to
						open source projects.
					</p>
					<Button
						class="bg-foreground text-background hover:bg-foreground/90 rounded-full px-6 py-3 font-medium"
					>
						<a
							href="https://github.com/Jdomenusrex"
							target="_blank"
							rel="noopener noreferrer"
							class="flex items-center"
						>
							<IconBrandGithub class="mr-2 h-4 w-4" />
							<span>Visit GitHub</span>
							<IconExternalLink class="ml-2 h-4 w-4" />
						</a>
					</Button>
				</div>
			</div>
		</div>
	</div>
</section>
