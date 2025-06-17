import axios from 'axios';

const GITHUB_API_BASE = 'https://api.github.com';
const USERNAME = 'Jdomenusrex';

export interface GitHubRepository {
	id: number;
	name: string;
	full_name: string;
	description: string | null;
	html_url: string;
	homepage: string | null;
	language: string | null;
	stargazers_count: number;
	forks_count: number;
	topics: string[];
	fork: boolean;
	created_at: string;
	updated_at: string;
}

export interface GitHubProfile {
	login: string;
	id: number;
	avatar_url: string;
	html_url: string;
	name: string | null;
	company: string | null;
	blog: string | null;
	location: string | null;
	email: string | null;
	bio: string | null;
	public_repos: number;
	followers: number;
	following: number;
}

export async function fetchGitHubProjects(): Promise<GitHubRepository[]> {
	try {
		const response = await axios.get<GitHubRepository[]>(
			`${GITHUB_API_BASE}/users/${USERNAME}/repos`,
			{
				params: {
					sort: 'updated',
					per_page: 6,
					type: 'public'
				}
			}
		);

		return response.data.filter((repo) => !repo.fork && repo.stargazers_count >= 0);
	} catch (error) {
		console.error('Error fetching GitHub projects:', error);
		return [];
	}
}

export async function fetchGitHubProfile(): Promise<GitHubProfile | null> {
	try {
		const response = await axios.get<GitHubProfile>(`${GITHUB_API_BASE}/users/${USERNAME}`);
		return response.data;
	} catch (error) {
		console.error('Error fetching GitHub profile:', error);
		return null;
	}
}
