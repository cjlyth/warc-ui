module.exports = function ( grunt ) {
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-express-server');

  grunt.initConfig({
    watch: {
      dev: {
        options: {
          livereload: parseInt(process.env["npm_package_config_reload_port"]),
          spawn: false,
          debounceDelay: 1000
        },
        files: [ 
          'app/jade/**', 
          'app/src/**/*.css', 
          'app/src/**/*.js',
          'app/assets/**' 
        ],
        tasks:  [ 'express:dev' ]
      }
    },
    express: {
      dev: {
        options: {
          node_env: 'development',
          script: 'dev-server.js'
        }
      }
    }
  });
  grunt.registerTask('default', ['express:dev', 'watch:dev']);
};


          // 'app/assets/**/*',
          // 'app/jade/**/*.jade',
          // 'app/src/**/*.less'
