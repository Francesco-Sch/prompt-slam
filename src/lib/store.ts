import { writable } from 'svelte/store';

// Data
const user = writable('');

// Settings
const model = writable('dall-e-3');
const amountOfImages = writable(1);

// Behaviour
const colorizedBackground = writable(false);
const theme = writable('orange');

export { user, model, amountOfImages, colorizedBackground, theme };
