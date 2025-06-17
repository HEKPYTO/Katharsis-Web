<script lang="ts">
	import Button from '$lib/components/ui/button.svelte';
	import {
		IconBrandLinkedin,
		IconBrandGithub,
		IconMail,
		IconBrandTwitter,
		IconBrandDiscord,
		IconExternalLink,
		IconSend
	} from '@tabler/icons-svelte';
	import type { ComponentType } from 'svelte';

	interface SocialLink {
		name: string;
		username: string;
		url: string;
		icon: ComponentType;
		description: string;
		color: string;
	}

	const socialLinks: SocialLink[] = [
		{
			name: 'GitHub',
			username: '@Jdomenusrex',
			url: 'https://github.com/Jdomenusrex',
			icon: IconBrandGithub,
			description: 'Check out my code, contributions, and open-source projects',
			color: 'bg-gray-900 dark:bg-gray-700'
		},
		{
			name: 'LinkedIn',
			username: 'Connect with me',
			url: 'https://www.linkedin.com/in/kathayut-kannasoot-b7380a298/',
			icon: IconBrandLinkedin,
			description: 'Professional networking and career updates',
			color: 'bg-blue-600'
		},
		{
			name: 'Email',
			username: 'kathayutkannasoot@gmail.com',
			url: 'mailto:kathayutkannasoot@gmail.com',
			icon: IconMail,
			description: 'Direct communication for collaborations',
			color: 'bg-red-500'
		},
	];

	const handleSocialClick = (social: SocialLink): void => {
		if (social.url === '#') {
			alert(`Connect with me on ${social.name}: ${social.username}`);
		} else {
			window.open(social.url, '_blank', 'noopener,noreferrer');
		}
	};

	const handleSubmit = (event: SubmitEvent): void => {
		event.preventDefault();
		alert("Message sent successfully! I'll get back to you soon.");
	};
</script>

<svelte:head>
	<title>Contact - Creative Developer Portfolio</title>
	<meta
		name="description"
		content="Get in touch with me for collaborations, projects, or just to say hello."
	/>
</svelte:head>

<section class="section-spacing bg-sketch-hero">
	<div class="container-sketch">
		<div class="space-y-16">
			<!-- Header -->
			<div class="space-y-4 text-center">
				<h1 class="heading-xl text-foreground text-balance">Let's connect</h1>
				<p class="text-muted-foreground mx-auto max-w-3xl text-lg text-balance">
					I'm always excited to connect with fellow developers, designers, and tech enthusiasts.
					Reach out for collaborations, discussions, or just to say hello!
				</p>
			</div>

			<!-- Social Links Grid -->
			<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
				{#each socialLinks as social (social.name)}
					<button
						onclick={() => handleSocialClick(social)}
						class="sketch-card group text-left transition-all duration-200 hover:shadow-lg"
					>
						<div class="space-y-4 p-6">
							<div class="flex items-center space-x-4">
								<div class="{social.color} rounded-xl p-3 text-white">
									<social.icon class="h-6 w-6" />
								</div>
								<div class="flex-1">
									<h3 class="text-foreground font-semibold">{social.name}</h3>
									<p class="text-muted-foreground text-sm">{social.username}</p>
								</div>
								<IconExternalLink
									class="text-muted-foreground group-hover:text-foreground h-4 w-4 transition-colors"
								/>
							</div>

							<p class="text-muted-foreground text-sm leading-relaxed">
								{social.description}
							</p>
						</div>
					</button>
				{/each}
			</div>

			<!-- Contact Form -->
			<div class="mx-auto max-w-2xl">
				<div class="sketch-card">
					<div class="space-y-6 p-8">
						<div class="space-y-2 text-center">
							<h2 class="heading-sm text-foreground">Send me a message</h2>
							<p class="text-muted-foreground">
								Have a project in mind or just want to chat? Drop me a message!
							</p>
						</div>

						<form class="space-y-6" onsubmit={handleSubmit}>
							<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
								<div class="space-y-2">
									<label class="text-foreground text-sm font-medium" for="name">Your Name</label>
									<input
										class="border-input bg-background text-foreground focus:ring-ring w-full rounded-xl border px-4 py-3 transition-all focus:border-transparent focus:ring-2"
										type="text"
										id="name"
										placeholder="John Doe"
										required
									/>
								</div>
								<div class="space-y-2">
									<label class="text-foreground text-sm font-medium" for="email"
										>Email Address</label
									>
									<input
										class="border-input bg-background text-foreground focus:ring-ring w-full rounded-xl border px-4 py-3 transition-all focus:border-transparent focus:ring-2"
										type="email"
										id="email"
										placeholder="john@example.com"
										required
									/>
								</div>
							</div>

							<div class="space-y-2">
								<label class="text-foreground text-sm font-medium" for="subject">Subject</label>
								<input
									class="border-input bg-background text-foreground focus:ring-ring w-full rounded-xl border px-4 py-3 transition-all focus:border-transparent focus:ring-2"
									type="text"
									id="subject"
									placeholder="Let's collaborate on something amazing!"
									required
								/>
							</div>

							<div class="space-y-2">
								<label class="text-foreground text-sm font-medium" for="message">Message</label>
								<textarea
									class="border-input bg-background text-foreground focus:ring-ring w-full resize-none rounded-xl border px-4 py-3 transition-all focus:border-transparent focus:ring-2"
									rows="5"
									id="message"
									placeholder="Tell me about your project or just say hello..."
									required
								></textarea>
							</div>

							<div class="text-center">
								<Button
									type="submit"
									class="bg-foreground text-background hover:bg-foreground/90 rounded-full px-8 py-4 font-medium shadow-lg transition-all duration-200 hover:shadow-xl"
								>
									<IconSend class="mr-2 h-4 w-4" />
									Send Message
								</Button>
							</div>
						</form>
					</div>
				</div>
			</div>

			<!-- Quick Stats -->
			<div class="grid grid-cols-2 gap-6 md:grid-cols-4">
				<div class="space-y-2 text-center">
					<div class="text-foreground text-3xl font-bold">24h</div>
					<div class="text-muted-foreground text-sm">Response Time</div>
				</div>
				<div class="space-y-2 text-center">
					<div class="text-foreground text-3xl font-bold">100%</div>
					<div class="text-muted-foreground text-sm">Professional</div>
				</div>
				<div class="space-y-2 text-center">
					<div class="text-foreground text-3xl font-bold">∞</div>
					<div class="text-muted-foreground text-sm">Enthusiasm</div>
				</div>
				<div class="space-y-2 text-center">
					<div class="text-foreground text-3xl font-bold">5+</div>
					<div class="text-muted-foreground text-sm">Platforms</div>
				</div>
			</div>
		</div>
	</div>
</section>
