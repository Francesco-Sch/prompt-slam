import { writable } from 'svelte/store';

// Data
const user = writable('');

// Settings
const model = writable('dall-e-3');
const mode = writable<'1-for-all' | 'lucky-4'>('1-for-all');

// Behaviour
const colorizedBackground = writable(false);
const theme = writable('orange');

export { user, model, mode, colorizedBackground, theme };
