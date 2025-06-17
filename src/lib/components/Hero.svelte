<script lang="ts">
	import Button from '$lib/components/ui/button.svelte';
	import { IconArrowDown, IconSparkles } from '@tabler/icons-svelte';

	const scrollToProjects = () => {
		document.getElementById('featured-work')?.scrollIntoView({ behavior: 'smooth' });
	};
</script>

<section class="section-spacing bg-sketch-hero">
	<div class="container-sketch">
		<div class="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
			<!-- Left side - Main heading -->
			<div class="animate-fade-in space-y-8">
				<div class="space-y-6">
					<div
						class="bg-card/80 text-card-foreground border-border animate-bounce-gentle inline-flex items-center space-x-2 rounded-full border px-4 py-2 text-sm font-medium backdrop-blur-sm"
					>
						<IconSparkles class="h-4 w-4 animate-pulse text-pink-500" />
						<span>Welcome to my portfolio</span>
					</div>

					<h1 class="heading-xl text-foreground animate-slide-up text-balance">
						Developers,<br />
						welcome.<br />
					</h1>
				</div>
			</div>

			<!-- Right side - Description and CTA -->
			<div class="animate-fade-in-delayed space-y-8">
				<div class="space-y-6">
					<p
						class="text-muted-foreground animate-slide-up-delayed text-lg leading-relaxed text-balance"
					>
						I am Jda Kathayut, interests in analyzing big data that put the focus on you and your
						users. Welcome to my corner of the internet where I share my projects and journey.
					</p>

					<div class="space-y-4">
						<Button
							class="text-foreground group animate-gradient-border relative inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-transparent bg-transparent px-8 py-4 text-base font-medium transition-all duration-700 hover:scale-105 hover:shadow-xl"
							style="background: linear-gradient(135deg, #a855f7, #ec4899, #f97316) border-box; background-clip: border-box;"
							onclick={scrollToProjects}
						>
							<div
								class="bg-background group-hover:bg-background/95 absolute inset-[2px] rounded-full transition-all duration-700"
							></div>
							<div class="relative z-10 flex items-center space-x-2">
								<span>Explore my work</span>
								<IconArrowDown class="h-4 w-4" />
							</div>
						</Button>

						<p class="text-muted-foreground animate-fade-in-delayed-2 text-sm">
							Crafting digital experiences since 2020
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
