module.exports = {
	globDirectory: 'public/',
	globPatterns: [
		'**/*.svg',
        "**/*.html",
        "**/*.ico"
	],
	swDest: 'public/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};
