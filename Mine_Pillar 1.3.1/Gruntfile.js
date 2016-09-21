/*!
 * Peachjar
 * http://www.peachjar.com/
 * Copyright 2015-2016
 */

module.exports = function(grunt) {
    'use strict';

    // Force use of Unix newlines
    grunt.util.linefeed = '\n';

    grunt.initConfig({

        // Metadata.
        pkg: grunt.file.readJSON('package.json'),
        bower_conf: grunt.file.exists('.bowerrc') ? grunt.file.readJSON('.bowerrc') : { directory: 'bower_components' },
        banner: '/*!\n' +
            ' * Peachjar<%= pkg.version %> (<%= pkg.homepage %>)\n' +
            ' * Copyright 2016-<%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
            ' */\n',

        // Task configuration.
        // clean: {
        //     dist: ['dist']
        // },
        clean: {
            pjHtml: ['dist/pj-*.html', 'dist/home**.html']
        },
        copy: {
            dist: {
                expand: true,
                src: [
                    'fonts/**',
                    'img/**',
                    'css/**',
                    'js/**',
                    'bower_components/**',
                    'pj-*.html'
                ],
                dest: 'dist/'
            },
            distrenameHTML: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: 'dist',
                    dest: 'dist/',
                    src: [
                        '{,*/}*.html'
                    ],
                    rename: function(dest, src) {
                        return dest + src.replace('pj-', '');
                    }
                }]
            },
                distrenameHome: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: 'dist',
                    dest: 'dist/',
                    src: [
                        '{,*/}*.html'
                    ],
                    rename: function(dest, src) {
                        return dest + src.replace('home', 'index');
                    }
                }]
            },
        },
        usebanner: {
            dist: {
                options: {
                    position: 'top',
                    banner: '<%= banner %>'
                },
                files: {
                    src: [
                        'dist/css/<%= pkg.name %>.css',
                        'dist/css/<%= pkg.name %>.min.css',
                        'docs/assets/css/docs.css'
                    ]
                }
            }
        }
        // jshint: {
        //     options: {
        //         jshintrc: 'js/.jshintrc'
        //     },
        //     src: {
        //         src: 'js/*.js'
        //     },
        //     assets: {
        //         src: 'js/app.js'
        //     }
        // },

        // jscs: {
        //     options: {
        //         config: 'js/.jscs.json'
        //     },
        //     grunt: {
        //         options: {
        //             requireCamelCaseOrUpperCaseIdentifiers: null
        //         },
        //         src: 'Gruntfile.js'
        //     },
        //     src: {
        //         src: '<%= jshint.src.src %>'
        //     },
        //     assets: {
        //         options: {
        //             requireCamelCaseOrUpperCaseIdentifiers: null
        //         },
        //         src: 'js/app.js'
        //     }
        // },

        // concat: {
        //     options: {
        //         banner: '<%= banner %>',
        //         stripBanners: false
        //     },
        //     dist: {
        //         src: [
        //             'js/*.js',
        //             '!js/application.js'
        //         ],
        //         dest: 'dist/js/<%= pkg.name %>.js'
        //     }
        // },

        // uglify: {
        //     options: {
        //         preserveComments: 'some'
        //     },
        //     dist: {
        //         src: '<%= concat.dist.dest %>',
        //         dest: 'dist/js/<%= pkg.name %>.min.js'
        //     }
        // },

        // less: {
        //     compileCore: {
        //         options: {
        //             strictMath: true,
        //             sourceMap: true,
        //             outputSourceFiles: true,
        //             sourceMapURL: '<%= pkg.name %>.css.map',
        //             sourceMapFilename: 'dist/css/<%= pkg.name %>.css.map'
        //         },
        //         files: {
        //             'dist/css/<%= pkg.name %>.css': 'less/<%= pkg.name %>.less'
        //         }
        //     },
        //     compileDocs: {
        //         options: {
        //             strictMath: true,
        //             sourceMap: true,
        //             outputSourceFiles: true,
        //             sourceMapURL: 'docs.css.map',
        //             sourceMapFilename: 'docs/assets/css/docs.css.map'
        //         },
        //         files: {
        //             'docs/assets/css/docs.css': 'docs/assets/css/src/docs.less'
        //         }
        //     }
        // },

        // autoprefixer: {
        //     options: {
        //         browsers: [
        //             'Android >= 4',
        //             'Chrome >= 20',
        //             'Firefox >= 24', // Firefox 24 is the latest ESR
        //             'Explorer >= 9',
        //             'iOS >= 6',
        //             'Opera >= 16',
        //             'Safari >= 6'
        //         ]
        //     },
        //     core: {
        //         options: {
        //             map: true
        //         },
        //         src: 'dist/css/<%= pkg.name %>.css'
        //     },
        //     docs: {
        //         src: 'docs/assets/css/docs.css'
        //     }
        // },

        // csslint: {
        //     options: {
        //         csslintrc: 'less/.csslintrc',
        //         'overqualified-elements': false
        //     },
        //     src: [
        //         'dist/css/<%= pkg.name %>.css'
        //     ],
        //     docs: {
        //         options: {
        //             ids: false,
        //             'overqualified-elements': false
        //         },
        //         src: 'docs/assets/css/docs.css'
        //     }
        // },

        // cssmin: {
        //     options: {
        //         keepSpecialComments: '*',
        //         noAdvanced: true
        //     },
        //     core: {
        //         files: {
        //             'dist/css/<%= pkg.name %>.min.css': 'dist/css/<%= pkg.name %>.css'
        //         }
        //     }
        // },

        

        // csscomb: {
        //     options: {
        //         config: 'less/.csscomb.json'
        //     },
        //     dist: {
        //         files: {
        //             'dist/css/<%= pkg.name %>.css': 'dist/css/<%= pkg.name %>.css'
        //         }
        //     },
        //     docs: {
        //         files: {
        //             'docs/assets/css/docs.css': 'docs/assets/css/docs.css'
        //         }
        //     }
        // },


        //     distVendorJS: {
        //       expand: true,
        //       flatten: true,
        //       cwd: './js',
        //       src: '*.js',
        //       dest: 'dist/js/vendor/'
        //     },
        //     distVendorCSS: {
        //       expand: true,
        //       flatten: true,
        //       cwd: '<%= bower_conf.directory %>',
        //       src: [
        //         'bootstrap/dist/css/bootstrap.min.css'
        //       ],
        //       dest: 'dist/css/vendor/'
        //     },
        //     docsVendorJS: {
        //       expand: true,
        //       flatten: true,
        //       cwd: '<%= bower_conf.directory %>',
        //       src: 'google-code-prettify/src/prettify.js',
        //       dest: 'docs/assets/js/'
        //     }
        // },

        // connect: {
        //     options: {
        //         port: 9007,
        //         livereload: 42201,
        //         hostname: 'localhost',
        //         base: '.'
        //     },
        //     livereload: {
        //         options: {
        //             open: true
        //         }
        //     }
        // },

        // watch: {
        //     less: {
        //         files: 'less/**/*.less',
        //         tasks: ['less', 'autoprefixer']
        //     },
        //     livereload: {
        //         options: {
        //             livereload: '<%= connect.options.livereload %>'
        //         },
        //         files: ['{,*/}*.html', '{docs,dist}/**/css/{,*/}*.css', '{docs,dist}/**/js/{,*/}*.js']
        //     }
        // }
    });

    // These plugins provide necessary tasks.
    require('load-grunt-tasks')(grunt, { scope: 'devDependencies' });
    require('time-grunt')(grunt);

    // Test task.
    // grunt.registerTask('test', ['csslint', 'jshint', 'jscs']);

    // JS distribution task.
    // grunt.registerTask('dist-js', ['concat', 'uglify']);

    // CSS distribution task.
    // grunt.registerTask('dist-css', ['less', 'autoprefixer', 'usebanner', 'csscomb', 'cssmin']);

    // Docs distribution task.
    // grunt.registerTask('dist-docs', ['copy:docsVendorJS']);

    // Copy files to dist.
    // grunt.registerTask('dist-copy', ['copy:dist', 'copy:distVendorJS', 'copy:distVendorCSS', 'copy:distTemplate']);

    // Full distribution task.
    // grunt.registerTask('dist', ['clean', 'dist-css', 'dist-copy', 'dist-js', 'dist-docs']);

    // Default task.
    // grunt.registerTask('default', ['test', 'dist']);

    // Run server, run...
    // grunt.registerTask('server', ['less', 'autoprefixer', 'connect:livereload', 'watch']);
    
    //pj build
    grunt.registerTask('build', ['copy', 'clean']);
};
