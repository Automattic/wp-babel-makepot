/**
 * External dependencies.
 */
const babel = require( '@babel/core' );

/**
 * Internal dependencies.
 */
const reactPreset = require( './presets' ).react;

module.exports = filepath => {
	return babel.transformFileSync( filepath, reactPreset );
};
