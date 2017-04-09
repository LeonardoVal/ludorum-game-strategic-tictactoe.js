/** Gruntfile for [ludorum-meta-tictactoe.js](??).
*/
var path = require('path');

var sourceFiles = ['__prologue__',
	'game',
	'__epilogue__'].map(function (module) {
		return 'src/'+ module +'.js';
	});

var UMDWrapper = function (global, init) { "use strict";
	var DEPENDENCIES = ['creatartis-base', 'sermat', 'ludorum'];
	if (typeof define === 'function' && define.amd) {
		define(DEPENDENCIES, init); // AMD module.
	} else if (typeof exports === 'object' && module.exports) {
		module.exports = init.apply(this, DEPENDENCIES.map(require)); // CommonJS module.
	} else {
		global.ludorum_wargame = init(global.base, global.Sermat, global.ludorum); // Browser.
	}
};

module.exports = function(grunt) {
	grunt.file.defaultEncoding = 'utf8';
	grunt.file.preserveBOM = false;
	
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: { //////////////////////////////////////////////////////////////////////////////////
			options: {
				separator: '\n\n',
				sourceMap: true
			},
			build_umd: {
				options: {
					banner: '('+ UMDWrapper +')(this,',
					footer: ');'
				},
				src: sourceFiles,
				dest: 'build/<%= pkg.name %>.js',
			}
		},
		jshint: { //////////////////////////////////////////////////////////////////////////////////
			options: { // Check <http://jshint.com/docs/options/>.
				loopfunc: true,
				boss: true,
				evil: true,
				proto: true
			},
			build_umd: {
				src: ['build/<%= pkg.name %>.js'],
			},
		},
		copy: { ////////////////////////////////////////////////////////////////////////////////////
			test: {
				files: [
					'node_modules/requirejs/require.js',
					'node_modules/creatartis-base/build/creatartis-base.js',
						'node_modules/creatartis-base/build/creatartis-base.js.map',
					'node_modules/sermat/build/sermat-amd.js', 
						'node_modules/sermat/build/sermat-amd.js.map',
					'node_modules/ludorum/build/ludorum.js',
						'node_modules/ludorum/build/ludorum.js.map',
					'build/<%= pkg.name %>.js',
						'build/<%= pkg.name %>.js.map'
					].map(function (f) { 
						return { nonull: true, src: f.src || f, dest: 'tests/lib/'+ path.basename(f.dest || f) };
					})
			}
		},
		uglify: { //////////////////////////////////////////////////////////////////////////////////
			options: {
				report: 'min',
				sourceMap: true
			},
			build_umd: {
				src: 'build/<%= pkg.name %>.js',
				dest: 'build/<%= pkg.name %>-min.js',
				options: {
					sourceMapIn: 'build/<%= pkg.name %>.js.map',
					sourceMapName: 'build/<%= pkg.name %>-min.js.map'
				}
			}
		},
		docker: { //////////////////////////////////////////////////////////////////////////////////
			document: {
				src: sourceFiles.concat(['README.md', 'docs/*.md']),
				dest: 'docs/docker',
				options: {
					colourScheme: 'borland',
					ignoreHidden: true,
					exclude: 'src/__prologue__.js,src/__epilogue__.js'
				}
			}
		}
	});
// Load tasks. /////////////////////////////////////////////////////////////////////////////////////
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-docker');
	
// Register tasks. /////////////////////////////////////////////////////////////////////////////////
	grunt.registerTask('compile', [
		'concat:build_umd', 'jshint:build_umd', 'uglify:build_umd', 'copy:test'
	]); 
	grunt.registerTask('test', ['compile']); //TODO Add specs.
	grunt.registerTask('build', ['test', 'docker:document']);
	grunt.registerTask('default', ['build']);
};