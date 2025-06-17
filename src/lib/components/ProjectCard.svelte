<script lang="ts">
	import Button from '$lib/components/ui/button.svelte';
	import { IconStar, IconGitFork, IconExternalLink, IconBrandGithub } from '@tabler/icons-svelte';
	import type { GitHubRepository } from '$lib/api/github';

	interface Props {
		project: GitHubRepository;
	}

	let { project }: Props = $props();

	const colors = [
		'bg-sketch-purple',
		'bg-sketch-blue',
		'bg-sketch-pink',
		'bg-sketch-green',
		'bg-sketch-orange',
		'bg-sketch-cyan'
	];

	const randomColor = colors[Math.floor(Math.random() * colors.length)];
</script>

<div class="sketch-card group flex h-full flex-col border shadow-2xl transition-all duration-700">
	<!-- Colorful header -->
	<div
		class="{randomColor} relative overflow-hidden p-6 text-white transition-all duration-700 group-hover:brightness-110"
	>
		<div class="relative z-10">
			<div class="mb-3 flex items-start justify-between">
				<h3 class="pr-4 text-lg leading-tight font-semibold">{project.name}</h3>
				<div class="flex flex-shrink-0 items-center space-x-3 text-sm text-white/80">
					<div class="flex items-center space-x-1 transition-all duration-500 hover:scale-110">
						<IconStar class="h-4 w-4 transition-all duration-500 hover:text-yellow-300" />
						<span>{project.stargazers_count}</span>
					</div>
					<div class="flex items-center space-x-1 transition-all duration-500 hover:scale-110">
						<IconGitFork class="h-4 w-4 transition-all duration-500 hover:text-blue-300" />
						<span>{project.forks_count}</span>
					</div>
				</div>
			</div>
			<p
				class="line-clamp-2 text-sm leading-relaxed text-white/90 transition-all duration-500 group-hover:text-white"
			>
				{project.description ||
					'A creative coding project showcasing modern development practices.'}
			</p>
		</div>
		<div
			class="absolute inset-0 bg-gradient-to-br from-transparent to-black/10 transition-opacity duration-700 group-hover:opacity-50"
		></div>
	</div>

	<!-- White content area -->
	<div
		class="dark:bg-card dark:group-hover:bg-card/80 flex flex-1 flex-col space-y-4 bg-white p-6 transition-all duration-700 group-hover:bg-gray-50"
	>
		<!-- Language and Topics -->
		<div class="flex-1 space-y-3">
			{#if project.language}
				<div class="flex items-center space-x-2">
					<div
						class="h-3 w-3 rounded-full bg-gray-400 transition-all duration-500 hover:scale-125"
					></div>
					<span class="dark:text-card-foreground text-sm font-medium text-gray-700"
						>{project.language}</span
					>
				</div>
			{/if}

			{#if project.topics && project.topics.length > 0}
				<div class="flex flex-wrap gap-2">
					{#each project.topics.slice(0, 3) as topic, index (topic)}
						<span
							class="dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted/80 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 transition-all duration-500 hover:scale-105 hover:bg-gray-200"
							style="animation-delay: {index * 100}ms"
						>
							{topic}
						</span>
					{/each}
				</div>
			{/if}
		</div>

		<!-- Actions -->
		<div class="flex space-x-3 pt-2">
			<Button
				class="dark:bg-foreground dark:text-background dark:hover:bg-foreground/90 flex-1 rounded-full bg-black px-4 py-2 text-sm font-medium text-white transition-all duration-500 hover:scale-102 hover:bg-gray-800 hover:shadow-lg"
				onclick={() => window.open(project.html_url, '_blank')}
			>
				<IconBrandGithub
					class="mr-2 h-4 w-4 transition-transform duration-500 group-hover:rotate-12"
				/>
				Code
			</Button>
			{#if project.homepage}
				<Button
					class="dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted/80 rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-500 hover:scale-102 hover:bg-gray-200 hover:shadow-lg"
					onclick={() => project.homepage && window.open(project.homepage, '_blank')}
				>
					<IconExternalLink
						class="mr-2 h-4 w-4 transition-transform duration-500 hover:rotate-12"
					/>
					Live
				</Button>
			{/if}
		</div>
	</div>
</div>
