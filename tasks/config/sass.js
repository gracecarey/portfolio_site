/**
 * Compiles SASS files into CSS.
 *
 * ---------------------------------------------------------------
 */
module.exports = function(grunt) {

  grunt.config.set('sass', {
    dev: {
        options: {
          // includePaths: require('node-bourbon').with('other/path', 'another/path')
          // - or -
          includePaths: require('node-neat').includePaths
        },
        files: [{
            expand: true,
            cwd: 'assets/styles/',
            src: ['importer.scss'],
            dest: '.tmp/public/styles/',
            ext: '.css'
        }]
      }
  });

  grunt.loadNpmTasks('grunt-sass');
};
