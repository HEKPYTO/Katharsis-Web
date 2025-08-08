<script lang="ts">
	import { page } from '$app/stores';
	import Button from '$lib/components/ui/button.svelte';
	import { IconHome, IconGhost } from '@tabler/icons-svelte';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	let typedText = $state('');
	let showCursor = $state(true);
	let isGlitching = $state(false);

	const message =
		"It seems you've ventured into the void. This page is a ghost, a whisper in the machine... a digital dead end. But every dead end is the start of a new journey. Let's get you back to familiar territory.";

	onMount(() => {
		let charIndex = 0;
		const typingInterval = setInterval(() => {
			if (charIndex < message.length) {
				typedText += message[charIndex];
				charIndex++;
			} else {
				clearInterval(typingInterval);
			}
		}, 35);

		const cursorInterval = setInterval(() => {
			showCursor = !showCursor;
		}, 530);

		return () => {
			clearInterval(typingInterval);
			clearInterval(cursorInterval);
		};
	});
</script>

<svelte:head>
	<title>404: Page Not Found</title>
	<meta
		name="description"
		content="You've found a page that doesn't exist. Let's get you back on track."
	/>
</svelte:head>

<div
	class="dark:to-background dark:to-background bg-gradient-to-b from-purple-100 via-blue-100 to-white dark:from-purple-900/40 dark:via-blue-900/40"
>
	<div class="container-sketch flex min-h-screen items-center justify-center py-16">
		<div
			class="animate-fade-in-up w-full max-w-4xl space-y-12 text-center"
			class:glitch-active={isGlitching}
		>
			<div class="space-y-4">
				<IconGhost
					class="text-primary mx-auto h-20 w-20 cursor-pointer transition-all duration-300 hover:scale-110"
					onmouseenter={() => (isGlitching = true)}
					onmouseleave={() => (isGlitching = false)}
				/>
				<div class="relative">
					<h1 class="heading-xl text-foreground text-balance" data-text="404: Page Not Found">
						404: Page Not Found
					</h1>
				</div>
				<p class="text-muted-foreground mx-auto max-w-2xl text-lg leading-relaxed">
					The page <code class="bg-muted text-primary rounded px-1.5 py-1 font-mono text-sm"
						>{$page.url.pathname.split('/')[1]}</code
					> appears to be empty. A ghost in the machine left this message for you.
				</p>
			</div>

			<div class="animate-fade-in-delayed">
				<Button
					onclick={() => goto('/')}
					class="inline-flex items-center space-x-2 rounded-full bg-black px-6 py-1.5 text-white shadow-[inset_0_2px_0_rgba(255,255,255,0.2),_0_4px_6px_rgba(0,0,0,0.6)] transition-all duration-150 hover:translate-y-[0.5px] hover:bg-black hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.3),_0_2px_4px_rgba(0,0,0,0.8)] focus:outline-none active:translate-y-[1px]"
				>
					<span>Return to Home</span>
					<IconHome class="h-5 w-5" />
				</Button>
			</div>

			<div class="sketch-card text-left">
				<div class="p-8">
					<p class="font-mono text-base leading-relaxed text-gray-800 dark:text-gray-300">
						{typedText}<span
							class="text-primary {showCursor
								? 'opacity-100'
								: 'opacity-0'} transition-opacity duration-75">█</span
						>
					</p>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.glitch-active {
		animation: glitch-shake 0.3s infinite linear alternate-reverse;
	}

	.glitch-active h1::before,
	.glitch-active h1::after {
		content: attr(data-text);
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		overflow: hidden;
		background: transparent;
	}

	.glitch-active h1::before {
		left: 3px;
		text-shadow: -2px 0 #ff00c1;
		animation: glitch-anim-1 2s infinite linear alternate-reverse;
	}

	.glitch-active h1::after {
		left: -3px;
		text-shadow:
			-2px 0 #00fff9,
			2px 2px #ff00c1;
		animation: glitch-anim-2 1.5s infinite linear alternate-reverse;
	}

	@keyframes glitch-shake {
		0% {
			transform: skewX(0deg);
		}
		10% {
			transform: skewX(5deg);
		}
		20% {
			transform: skewX(0deg);
		}
		30% {
			transform: skewX(-5deg);
		}
		40% {
			transform: skewX(0deg);
		}
		100% {
			transform: skewX(0deg);
		}
	}

	@keyframes glitch-anim-1 {
		0% {
			clip-path: polygon(0 2%, 100% 2%, 100% 5%, 0 5%);
		}
		10% {
			clip-path: polygon(0 15%, 100% 15%, 100% 15%, 0 15%);
		}
		20% {
			clip-path: polygon(0 10%, 100% 10%, 100% 20%, 0 20%);
		}
		30% {
			clip-path: polygon(0 1%, 100% 1%, 100% 2%, 0 2%);
		}
		40% {
			clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%);
		}
		50% {
			clip-path: polygon(0 44%, 100% 44%, 100% 44%, 0 44%);
		}
		60% {
			clip-path: polygon(0 50%, 100% 50%, 100% 20%, 0 20%);
		}
		70% {
			clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%);
		}
		80% {
			clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%);
		}
		90% {
			clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%);
		}
		100% {
			clip-path: polygon(0 60%, 100% 60%, 100% 70%, 0 70%);
		}
	}

	@keyframes glitch-anim-2 {
		0% {
			clip-path: polygon(0 75%, 100% 75%, 100% 75%, 0 75%);
		}
		10% {
			clip-path: polygon(0 25%, 100% 25%, 100% 25%, 0 25%);
		}
		20% {
			clip-path: polygon(0 50%, 100% 50%, 100% 70%, 0 70%);
		}
		30% {
			clip-path: polygon(0 22%, 100% 22%, 100% 22%, 0 22%);
		}
		40% {
			clip-path: polygon(0 93%, 100% 93%, 100% 93%, 0 93%);
		}
		50% {
			clip-path: polygon(0 14%, 100% 14%, 100% 14%, 0 14%);
		}
		60% {
			clip-path: polygon(0 30%, 100% 30%, 100% 80%, 0 80%);
		}
		70% {
			clip-path: polygon(0 10%, 100% 10%, 100% 10%, 0 10%);
		}
		80% {
			clip-path: polygon(0 40%, 100% 40%, 100% 40%, 0 40%);
		}
		90% {
			clip-path: polygon(0 60%, 100% 60%, 100% 65%, 0 65%);
		}
		100% {
			clip-path: polygon(0 80%, 100% 80%, 100% 90%, 0 90%);
		}
	}
</style>
