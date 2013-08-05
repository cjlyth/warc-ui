var path = require('path');
module.exports = function ( grunt ) {
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');

  var projectConfig = {
    out: "./build",
    hostname: '*',
    port: 9001,
    reload: 9002
  };

  grunt.initConfig({
    meta: projectConfig,
    clean: {
      dev: ['<%= meta.out %>']
    },
    copy: {
      assets: {
        files: [
          {
            cwd: 'app/assets',
            dest: '<%= meta.out %>/app/',
            src:'**' ,
            expand: true
          }
        ]
      },
      libs: {
        files: [{
          src: ['angular/angular.js',
                'angular-cookies/angular-cookies.js',
                'angular-resource/angular-resource.js',
                'angular-sanitize/angular-sanitize.js',
                'angular-ui-router/release/angular-ui-router.min.js',
                'angular-bootstrap/ui-bootstrap-tpls.js',
                'bower-angular-placeholders/angular-placeholders.js',
                'angular-ui-utils/modules/showhide/showhide.js',
                'angular-ui-utils/modules/ie-shiv/ie-shiv.js',
                'angular-ui-utils/modules/scrollfix/scrollfix.js',
                'angular-ui-utils/modules/format/format.js',
                'angular-ui-utils/modules/event/event.js',
                'angular-ui-utils/modules/jq/jq.js',
                'angular-ui-utils/modules/inflector/inflector.js',
                'angular-ui-utils/modules/validate/validate.js',
                'angular-ui-utils/modules/keypress/keypress.js',
                'angular-ui-utils/modules/unique/unique.js',
                'angular-ui-utils/modules/mask/mask.js',
                'angular-ui-utils/modules/reset/reset.js',
                'angular-ui-utils/modules/indeterminate/indeterminate.js',
                'angular-ui-utils/modules/route/route.js',
                'angular-ui-utils/modules/highlight/highlight.js',
                'angular-ui-utils/modules/utils.js'],
          dest: '<%= meta.out %>/app/libs',
          cwd: 'bower_components',
          expand: true
        }]
      }
    },
    watch: {
      options:{
        /*atBegin: true*/
        livereload: '<%= meta.reload %>'
      },
      less: {
        files: [
          'app/**/*.less'
        ],
        tasks:  [ 'less:dev' ]
      },
      jade: {
        files: [
          'app/**/*.jade'
        ],
        tasks:  [ 'jade:dev' ]
      },
      js: {
        files: [
          'app/**/*.js'
        ],
        tasks:  [ 'jshint:dev', 'uglify:dev' ]
      }
    },
    jade: {
      options:{
        data: {title: 'warcUI'}
      },
      dev: {
        files: [{
            src: ['<%= watch.jade.files %>'], 
            dest: '<%= meta.out %>',
            expand: true,
            ext: '.html'
        }]
      }
    },
    less: {
      dev: {
        options: {
          paths: [
            'bower_components/bootstrap/less',
            'bower_components/font-awesome/less/',
            'bower_components/angular-ui-utils/modules/highlight/'
          ]
        },
        files: [{
            src: [
              '<%= watch.less.files %>'
            ], 
            dest: '<%= meta.out %>',
            expand: true,
            ext: '.css'
        }]
      }
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        eqnull: true,
        browser: true,
        globals: {
          angular: true
        }
      },
      dev: ['<%= watch.js.files %>']
    },
    uglify: {
      dev: {
        options: {
          mangle: false,
          preserveComments: 'all',
          beautify: {
            beautify: true
          },
          compress: {
            join_vars: false,
            sequences: false,
            cascade: false
          }
        },
        files: [{
            src: ['<%= watch.js.files %>'], 
            dest: '<%= meta.out %>',
            expand: true
        }]
      }
    },
    connect: {
      dev: {
        options: {
          port: '<%= meta.port %>',
          hostname: '<%= meta.hostname %>',
          middleware: function(connect, options) {
            return [
              require('connect-livereload')({
                port: projectConfig.reload
              }),
              connect.static(options.base),
              connect.directory(options.base),
            ];
          },
          base: '<%= meta.out %>/app'
        }
      }
    }
  });
  // grunt.registerTask('default', ['express:dev', 'watch:dev']);
  // 
  grunt.registerTask('build', ['copy:libs','copy:assets', 'less:dev', 'jade:dev', 'jshint:dev', 'uglify:dev']);
  grunt.registerTask('default', ['clean', 'build', 'connect','watch']);
};
