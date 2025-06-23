<script lang="ts">
	import Button from '$lib/components/ui/button.svelte';
	import {
		IconBrandGithub,
		IconBrandLinkedin,
		IconMail,
		IconArrowUp,
		IconDiamond
	} from '@tabler/icons-svelte';

	interface FooterLink {
		name: string;
		href: string;
		external?: boolean;
	}

	interface FooterSection {
		title: string;
		links: FooterLink[];
	}

	const currentYear = new Date().getFullYear();

	const footerNavigation: FooterSection[] = [
		{
			title: 'Navigation',
			links: [
				{ name: 'Home', href: '/' },
				{ name: 'Projects', href: '/projects' },
				{ name: 'About', href: '/interests' },
				{ name: 'Contact', href: '/socials' }
			]
		},
		{
			title: 'Connect',
			links: [
				{ name: 'GitHub', href: 'https://github.com/Jdomenusrex', external: true },
				{
					name: 'LinkedIn',
					href: 'https://www.linkedin.com/in/kathayut-kannasoot-b7380a298/',
					external: true
				},
				{ name: 'Email', href: 'mailto:kathayutkannasoot@gmail.com', external: true }
			]
		},
		{
			title: 'Expertise',
			links: [
				{ name: 'Data Analytics', href: '#' },
				{ name: 'Machine Learning', href: '#' },
				{ name: 'Model Development', href: '#' },
				{ name: 'Data Visualization', href: '#' }
			]
		}
	];

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};
</script>

<footer class="bg-background border-border border-t">
	<div
		class="dark:from-background bg-gradient-to-b from-white via-pink-50 via-purple-50 to-blue-50 dark:via-pink-900/20 dark:via-purple-900/20 dark:to-blue-900/20"
	>
		<div class="container-sketch">
			<div class="py-16 md:py-20">
				<div class="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
					<div class="lg:col-span-5">
						<div class="space-y-4">
							<div class="flex items-center space-x-3">
								<IconDiamond
									class="text-foreground h-6 w-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12"
								/>
								<span
									class="text-foreground group-hover:text-primary font-sans text-lg font-semibold transition-colors duration-500"
									>Kathayut Kannasoot</span
								>
							</div>

							<p class="text-muted-foreground max-w-md text-lg leading-relaxed">
								Data scientist passionate about transforming data into actionable insights and
								building meaningful digital experiences.
							</p>
						</div>
					</div>

					<div class="lg:col-span-7">
						<div class="grid grid-cols-1 gap-8 sm:grid-cols-3">
							{#each footerNavigation as section (section.title)}
								<div class="space-y-4">
									<h3 class="text-foreground text-sm font-semibold tracking-wide uppercase">
										{section.title}
									</h3>
									<ul class="space-y-3">
										{#each section.links as link (link.name)}
											<li>
												<a
													href={link.href}
													{...link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {}}
													class="text-muted-foreground hover:text-foreground text-sm transition-colors duration-200"
												>
													{link.name}
												</a>
											</li>
										{/each}
									</ul>
								</div>
							{/each}
						</div>
					</div>
				</div>

				<div class="border-border mt-12 border-t pt-8">
					<div
						class="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0"
					>
						<span class="text-muted-foreground text-sm">
							© {currentYear} Kathayut Kannasoot. All rights reserved.
						</span>

						<div class="flex items-center">
							<Button
								size="icon"
								onclick={() => window.open('https://github.com/Jdomenusrex', '_blank')}
								aria-label="GitHub"
							>
								<IconBrandGithub class="h-5 w-5" />
							</Button>
							<Button
								size="icon"
								onclick={() =>
									window.open(
										'https://www.linkedin.com/in/kathayut-kannasoot-b7380a298/',
										'_blank'
									)}
								aria-label="LinkedIn"
							>
								<IconBrandLinkedin class="h-5 w-5" />
							</Button>
							<Button
								size="icon"
								onclick={() => window.open('mailto:kathayutkannasoot@gmail.com')}
								aria-label="Email"
							>
								<IconMail class="h-5 w-5" />
							</Button>
							<Button size="icon" onclick={scrollToTop} aria-label="Scroll to top">
								<IconArrowUp class="h-5 w-5" />
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</footer>
