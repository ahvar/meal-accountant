module.exports = function(grunt) {

	var app_files = ['src/fileA.js','src/fileB.js'],
		output = 'dist/built.js',
		test_output = 'test/built.js';

	//project configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		copy: {
			dist: {
				cwd: 'src/',
				expand: true,
				src: '**',
				dest: 'dist/'
			}
		},

		inline: {
			dist: {
				options: {
					inlineTagAttributes: {
						js: 'data-inlined="true"',
						css: 'data-inlined="true"'
					},
					cssmin: true,
					uglify: true
				},
				src:'src/index.html',
				dest:'dist/index.html'
			}
		},

		htmlmin: {

			options: {
				removeComments: true,
				collapseWhitespace: true
			},

			dist: {
				files: [
					{
						expand: true,
						cwd: 'dist/',
						src: ['*.html'],
						dest: 'dist/'
					}
				]
			}
		},

		concat: {
			options: {
				separator: ';',
			},
			dist: {
				src: app_files,
				dest: output
			},
			test: {
				src: app_files,
				dest: test_output
			}
		},

		mochaTest: {
			test: {
				options: {
					reporter: 'spec'
				},
				src: ['test/**/*.js']
			}
		},

		bowerInstall: {
			dist: {
				src: ['src/*.html'],
				dependencies: true,
				devDependencies: true,
				exclude: []
			}
		},

		wiredep: {
			task: {
				src: [
					'src/*.html'
				],
				options: {

				}
			}
		}

	});

	grunt.loadNpmTasks('grunt-wiredep');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-mocha-test');
	grunt.registerTask('default', ['copy','bower-install','concat','htmlmin']);	
};
