import { writable } from 'svelte/store';

const createSectionStore = () => {
	const { subscribe, set } = writable('home');

	return {
		subscribe,
		setCurrentSection: (section) => {
			set(section);
		}
	};
};

export const currentSection = createSectionStore();
