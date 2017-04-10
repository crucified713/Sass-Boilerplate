module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
			dist: {
				files: {
					'dist/main.css' : 'scss/main.scss'
				}
			}
		},
		watch: {
			css: {
				files: 'scss/**/*.scss',
				tasks: ['sass:dist']
			}
		},

        cssmin: {
            target: {
                files: 
                [{
                    src: ['dist/main.css'],
                    dest: 'dist/main.min.css',
                }],
            },
        }
    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-sass');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['sass']);
    grunt.registerTask('watch-scss', ['watch:css']);
    grunt.registerTask('production', ['sass', 'cssmin']);
};