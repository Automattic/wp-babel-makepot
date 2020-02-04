/**
 * External dependencies.
 */
const babel = require( '@babel/core' );

module.exports = filepath => {
	return babel.transformFileSync( filepath, {
		code: false,
		ast: true,
		presets: [ '@babel/preset-react' ],
		plugins: [
			'@babel/plugin-proposal-class-properties',
			[
				'@automattic/babel-plugin-i18n-calypso',
				{
					headers: {
						'content-type': 'text/plain; charset=UTF-8',
					},
				},
			],
		],
	} );
};
