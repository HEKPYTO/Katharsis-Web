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
						class="bg-card/80 text-card-foreground border-border inline-flex items-center space-x-2 rounded-full border px-4 py-2 text-sm font-medium backdrop-blur-sm"
					>
						<IconSparkles class="h-4 w-4 animate-ping animate-pulse text-pink-500" />
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
						I am Jda. Big data analyst puting the focus on any customers. Welcome to my corner of
						the internet where I share my projects and journey.
					</p>

					<div class="space-y-4">
						<div
							class="animate-fade-in-delayed group inline-flex rounded-full bg-gradient-to-r from-purple-300 via-pink-300 to-orange-300 p-1"
						>
							<Button
								onclick={scrollToProjects}
								class="inline-flex items-center space-x-2 rounded-full bg-black px-6 py-1.5 text-white shadow-[inset_0_2px_0_rgba(255,255,255,0.2),_0_4px_6px_rgba(0,0,0,0.6)] transition-all duration-150 hover:translate-y-[0.5px] hover:bg-black hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.3),_0_2px_4px_rgba(0,0,0,0.8)] focus:outline-none active:translate-y-[0.75px]"
							>
								<span>Explore my work</span>
								<IconArrowDown class="h-4 w-4" />
							</Button>
						</div>

						<p class="text-muted-foreground animate-fade-in-delayed-2 text-sm">
							Crafting digital experiences since 2020
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
