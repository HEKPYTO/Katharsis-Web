import { writable } from 'svelte/store';
import { browser } from '$app/environment';

function createTheme() {
	const { subscribe, set, update } = writable<'light' | 'dark'>('light');

	return {
		subscribe,
		toggle: () =>
			update((theme) => {
				const newTheme = theme === 'light' ? 'dark' : 'light';
				if (browser) {
					localStorage.setItem('theme', newTheme);
					if (newTheme === 'dark') {
						document.documentElement.classList.add('dark');
					} else {
						document.documentElement.classList.remove('dark');
					}
				}
				return newTheme;
			}),
		init: () => {
			if (browser) {
				const stored = localStorage.getItem('theme');
				const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
				const theme = stored || (prefersDark ? 'dark' : 'light');
				set(theme as 'light' | 'dark');
				if (theme === 'dark') {
					document.documentElement.classList.add('dark');
				}
			}
		}
	};
}

export const theme = createTheme();
