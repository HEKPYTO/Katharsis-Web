import { writable } from 'svelte/store';
import { browser } from '$app/environment';

type Theme = 'light' | 'dark';

function createThemeStore() {
	const { subscribe, set, update } = writable<Theme>('light');

	return {
		subscribe,
		toggle: () => {
			update((currentTheme) => {
				const newTheme = currentTheme === 'light' ? 'dark' : 'light';

				if (browser) {
					if (newTheme === 'dark') {
						document.documentElement.classList.add('dark');
					} else {
						document.documentElement.classList.remove('dark');
					}
					localStorage.setItem('theme', newTheme);
				}

				return newTheme;
			});
		},
		init: () => {
			if (browser) {
				const stored = localStorage.getItem('theme');
				const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
				const theme = (stored as Theme) || (prefersDark ? 'dark' : 'light');

				set(theme);

				if (theme === 'dark') {
					document.documentElement.classList.add('dark');
				} else {
					document.documentElement.classList.remove('dark');
				}
			}
		}
	};
}

export const themeStore = createThemeStore();
