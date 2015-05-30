module.exports = function(grunt) {



    var globalConfig = {

        // Reference the source paths.
        source: {
            source: 'source',
            assets: '<%= globalConfig.source.source %>/assets',
            css: '<%= globalConfig.source.assets %>/scss',
            stylesheet: '<%= globalConfig.source.css %>/style.scss',
            js: '<%= globalConfig.source.assets %>/js',
            fonts: '<%= globalConfig.source.assets %>/fonts',
            img: '<%= globalConfig.source.assets %>/images'
        },
        // The Pattern Lab destination directory.
        public: {
            public: 'public',
            assets: '<%= globalConfig.public.public %>/assets',
            css: '<%= globalConfig.public.assets %>/css',
            stylesheet: '<%= globalConfig.public.css %>/style.css',
            js: '<%= globalConfig.public.assets %>/js',
            fonts: '<%= globalConfig.public.assets %>/fonts',
            img: '<%= globalConfig.public.assets %>/images'
        },

        // Adjust these values to the assets destination paths of your cms
        cms: {
            cms: 'cms',
            assets: '<%= globalConfig.cms.cms %>/assets',
            css: '<%= globalConfig.cms.assets %>/css',
            stylesheet: '<%= globalConfig.cms.css %>/style.css',
            js: '<%= globalConfig.cms.assets %>/js',
            fonts: '<%= globalConfig.cms.assets %>/fonts',
            img: '<%= globalConfig.cms.assets %>/images'
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
        'copy:patternlab',
        'shell:patternlab-generate',
        'bowerInject',
        'jsVendor',
        'copy:img',
        'copy:fontsPublic',
        'copy:fontsCms',
        'copy:jsPublic',
        'copy:jsCms',
        'shell:patternlab-patterns',
        'sass_globbing',
        'concurrent',
        'autoprefixer',
        'scsslint'
    ]);

    // Pattern Lab dev task.
    grunt.registerTask('dev', [
        'default',
        'connect:server',
        'watch'
    ]);

    // BrowserSync task.
    grunt.registerTask('sync', [
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

    // Uglify and concat vendor files.
    grunt.registerTask('jsVendor', [
        'concat:jsVendor',
        'uglify:jsVendor'
    ]);



};
