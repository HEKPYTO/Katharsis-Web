<script lang="ts">
	import Button from '$lib/components/ui/button.svelte';
	import {
		IconBrandLinkedin,
		IconBrandGithub,
		IconMail,
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
		}
	];

	interface FormField {
		id: string;
		label: string;
		component: 'input' | 'textarea';
		type?: 'text' | 'email';
		rows?: number;
		required: boolean;
	}

	const formFields: FormField[] = [
		{ id: 'name', label: 'Your Name', type: 'text', component: 'input', required: true },
		{ id: 'email', label: 'Email Address', type: 'email', component: 'input', required: true },
		{ id: 'subject', label: 'Subject', type: 'text', component: 'input', required: true },
		{ id: 'message', label: 'Message', component: 'textarea', rows: 5, required: true }
	];

	const baseInputClass =
		'border-input bg-background text-foreground focus:ring-ring w-full rounded-xl border px-4 py-3 transition-all focus:border-transparent focus:ring-2';

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
	<title>Contact - Kathayut Portfolio</title>
	<meta
		name="description"
		content="Get in touch with me for collaborations, projects, or just to say hello."
	/>
</svelte:head>

<div
	class="dark:to-background bg-gradient-to-b from-blue-200 via-indigo-200 via-purple-200 to-white dark:from-blue-800 dark:via-indigo-900 dark:via-purple-900"
>
	<div class="container-sketch">
		<div class="pt-16 pb-8 md:pt-24 md:pb-12 lg:pt-32 lg:pb-16">
			<div class="space-y-4 text-center">
				<h1 class="heading-xl text-foreground text-balance">Let's connect</h1>
				<p class="text-muted-foreground mx-auto max-w-3xl text-lg text-balance">
					I'm always excited to connect with fellow developers, designers, and tech enthusiasts.
					Reach out for collaborations, discussions, or just to say hello!
				</p>
			</div>
		</div>
	</div>
</div>

<section class="dark:bg-background bg-white">
	<div class="container-sketch">
		<div class="space-y-16 py-16">
			<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
				{#each socialLinks as social (social.name)}
					<button
						on:click={() => handleSocialClick(social)}
						class="sketch-card group text-left transition-all duration-200 hover:shadow-lg"
					>
						<div class="space-y-4 p-6">
							<div class="flex items-center space-x-4">
								<div class="{social.color} rounded-xl p-3 text-white">
									<svelte:component this={social.icon} class="h-6 w-6" />
								</div>
								<div class="flex-1">
									<h3 class="text-foreground font-semibold">{social.name}</h3>
									<p class="text-muted-foreground text-sm">{social.username}</p>
								</div>
								<IconExternalLink
									class="text-muted-foreground group-hover:text-foreground h-4 w-4 transition-colors"
								/>
							</div>
							<p class="text-muted-foreground text-sm leading-relaxed">{social.description}</p>
						</div>
					</button>
				{/each}
			</div>
		</div>
	</div>
</section>

<section class="section-spacing">
	<div class="container-sketch">
		<div class="animate-fade-in mx-auto max-w-3xl space-y-8 text-center">
			<div class="space-y-4">
				<h2 class="heading-lg text-foreground">Send me a message</h2>
				<p class="text-muted-foreground text-lg leading-relaxed">
					Have a project in mind or just want to chat? Give me a message!
				</p>
			</div>
			<div class="animate-fade-in-delayed">
				<div class="sketch-card mx-auto max-w-2xl">
					<div class="space-y-6 p-8">
						<form class="space-y-6" on:submit={handleSubmit}>
							<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
								{#each formFields.slice(0, 2) as field (field.id)}
									<div class="space-y-2">
										<label class="text-foreground text-sm font-medium" for={field.id}
											>{field.label}</label
										>
										<input
											class={baseInputClass}
											type={field.type}
											id={field.id}
											placeholder=""
											required={field.required}
										/>
									</div>
								{/each}
							</div>

							{#each formFields.slice(2) as field (field.id)}
								<div class="space-y-2">
									<label class="text-foreground text-sm font-medium" for={field.id}
										>{field.label}</label
									>
									{#if field.component === 'input'}
										<input
											class={baseInputClass}
											type={field.type}
											id={field.id}
											placeholder=""
											required={field.required}
										/>
									{:else if field.component === 'textarea'}
										<textarea
											class="{baseInputClass} resize-none"
											rows={field.rows}
											id={field.id}
											placeholder=""
											required={field.required}
										></textarea>
									{/if}
								</div>
							{/each}

							<div class="text-center">
								<Button
									type="submit"
									class="inline-flex items-center space-x-2 rounded-full bg-black px-8 py-4 text-white shadow-[inset_0_2px_0_rgba(255,255,255,0.2),_0_4px_6px_rgba(0,0,0,0.6)] transition-all duration-150 hover:translate-y-[0.5px] hover:bg-black hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.3),_0_2px_4px_rgba(0,0,0,0.8)] focus:outline-none active:translate-y-[1px]"
								>
									<span class="font-medium">Send Message</span>
									<IconSend class="h-5 w-5" />
								</Button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
