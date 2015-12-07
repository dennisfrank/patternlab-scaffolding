module.exports = function(grunt) {



    var globalConfig = {

        // Reference the source paths.
        source: {
            source: 'source',
            assets: '<%= globalConfig.source.source %>/assets',
            css: '<%= globalConfig.source.assets %>/scss',
            stylesheet: '<%= globalConfig.source.css %>/app.scss',
            js: '<%= globalConfig.source.assets %>/js',
            fonts: '<%= globalConfig.source.assets %>/fonts',
            img: '<%= globalConfig.source.assets %>/images',
            contentimg: '<%= globalConfig.source.source %>/images',
            patterns: '<%= globalConfig.source.source %>/_patterns'
        },
        // The Pattern Lab destination directory.
        public: {
            public: 'public',
            assets: '<%= globalConfig.public.public %>/assets',
            css: '<%= globalConfig.public.assets %>/css',
            stylesheet: '<%= globalConfig.public.css %>/app.css',
            js: '<%= globalConfig.public.assets %>/js',
            fonts: '<%= globalConfig.public.assets %>/fonts',
            img: '<%= globalConfig.public.assets %>/images',
            contentimg: '<%= globalConfig.public.public %>/images'
        },

        // Adjust these values to the assets destination paths of your dist folder or CMS
        dist: {
            dist: 'dist',
            assets: '<%= globalConfig.dist.dist %>/assets',
            css: '<%= globalConfig.dist.assets %>/css',
            stylesheet: '<%= globalConfig.dist.css %>/app.min.css',
            js: '<%= globalConfig.dist.assets %>/js',
            fonts: '<%= globalConfig.dist.assets %>/fonts',
            img: '<%= globalConfig.dist.assets %>/images'
        },

        // Documentation
        docs: {
            docs: 'docs'
        },

        // Staging server
        stage: {
            host: '', // user@example.com
            dest: ''  // server path
        }

    };



    require('time-grunt')(grunt);



    require('load-grunt-config')(grunt, {
        jitGrunt: {
            staticMappings: {
                scsslint: 'grunt-scss-lint'
            }
        },
        config: {
            globalConfig: globalConfig
        }
    });



    // Default task.
    grunt.registerTask('default', [
        'clean:public',
        'clean:dist',
        'clean:jsVendor',
        'copy:patternlab',
        'shell:patternlab-generate',
        'bowerInject',
        'scripts',
        'sync:contentImgPublic',
        'sync:imgDist',
        'copy:fontsPublic',
        'copy:fontsDist',
        'copy:jsPublic',
        'shell:patternlab-patterns',
        'sass_globbing',
        'concurrent',
        'autoprefixer',
        'todo:showOutput',
    ]);

    // BrowserSync task.
    grunt.registerTask('serve', [
        'default',
        'browserSync',
        'watch'
    ]);

    // Linting task.
    grunt.registerTask('lint', [
        'scsslint'
    ]);



    // Bower components injection.
    grunt.registerTask('bowerInject', [
        'clean:jsVendor',
        'bowercopy',
        'injector'
    ]);

    // Uglify and concat js files.
    grunt.registerTask('scripts', [
        //'concat:jsVendor',
        //'concat:jsScripts',
        'concat:jsAll',
        'uglify:js'
    ]);

    // Deploy task.
    grunt.registerTask('deploy', [
        'rsync:stage'
    ]);



};
