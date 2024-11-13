import App from './App.svelte';

const app = new App({
	// where do we want to inject the component into the DOM?
	target: document.body,
	props: {
		name: 'xd',
		xd: "white",
	}
});

export default app;