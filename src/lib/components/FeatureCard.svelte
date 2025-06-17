<script lang="ts">
	import type { ComponentType } from 'svelte';

	interface Props {
		title: string;
		description: string;
		icon?: ComponentType;
		gradient?: string;
		size?: 'sm' | 'md' | 'lg' | 'tall';
		image?: string;
		badge?: string;
		href?: string;
		onclick?: () => void;
	}

	let {
		title,
		description,
		icon,
		gradient = 'gradient-blue-purple',
		size = 'sm',
		image,
		badge,
		href,
		onclick
	}: Props = $props();

	const sizeClasses = {
		sm: 'feature-card-sm',
		md: 'feature-card-md',
		lg: 'feature-card-lg',
		tall: 'feature-card-tall'
	};
</script>

<div
	class="sketch-gradient-card {gradient} {sizeClasses[size]} group relative cursor-pointer"
	onclick={() => {
		if (href) {
			window.open(href, '_blank');
		}
		if (onclick) {
			onclick();
		}
	}}
	role="button"
	tabindex="0"
	onkeydown={(event) => {
		if (event.key === 'Enter' || event.key === ' ') {
			if (href) {
				window.open(href, '_blank');
			}
			if (onclick) {
				onclick();
			}
		}
	}}
>
	{#if badge}
		<div class="absolute top-4 left-4 z-10">
			<span
				class="rounded-full border border-white/20 bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm"
			>
				{badge}
			</span>
		</div>
	{/if}

	<div class="relative z-10 flex h-full flex-col justify-between p-8">
		<div class="space-y-4">
			{#if icon}
				{@const SvelteComponent = icon}
				<div class="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20">
					<SvelteComponent class="h-6 w-6 text-white" />
				</div>
			{/if}

			<div class="space-y-2">
				<h3 class="text-xl leading-tight font-semibold text-white">{title}</h3>
				<p class="text-sm leading-relaxed text-white/80">{description}</p>
			</div>
		</div>

		{#if image}
			<div class="-mx-8 mt-6 -mb-8">
				<img
					src={image || '/placeholder.svg'}
					alt={title}
					class="h-48 w-full rounded-b-2xl object-cover"
				/>
			</div>
		{/if}
	</div>

	<!-- Hover overlay -->
	<div
		class="absolute inset-0 rounded-2xl bg-black/10 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
	></div>
</div>
