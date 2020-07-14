/**
 * External dependencies
 */
const fs = require( 'fs' );
const glob = require( 'glob' );
const path = require( 'path' );
const { po } = require( 'gettext-parser' );
const merge = require( 'lodash.mergewith' );

const mergeDeep = ( left, right, key ) => {
	if ( typeof left === 'object' && typeof right === 'object' ) {
		return merge( left, right, mergeDeep );
	}

	if ( typeof left === 'undefined' ) {
		return right;
	}

	if ( key === 'reference' ) {
		const leftReferences = ( left || '' ).split( '\n' );
		const rightReferences = ( right || '' ).split( '\n' );

		return leftReferences.concat( rightReferences ).join( '\n' );
	}

	if ( key === 'extracted' && left.length && right.length && left !== right ) {
		return left + '\n' + right;
	}

	return right || left;
};

module.exports = ( dir, output ) => {
	const potGlob = path.resolve( dir, '*.pot' );
	const potFiles = glob.sync( potGlob, { nodir: true, absolute: true } );

	const concatPOT = potFiles.reduce( ( acc, filePath ) => {
		return mergeDeep( acc, po.parse( fs.readFileSync( filePath, 'utf8' ) ) );
	}, {} );
	fs.writeFileSync( output, po.compile( concatPOT ) );
};
