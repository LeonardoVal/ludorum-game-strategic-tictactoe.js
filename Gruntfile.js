/** Gruntfile for [ludorum-game-strategic-tictactoe.js](http://github.com/LeonardoVal/ludorum-game-strategic-tictactoe.js).
*/
module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
	});

	require('@creatartis/creatartis-grunt').config(grunt, {
		sourceNames: ['__prologue__', 'StrategicTicTacToe', '__epilogue__'],
		deps: [
			{ id: 'creatartis-base', name: 'base' },
			{ id: 'sermat', name: 'Sermat',
				path: 'node_modules/sermat/build/sermat-umd.js' },
			{ id: 'ludorum' },
			{ id: 'playtester', dev: true, module: false,
		 		path: 'node_modules/ludorum/build/playtester-common.js' }
		],
		targets: {
			build_umd: {
				fileName: 'build/ludorum-game-strategic-tictactoe',
				wrapper: 'umd'
			},
			build_raw: {
				fileName: 'build/ludorum-game-strategic-tictactoe-tag',
				wrapper: 'tag'
			}
		},
		connect: {
			playtester: 'tests/strategic-tictactoe.html'
		}
	});

	grunt.registerTask('default', ['build']);
	grunt.registerTask('playtest', ['compile', 'connect:playtester']);
};