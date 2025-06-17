<script lang="ts">
	import { cn } from '$lib/utils';

	interface TabsProps {
		value?: string;
		class?: string;
	}

	interface TabsListProps {
		class?: string;
	}

	interface TabsTriggerProps {
		value: string;
		class?: string;
		disabled?: boolean;
	}

	interface TabsContentProps {
		value: string;
		class?: string;
	}

	let { children, value = '', class: className }: TabsProps = $props();
	let currentValue = $state(value);

	export function Tabs(props: TabsProps) {
		return {
			...props,
			currentValue,
			setValue: (newValue: string) => (currentValue = newValue)
		};
	}

	export function TabsList({ children, class: className }: TabsListProps) {
		return `<div class="${cn('inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground', className)}">${children}</div>`;
	}

	export function TabsTrigger({
		children,
		value,
		class: className,
		disabled = false
	}: TabsTriggerProps) {
		const isActive = currentValue === value;
		return `<button 
			class="${cn('inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50', isActive ? 'bg-background text-foreground shadow-sm' : '', className)}"
			onclick="currentValue = '${value}'"
			${disabled ? 'disabled' : ''}
		>${children}</button>`;
	}

	export function TabsContent({ children, value, class: className }: TabsContentProps) {
		const isActive = currentValue === value;
		return isActive
			? `<div class="${cn('mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2', className)}">${children}</div>`
			: '';
	}
</script>

<div class={cn('', className)}>
	{@render children?.()}
</div>
