<script lang="ts" module>
	let cycle: number[] = [];
	let index = 0;

	function nextColor(): number {
		const schemes = 6;

		if (cycle.length === 0 || index >= cycle.length) {
			cycle = Array.from({ length: schemes }, (_, i) => i);
			for (let i = cycle.length - 1; i > 0; i--) {
				const j = Math.floor(Math.random() * (i + 1));
				[cycle[i], cycle[j]] = [cycle[j], cycle[i]];
			}
			index = 0;
		}

		const color = cycle[index];
		index++;
		return color;
	}
</script>

<script lang="ts">
	import Button from '$lib/components/ui/button.svelte';
	import { IconStar, IconGitFork, IconExternalLink, IconBrandGithub } from '@tabler/icons-svelte';
	import type { GitHubRepository } from '$lib/api/github';
	import { onMount } from 'svelte';

	interface Props {
		project: GitHubRepository;
	}

	let { project }: Props = $props();
	let visible = $state(false);
	let element: HTMLDivElement;

	const colors = [
		{
			light: { bg: 'bg-zinc-50', accent: 'bg-zinc-600', text: 'text-zinc-700' },
			dark: { bg: 'dark:bg-zinc-800/50', accent: 'dark:bg-zinc-400', text: 'dark:text-zinc-300' }
		},
		{
			light: { bg: 'bg-blue-50', accent: 'bg-blue-600', text: 'text-blue-700' },
			dark: { bg: 'dark:bg-blue-900/30', accent: 'dark:bg-blue-400', text: 'dark:text-blue-300' }
		},
		{
			light: { bg: 'bg-purple-50', accent: 'bg-purple-600', text: 'text-purple-700' },
			dark: {
				bg: 'dark:bg-purple-900/30',
				accent: 'dark:bg-purple-400',
				text: 'dark:text-purple-300'
			}
		},
		{
			light: { bg: 'bg-emerald-50', accent: 'bg-emerald-600', text: 'text-emerald-700' },
			dark: {
				bg: 'dark:bg-emerald-900/30',
				accent: 'dark:bg-emerald-400',
				text: 'dark:text-emerald-300'
			}
		},
		{
			light: { bg: 'bg-orange-50', accent: 'bg-orange-600', text: 'text-orange-700' },
			dark: {
				bg: 'dark:bg-orange-900/30',
				accent: 'dark:bg-orange-400',
				text: 'dark:text-orange-300'
			}
		},
		{
			light: { bg: 'bg-pink-50', accent: 'bg-pink-600', text: 'text-pink-700' },
			dark: { bg: 'dark:bg-pink-900/30', accent: 'dark:bg-pink-400', text: 'dark:text-pink-300' }
		}
	];

	const scheme = colors[nextColor()];

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						visible = true;
						observer.unobserve(entry.target);
					}
				});
			},
			{
				threshold: 0.1,
				rootMargin: '50px'
			}
		);

		if (element) {
			observer.observe(element);
		}

		return () => {
			if (element) {
				observer.unobserve(element);
			}
		};
	});
</script>

<div
	bind:this={element}
	class="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200/60 bg-white shadow-sm transition-all duration-300 hover:border-gray-300/80 hover:shadow-lg dark:border-gray-700/60 dark:bg-gray-800 dark:shadow-lg dark:hover:border-gray-600/80 dark:hover:shadow-xl {!visible
		? 'opacity-0'
		: 'opacity-100'}"
	style="transition: opacity 0.6s ease-out;"
>
	{#if visible}
		<div
			class="{scheme.light.bg} {scheme.dark
				.bg} relative px-6 pt-6 pb-4 dark:border-b dark:border-gray-700/30"
		>
			<div class="mb-3 flex items-start justify-between">
				<div class="min-w-0 flex-1">
					<h3 class="truncate text-lg leading-tight font-semibold text-gray-900 dark:text-gray-100">
						{project.name}
					</h3>
					{#if project.language}
						<div class="mt-2 flex items-center space-x-2">
							<div class="{scheme.light.accent} {scheme.dark.accent} h-2 w-2 rounded-full"></div>
							<span class="{scheme.light.text} {scheme.dark.text} text-sm font-medium">
								{project.language}
							</span>
						</div>
					{/if}
				</div>
				<div class="ml-4 flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
					<div class="flex items-center space-x-1">
						<IconStar class="h-3.5 w-3.5" />
						<span class="font-medium">{project.stargazers_count}</span>
					</div>
					<div class="flex items-center space-x-1">
						<IconGitFork class="h-3.5 w-3.5" />
						<span class="font-medium">{project.forks_count}</span>
					</div>
				</div>
			</div>

			<p class="line-clamp-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
				{project.description ||
					'A focused project built with modern development practices and clean architecture.'}
			</p>
		</div>

		<div class="flex flex-1 flex-col bg-white px-6 py-5 dark:bg-gray-800">
			{#if project.topics && project.topics.length > 0}
				<div class="mb-5 flex flex-wrap gap-2">
					{#each project.topics.slice(0, 3) as topic (topic)}
						<span
							class="inline-flex items-center rounded-md border border-gray-200 bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300"
						>
							{topic}
						</span>
					{/each}
				</div>
			{/if}

			<div class="mt-auto">
				<div class="flex space-x-3">
					<Button
						class="flex-1 justify-center rounded-lg border border-gray-900 bg-gray-900 px-4 py-2.5 text-sm font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.1),_0_2px_4px_rgba(0,0,0,0.2)] transition-all duration-200 hover:translate-y-[1px] hover:bg-gray-800 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.15),_0_1px_2px_rgba(0,0,0,0.15)] focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 focus:outline-none active:translate-y-[2px] dark:border-gray-100 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200 dark:focus:ring-gray-100 dark:focus:ring-offset-gray-800"
						onclick={() => window.open(project.html_url, '_blank')}
					>
						<IconBrandGithub
							class="mr-2 h-4 w-4 transition duration-500 ease-in-out group-hover:animate-bounce"
						/>
						Code
					</Button>
					{#if project.homepage}
						<Button
							class="rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 shadow-[inset_0_1px_0_rgba(0,0,0,0.1),_0_2px_4px_rgba(0,0,0,0.2)] transition-all duration-200 hover:translate-y-[1px] hover:border-gray-400 hover:bg-gray-50 hover:shadow-[inset_0_1px_0_rgba(0,0,0,0.15),_0_1px_2px_rgba(0,0,0,0.15)] focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:outline-none active:translate-y-[2px] dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:border-gray-500 dark:hover:bg-gray-600 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-800"
							onclick={() => project.homepage && window.open(project.homepage, '_blank')}
						>
							<IconExternalLink
								class="mr-2 h-4 w-4 transition duration-500 ease-in-out group-hover:animate-bounce"
							/>
							Live
						</Button>
					{/if}
				</div>
			</div>
		</div>
	{:else}
		<div class="flex h-full min-h-[300px] items-center justify-center">
			<div class="animate-pulse text-gray-400">
				<div class="h-4 w-4 rounded-full bg-gray-200 dark:bg-gray-700"></div>
			</div>
		</div>
	{/if}

	<div
		class="pointer-events-none absolute inset-0 rounded-2xl border border-transparent transition-all duration-300 group-hover:border-gray-200"
	></div>
</div>
