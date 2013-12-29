module.exports = function(grunt) {
	require('load-grunt-tasks')(grunt, 'grunt-*');

	grunt.initConfig({
		uglify: {
			options: {},
			core: {
				src: [
          'src/js/bootstrap.js',
          // 'src/js/jquery.galleriffic.js',
          'src/js/venobox.min.js',
          'src/js/jquery.opacityrollover.js',
          'src/js/main.js'
        ],
        dest: 'js/core.js'
			}
		},
    less: {
      options: {
        yuicompress: true
      },
      core: {
        src: [
          'src/css/bootstrap.css',
          'src/css/venobox.css',
          'src/css/main.css'
        ],
        dest: 'css/core.css'
      }
    },
    jshint: {
      all: 'src/js/*.js'
    },
    watch: {
      css: {
        files: [
        'src/css/*.css'
        ],
        tasks: [
        'less:core'
        ],
        options: {
          spawn: false
        }
      },
      js: {
        files: [
        'src/js/*.js'
        ],
        tasks: [
        'uglify:core'
        ],
        options: {
          spawn: false
        }
      },
    }
	});

  grunt.registerTask('dev', function () {
    grunt.task.run([
      'less',
      'uglify:core',
      'watch'
      ]);
  });
};