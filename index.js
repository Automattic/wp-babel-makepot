/**
 * External dependencies.
 */
const babel = require( '@babel/core' );

/**
 * Internal dependencies.
 */
const reactPreset = require( './presets' ).react;

module.exports = filepath => {
	try {
		return babel.transformFileSync( filepath, reactPreset );
	} catch ( error ) {
		console.error( filepath, error );
	}
};
