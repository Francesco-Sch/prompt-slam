import { writable } from 'svelte/store';

// Data
const user = writable('');

// Behaviour
const colorizedBackground = writable(false);
const theme = writable('orange');

export { user, colorizedBackground, theme };
