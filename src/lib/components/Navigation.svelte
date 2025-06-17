<script lang="ts">
	import { page } from '$app/stores';
	import Button from '$lib/components/ui/button.svelte';
	import { IconDiamond, IconMenu2, IconX, IconSun, IconMoon } from '@tabler/icons-svelte';
	import { toggleMode } from 'mode-watcher';
	import { browser } from '$app/environment';

	let currentPath = $derived($page.url.pathname);
	let mobileMenuOpen = $state(false);
	let isDark = $state(false);

	$effect(() => {
		if (browser) {
			isDark = document.documentElement.classList.contains('dark');

			const observer = new MutationObserver(() => {
				isDark = document.documentElement.classList.contains('dark');
			});

			observer.observe(document.documentElement, {
				attributes: true,
				attributeFilter: ['class']
			});

			return () => observer.disconnect();
		}
	});

	interface NavItem {
		href: string;
		label: string;
	}

	const navItems: NavItem[] = [
		{ href: '/', label: 'Home' },
		{ href: '/projects', label: 'Projects' },
		{ href: '/interests', label: 'About' },
		{ href: '/socials', label: 'Contact' }
	];
</script>

<nav
	class="bg-background/80 border-border animate-slide-down sticky top-0 z-50 w-full border-b backdrop-blur-lg"
>
	<div class="container-sketch">
		<div class="flex h-16 items-center justify-between">
			<!-- Logo -->
			<a href="/" class="group animate-fade-in flex items-center space-x-2">
				<IconDiamond
					class="text-foreground h-6 w-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12"
				/>
				<span
					class="text-foreground group-hover:text-primary font-sans text-lg font-semibold transition-colors duration-500"
					>Kathayut Kannasoot</span
				>
			</a>

			<!-- Desktop Navigation -->
			<div class="animate-fade-in-delayed hidden items-center space-x-8 md:flex">
				{#each navItems as item, index (item.href)}
					<a
						href={item.href}
						class="hover:text-foreground group relative text-sm font-medium transition-all duration-500 hover:scale-105 {currentPath ===
						item.href
							? 'text-foreground'
							: 'text-muted-foreground'}"
						style="animation-delay: {index * 150}ms"
					>
						{item.label}
						<span
							class="bg-primary absolute -bottom-1 left-0 h-0.5 w-0 transition-all duration-500 group-hover:w-full {currentPath ===
							item.href
								? 'w-full'
								: ''}"
						></span>
					</a>
				{/each}
			</div>

			<!-- Desktop Theme Toggle -->
			<div class="animate-fade-in-delayed hidden md:block">
				<Button
					variant="ghost"
					size="icon"
					onclick={toggleMode}
					class="hover:bg-accent/50 relative overflow-hidden transition-all duration-500 hover:scale-110"
				>
					<div class="relative h-[1.2rem] w-[1.2rem]">
						{#if isDark}
							<IconMoon
								class="absolute h-[1.2rem] w-[1.2rem] scale-100 rotate-0 opacity-100 transition-all duration-700"
							/>
							<IconSun
								class="absolute h-[1.2rem] w-[1.2rem] scale-0 -rotate-90 opacity-0 transition-all duration-700"
							/>
						{:else}
							<IconSun
								class="absolute h-[1.2rem] w-[1.2rem] scale-100 rotate-0 opacity-100 transition-all duration-700"
							/>
							<IconMoon
								class="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 opacity-0 transition-all duration-700"
							/>
						{/if}
					</div>
					<span class="sr-only">Toggle theme</span>
				</Button>
			</div>

			<!-- Mobile menu button -->
			<Button
				variant="ghost"
				size="icon"
				class="hover:bg-accent/50 transition-all duration-500 hover:scale-110 md:hidden"
				onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
			>
				<div class="relative h-5 w-5">
					<IconMenu2
						class="absolute h-5 w-5 transition-all duration-500 {mobileMenuOpen
							? 'rotate-90 opacity-0'
							: 'rotate-0 opacity-100'}"
					/>
					<IconX
						class="absolute h-5 w-5 transition-all duration-500 {mobileMenuOpen
							? 'rotate-0 opacity-100'
							: '-rotate-90 opacity-0'}"
					/>
				</div>
			</Button>
		</div>

		<!-- Mobile Navigation -->
		<div
			class="overflow-hidden transition-all duration-700 md:hidden {mobileMenuOpen
				? 'max-h-96 opacity-100'
				: 'max-h-0 opacity-0'}"
		>
			<div class="border-border bg-background border-t">
				<div class="space-y-4 py-4">
					<!-- Navigation Items -->
					{#each navItems as item, index (item.href)}
						<a
							href={item.href}
							class="hover:text-foreground hover:bg-accent/50 block rounded-r-lg px-4 py-2 text-base font-medium transition-all duration-500 hover:translate-x-2 {currentPath ===
							item.href
								? 'text-foreground bg-accent/30'
								: 'text-muted-foreground'}"
							onclick={() => (mobileMenuOpen = false)}
							style="animation: slideInLeft 0.6s ease-out {index * 100}ms both"
						>
							{item.label}
						</a>
					{/each}

					<!-- Theme Toggle Row - Below all navigation items -->
					<div class="flex justify-end px-4">
						<Button
							variant="ghost"
							size="icon"
							onclick={toggleMode}
							class="hover:bg-accent/50 animate-fade-in-delayed relative overflow-hidden transition-all duration-500 hover:scale-110"
						>
							<div class="relative h-[1.2rem] w-[1.2rem]">
								{#if isDark}
									<IconMoon
										class="absolute h-[1.2rem] w-[1.2rem] scale-100 rotate-0 opacity-100 transition-all duration-700"
									/>
									<IconSun
										class="absolute h-[1.2rem] w-[1.2rem] scale-0 -rotate-90 opacity-0 transition-all duration-700"
									/>
								{:else}
									<IconSun
										class="absolute h-[1.2rem] w-[1.2rem] scale-100 rotate-0 opacity-100 transition-all duration-700"
									/>
									<IconMoon
										class="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 opacity-0 transition-all duration-700"
									/>
								{/if}
							</div>
							<span class="sr-only">Toggle theme</span>
						</Button>
					</div>
				</div>
			</div>
		</div>
	</div>
</nav>
