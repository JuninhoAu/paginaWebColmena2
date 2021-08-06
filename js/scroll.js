	var scroll = new SmoothScroll('a[href*="#"]', {
	// Selectors
	ignore: '[href="#CarouselColmena"]', // ignorar las anclas del slider principal
	header: null, // Selector for fixed headers (must be a valid CSS selector)

	// Speed & Easing
	speed: 1500, // velocidad del scroll en milisegundos
	offset: 100, // Integer or Function returning an integer. How far to offset the scrolling anchor location in pixels
	easing: 'easeInOutCubic', // Easing pattern to use
	customEasing: function (time) {

		// Function. Custom easing pattern
		// If this is set to anything other than null, will override the easing option above

		// return <your formulate with time as a multiplier>

		// Example: easeInOut Quad
		return time < 0.5 ? 2 * time * time : -1 + (4 - 2 * time) * time;

	},

	// Callback API
	before: function (anchor, toggle) {}, // Callback to run before scroll
	after: function (anchor, toggle) {} // Callback to run after scroll
});