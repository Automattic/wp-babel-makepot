/**
 * External dependencies
 */
const execSync = require( 'child_process' ).execSync;

module.exports = output => {
	execSync( `sed -i.bak '/#-#-#-#-#/d' ${ output }` );
};
