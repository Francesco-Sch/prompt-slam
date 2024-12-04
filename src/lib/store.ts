import { writable } from 'svelte/store';

// Check if we're in a browser environment
const isBrowser = typeof window !== 'undefined';

// Generic function to create a persistent store
function persistent<T>(key: string, initialValue: T) {
	// If we're not in a browser, create a regular writable store
	if (!isBrowser) {
		return writable<T>(initialValue);
	}

	// Try to get stored value from sessionStorage
	let initial = initialValue;
	try {
		const storedValue = sessionStorage.getItem(key);
		if (storedValue !== null) {
			initial = JSON.parse(storedValue);
		}
	} catch (e) {
		console.warn(`Error reading from sessionStorage for key "${key}":`, e);
		// If there's an error parsing, use the initial value
		sessionStorage.removeItem(key);
	}

	const store = writable<T>(initial);

	// Subscribe to changes and update sessionStorage
	store.subscribe((value) => {
		try {
			if (value !== undefined) {
				sessionStorage.setItem(key, JSON.stringify(value));
			}
		} catch (e) {
			console.warn(`Error writing to sessionStorage for key "${key}":`, e);
		}
	});

	return store;
}

// Data
const user = persistent<string>('user', '');

// Settings
const model = persistent<'dall-e-2' | 'dall-e-3'>('model', 'dall-e-3');
const mode = persistent<'1-for-all' | 'lucky-4'>('mode', '1-for-all');

// Behaviour
const colorizedBackground = persistent<boolean>('colorizedBackground', false);
const theme = persistent<string>('theme', 'orange');

export { user, model, mode, colorizedBackground, theme };
