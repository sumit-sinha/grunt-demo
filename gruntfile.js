module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		jshint: {
			files: ["gruntfile.js", "javascript/*.js"]
		},
		uglify: {
			dist: {
				files: {
					"target/javascript/<%= pkg.jsFileName %>.js": ["javascript/*.js"]
				}
			}
		},
		cssmin: {
			target: {
				files: {
					"target/css/<%= pkg.cssFileName %>.css": ["css/*.css"]
				}
			}
		},
		htmlmin: {
			dist: {
				options: {
					removeComments: true,
					collapseWhitespace: true
				},
				files: {
					"target/html/<%= pkg.htmlFileName %>.html": "html/index.html"
				}
			}
		}
	});

	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-cssmin");
	grunt.loadNpmTasks("grunt-contrib-htmlmin");

	grunt.registerTask("default", ["jshint", "uglify", "cssmin", "htmlmin"]);
};