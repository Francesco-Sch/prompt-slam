import { writable } from 'svelte/store';

// Data
const username = writable('');

// Behaviour
const colorizedBackground = writable(false);
const theme = writable('orange');

export { username, colorizedBackground, theme };
