<script lang="ts">
	import { onMount } from 'svelte';

	let terminalRef: HTMLDivElement;
	let inputRef: HTMLInputElement;
	let currentInput = $state('');
	let history = $state<Array<{ type: 'command' | 'output'; content: string }>>([
		{ type: 'output', content: 'Welcome to my development philosophy terminal!' },
		{ type: 'output', content: 'Type "help" to see available commands.' },
		{ type: 'output', content: '' }
	]);
	let commandHistory = $state<string[]>([]);
	let historyIndex = $state(-1);
	let cursorVisible = $state(true);
	let inputFocused = $state(false);

	const commands = {
		help: () => [
			'Available commands:',
			'  help       - Show this help message',
			'  about      - Learn about my development approach',
			'  skills     - View my technical skills',
			'  philosophy - My coding philosophy',
			'  tools      - Development tools I use',
			'  clear      - Clear the terminal',
			'  whoami     - About me'
		],
		about: () => [
			'My Development Approach:',
			'',
			'I believe in building data-driven solutions that are both insightful and actionable.',
			'Every dataset is an opportunity to uncover patterns, generate value, and drive decisions.',
			'I focus on model accuracy, interpretability, and the real-world impact of my analyses.'
		],
		skills: () => [
			'Technical Skills:',
			'',
			'Languages: Python, R, SQL, Bash',
			'Data Analysis: Pandas, NumPy, Excel, Spark',
			'Machine Learning: scikit-learn, XGBoost, TensorFlow, PyTorch',
			'Data Visualization: Matplotlib, Seaborn, Plotly, Tableau',
			'Tools: Git, Docker, Databricks, Jupyter, Airflow',
			'Databases: PostgreSQL, MySQL, MongoDB, BigQuery'
		],
		philosophy: () => [
			'Data Science Philosophy:',
			'',
			'1. Start with the right questions, not just the data',
			'2. Clarity and reproducibility over complexity',
			'3. Validate assumptions and test models rigorously',
			'4. Communicate insights clearly to all stakeholders',
			'5. Keep learning — tools evolve, but thinking critically is timeless'
		],
		tools: () => [
			'Development Tools:',
			'',
			'Editor: VS Code, JupyterLab, PyCharm',
			'Terminal: iTerm2 with Oh My Zsh',
			'Version Control: Git with GitHub/GitLab',
			'Environments: Conda, venv, Docker',
			'Notebook: Jupyter, Google Colab',
			'Visualization: Tableau, Power BI, Plotly'
		],
		whoami: () => [
			'Data Scientist & Problem Solver',
			'',
			"I'm passionate about building digital experiences that make a difference.",
			"When I'm not coding, you'll find me watching anime or optimizing my setup.",
			'Always excited to collaborate on interesting projects!'
		],
		clear: () => {
			history = [];
			return [];
		}
	};

	onMount(() => {
		// Blinking cursor animation
		const interval = setInterval(() => {
			cursorVisible = !cursorVisible;
		}, 530);

		// Focus input when terminal is clicked
		const handleClick = () => {
			inputRef?.focus();
			inputFocused = true;
		};
		terminalRef?.addEventListener('click', handleClick);

		return () => {
			clearInterval(interval);
			terminalRef?.removeEventListener('click', handleClick);
		};
	});

	function handleKeyDown(event: KeyboardEvent) {
		if (event.key === 'Enter') {
			const command = currentInput.trim().toLowerCase();

			// Add to command history if not empty
			if (currentInput.trim()) {
				commandHistory = [...commandHistory, currentInput.trim()];
			}

			// Add command to history
			history = [...history, { type: 'command', content: `$ ${currentInput}` }];

			// Execute command
			if (command in commands) {
				const output = commands[command as keyof typeof commands]();
				if (Array.isArray(output)) {
					history = [
						...history,
						...output.map((line) => ({ type: 'output' as const, content: line }))
					];
				}
			} else if (command === '') {
				// Empty command, just add a new line
			} else {
				history = [
					...history,
					{
						type: 'output',
						content: `Command not found: ${command}. Type "help" for available commands.`
					}
				];
			}

			history = [...history, { type: 'output', content: '' }];

			currentInput = '';
			historyIndex = -1;

			setTimeout(() => {
				terminalRef?.scrollTo({ top: terminalRef.scrollHeight, behavior: 'smooth' });
			}, 10);
		} else if (event.key === 'ArrowUp') {
			event.preventDefault();
			if (commandHistory.length > 0) {
				if (historyIndex === -1) {
					historyIndex = commandHistory.length - 1;
				} else if (historyIndex > 0) {
					historyIndex--;
				}
				currentInput = commandHistory[historyIndex] || '';
			}
		} else if (event.key === 'ArrowDown') {
			event.preventDefault();
			if (historyIndex !== -1) {
				if (historyIndex < commandHistory.length - 1) {
					historyIndex++;
					currentInput = commandHistory[historyIndex] || '';
				} else {
					historyIndex = -1;
					currentInput = '';
				}
			}
		}
	}

	function handleFocus() {
		inputFocused = true;
	}

	function handleBlur() {
		inputFocused = false;
	}
</script>

<div class="mx-auto w-full max-w-4xl">
	<!-- Terminal Window -->
	<div class="overflow-hidden rounded-lg border border-gray-700 bg-gray-900 shadow-2xl">
		<!-- Terminal Header -->
		<div
			class="relative flex items-center space-x-2 border-b border-gray-700 bg-gray-800 px-4 py-3"
		>
			<!-- Left traffic lights -->
			<div class="flex space-x-2">
				<div class="h-3 w-3 rounded-full bg-red-500"></div>
				<div class="h-3 w-3 rounded-full bg-yellow-500"></div>
				<div class="h-3 w-3 rounded-full bg-green-500"></div>
			</div>

			<!-- Centered title -->
			<div class="absolute left-1/2 -translate-x-1/2 transform">
				<span class="text-sm font-medium text-gray-300">development.zsh</span>
			</div>
		</div>

		<!-- Terminal Content -->
		<div
			bind:this={terminalRef}
			class="scrollbar-hide h-96 overflow-y-auto bg-gray-900 p-4 font-mono text-sm"
			style="scrollbar-width: none; -ms-overflow-style: none;"
		>
			<!-- History -->
			{#each history as line, index (index)}
				<div class="mb-1">
					{#if line.type === 'command'}
						<span class="text-green-400">{line.content}</span>
					{:else}
						<span class="text-gray-300">{line.content}</span>
					{/if}
				</div>
			{/each}

			<!-- Current Input Line -->
			<div class="flex items-center">
				<span class="mr-2 text-green-400">$</span>
				<div class="relative flex-1">
					<!-- Hidden input for functionality -->
					<input
						bind:this={inputRef}
						bind:value={currentInput}
						onkeydown={handleKeyDown}
						onfocus={handleFocus}
						onblur={handleBlur}
						class="absolute inset-0 w-full bg-transparent font-mono text-transparent caret-transparent outline-none"
						autocomplete="off"
						spellcheck="false"
					/>

					<!-- Visible text and cursor -->
					<div class="flex items-center">
						<span class="font-mono text-gray-300">{currentInput}</span>
						{#if inputFocused || currentInput === ''}
							<span
								class="text-gray-300 {cursorVisible
									? 'opacity-100'
									: 'opacity-0'} ml-0 transition-opacity">█</span
							>
						{/if}
						{#if !inputFocused && currentInput === ''}
							<span class="font-mono text-gray-500">&nbsp;Type a command...</span>
						{/if}
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Terminal Instructions -->
	<div class="mt-4 text-center">
		<p class="text-muted-foreground text-sm">
			Click on the terminal and type commands to explore my development approach
		</p>
		<p class="text-muted-foreground mt-1 text-xs">Use ↑↓ arrow keys to navigate command history</p>
	</div>
</div>
