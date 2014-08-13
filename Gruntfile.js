
var path = require("path");

module.exports = function(grunt) {

    grunt.initConfig({
        'connect': {
            demo: {
                options: {
                    open: true,
                    keepalive: true
                }
            }
        },
        'gh-pages': {
            src: [
                'dist/*', 'index.html'
            ]
        },
        'replace': {
            example: {
                src: ['src/*'],
                dest: 'dist/',
                replacements: [{
                    from: 'bower_components',
                    to: '..'
                }]
            }
        },
		'gitbook': {
			publish: {
				output: path.join(__dirname, "dist"),
                input: "src",
                title: "Deu Ruim.net",
                github: "octavioturra/deuruim.net"
			}
		},
		clean: {
            files: 'dist'
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-gh-pages');
    grunt.loadNpmTasks('grunt-text-replace');
	grunt.loadNpmTasks('grunt-gitbook');
	
    grunt.registerTask('build',  ['replace', 'gitbook']);
    grunt.registerTask('deploy', ['gh-pages']);
    grunt.registerTask('server', ['connect']);
};
