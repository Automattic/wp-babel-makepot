/**
 * External dependencies
 */
const fs = require( 'fs' );

module.exports = output => {
	if ( ! fs.existsSync( output ) ) {
		return;
	}

	const content = fs.readFileSync( output, 'utf8' );

	fs.writeFileSync( output, content.replace( /.*#-#-#-#-#.*\n/gm, '' ) );
};
