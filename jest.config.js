module.exports = {
	rootDir: __dirname,
	snapshotFormat: {
		escapeString: true,
		printBasicPrototype: true,
	},
	testMatch: [ '<rootDir>/**/test/*.[jt]s?(x)', '!**/.eslintrc.*', '!**/examples/**' ],
};
