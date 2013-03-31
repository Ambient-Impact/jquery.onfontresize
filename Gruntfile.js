/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    banner : '/**' +
      ' * Copyright (c) 2008 Tom Deater (http://www.tomdeater.com) \n' +
      ' * Licensed under the MIT License: \n' +
      ' * http://www.opensource.org/licenses/mit-license.php \n' +
      ' * Updated by Dirk Ginader: <%= grunt.template.today("yyyy-mm-dd") %> \n' +
      ' */ \n',
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: true,
        boss: true,
        eqnull: true,
        browser: true,
        globals: {
          jQuery: true
        }
      },
      files: ['Gruntfile.js', 'jquery.onfontresize.js']
    },
    watch: {
      gruntfile: {
        files: '<%= jshint.files %>',
        tasks: ['jshint', 'uglify']
      }
    },
    uglify: {
      options: {
        banner: '<%= banner %>'
      },
      dist: {
        src: 'jquery.onfontresize.js',
        dest: 'jquery.onfontresize.min.js'
      }
    }
  });

  grunt.registerTask('default', ['jshint', 'uglify']);

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

};
