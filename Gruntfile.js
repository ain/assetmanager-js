/*global module:false*/
module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    meta: {
      banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '* <%= pkg.homepage %>\n' +
        '* Copyright © <%= grunt.template.today("yyyy") %> ' +
        '<%= pkg.author.name %>; Licensed <%= pkg.licenses[0].type %> */'
    },
    qunit: {
      files: ['./test/**/*.html']
    },
    concat: {
      options: {
        banner: '<%= meta.banner %>',
        stripBanners: true
      },
      dist: {
        src: ['src/<%= pkg.name %>.js'],
        dest: 'dist/<%= pkg.name %>.js'
      }
    },
    copy: {
      example: {
        src: ['dist/<%= pkg.name %>.min.js'],
        dest: 'example/<%= pkg.name %>.min.js'
      }
    },
    watch: {
      src: {
        files: '<%= jshint.src %>',
        tasks: ['jshint:src', 'build']
      },
    },
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
        boss: true,
        eqnull: true,
        browser: true
      },
      src: [
        '<%= concat.dist.src %>',
      ],
      test: [
        'test/*.js'
      ],
      gruntfile: [
        'Gruntfile.js',
      ]
    },
    uglify: {
      options: {
        banner: '<%= meta.banner %>'
      },
      dist: {
        src: '<%= concat.dist.dest %>',
        dest: 'dist/<%= pkg.name %>.min.js'
      }
    }
  });

  // QA task.
  grunt.registerTask('qa', ['jshint', 'qunit']);

  // Build task.
  grunt.registerTask('build', ['concat', 'uglify', 'copy']);

  // Default task.
  grunt.registerTask('default', ['qa', 'build']);

  // Travis CI task.
  grunt.registerTask('travis', ['qa']);
};
