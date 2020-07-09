/**
 * External dependencies
 */
const fs = require( 'fs' );

module.exports = output => {
	const content = fs.readFileSync( output, 'utf8' );

	fs.writeFileSync( output, content.replace( /.*#-#-#-#-#.*\n/gm, '' ) );
};
