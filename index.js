/**
 * External dependencies.
 */
const babel = require( '@babel/core' );

/**
 * Internal dependencies.
 */
const defaultPreset = require( './presets' ).default;

module.exports = filepath => {
	try {
		return babel.transformFileSync( filepath, defaultPreset );
	} catch ( error ) {
		console.error( filepath, error );
	}
};
