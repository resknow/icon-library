
module.exports = {
	/**
	 * Site name, useful for page titles
	 */
	name: `Icon Library`,

	/**
	 * Company Information
	 */
	email: `info@resknow.co.uk`,
	phone: '0208 300 8833',
	address: '13 St Johns Parade, Sidcup, Kent, DA14 6ES',
	location: {
		lat: `51.42492021179657`,
		lng: `0.10547518730163574`,
	},

	/**
	 * Opening Times
	 */
	openingTimes: [
		{ day: 'mon', times: '09:00 - 17:00' },
		{ day: 'tue', times: '09:00 - 17:00' },
		{ day: 'wed', times: '09:00 - 17:00' },
		{ day: 'thu', times: '09:00 - 17:00' },
		{ day: 'fri', times: '09:00 - 17:00' },
		{ day: 'sat', times: 'Closed' },
		{ day: 'sun', times: 'Closed' },
	],

	/**
	 * Site URL, we use this in the Sitemap
	 */
	url: `http://localhost:8080`,

	/**
	 * CMS Config
	 */
	wordpress: {
		baseUri: 'https://cms.resknow.net/ezeefit/wp-json/wp/v2',
	},

	/**
	 * Menus
	 */
	menus: {
		main: [
			{ label: 'Home', href: '/' },
			{
				label: 'Services',
				href: '/services/',
				children: [
					{ label: 'Service 1', href: '/' },
					{ label: 'Service 2', href: '/' },
					{ label: 'Service 3', href: '/' },
				],
			},
			{ label: 'External Link', href: '/', target: '_blank' },
			{ label: 'Contact', href: '/contact/' },
		],
	},

	/**
	 * Global stylesheets, added in the <head> of each page
	 *
	 * For page specific stylesheets, use the same keys in
	 * frontmatter.
	 */
	stylesheets: [`/style.css`],

	/**
	 * Global Javascript, added in the <head> of each page
	 * with a defer attribute
	 *
	 * For page specific javascript, use the same keys in
	 * frontmatter.
	 */
	scripts: [`/bundle.js`],

	/**
	 * Cookie Consent
	 *
	 * A small banner will appear in the bottom left of the
	 * page letting the user know this site uses cookies
	 * to provide the best experience.
	 *
	 * You can customise the text shown by setting a text property
	 */
	cookieConsent: {
		show: true,
	},

	/**
	 * CSS Options
	 *
	 * Both options are set to true automatically during production
	 * build, manually set them here if you want to test them locally.
	 */
	css: {
		// purge: true,
		// minify: true
	},
};
