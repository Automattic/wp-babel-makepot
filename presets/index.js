/**
 * Internal dependencies.
 */
const reactPreset = require( './react-preset' );

/**
 * Extend babel base options.
 *
 * @param   {Array}  options.presets Babel presets
 * @param   {Array}  options.plugins Babel plugins
 * @param   {...any} options.rest    Other babel options
 * @returns {object} Babel options object
 */
const extendBaseOptions = ( { presets = [], plugins = [], ...rest } ) => ( {
	code: false,
	ast: true,
	presets,
	plugins: [
		...plugins,
		[
			'@automattic/babel-plugin-i18n-calypso',
			{
				headers: { 'content-type': 'text/plain; charset=UTF-8' },
			},
		],
	],
} );

const presets = {
	react: extendBaseOptions( reactPreset ),
};

module.exports = presets;
