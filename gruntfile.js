"use strict";
module.exports = function(grunt){
    require('load-grunt-config')(grunt);





// Load the Grunt plugins.
grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-imagemin');


// Register the default tasks.
grunt.registerTask('default', ['watch', 'sass', 'cssmin', 'uglify', 'imagemin']);
};