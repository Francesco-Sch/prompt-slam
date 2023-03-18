import { writable } from 'svelte/store';

// Data
const username = writable('');

// Behaviour
const theme = writable('orange');

export { username, theme };
