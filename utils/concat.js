/**
 * External dependencies
 */
const execSync = require( 'child_process' ).execSync;

module.exports = ( dir, output ) => {
	execSync( `find ${ dir } -name '*.pot' | msgcat -f- --no-wrap -o ${ output }` );
};
