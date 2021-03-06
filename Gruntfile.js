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
            icons: '<%= globalConfig.source.assets %>/icons',
            contentimg: '<%= globalConfig.source.source %>/images',
            patterns: '<%= globalConfig.source.source %>/_patterns',
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
            icons: '<%= globalConfig.public.assets %>/icons',
            contentimg: '<%= globalConfig.public.public %>/images',
        },

        // Adjust these values to the assets destination paths of your dist folder
        dist: {
            dist: 'dist',
            assets: '<%= globalConfig.dist.dist %>/assets',
            css: '<%= globalConfig.dist.assets %>/css',
            stylesheet: '<%= globalConfig.dist.css %>/app.min.css',
            js: '<%= globalConfig.dist.assets %>/js',
            fonts: '<%= globalConfig.dist.assets %>/fonts',
            img: '<%= globalConfig.dist.assets %>/images',
            icons: '<%= globalConfig.dist.assets %>/icons',
        },

        cms: {
            cms: '', // (relative) path to CMS public web root.
            assets: '<%= globalConfig.cms.cms %>/assets',
            ignoreAssetsPaths: '', // e. g. 'avatars,panel'
        },

        // Documentation.
        docs: {
            docs: 'docs',
        },

        // Staging server.
        stage: {
            host: '', // user@example.com
            dest: '',  // server path
        }

    };



    require('time-grunt')(grunt);



    require('load-grunt-config')(grunt, {
        jitGrunt: {
            staticMappings: {
                scsslint: 'grunt-scss-lint',
            }
        },
        config: {
            globalConfig: globalConfig,
        }
    });



    // Default task.
    grunt.registerTask('default', [
        'clean:public',
        'clean:jsVendor',
        'copy:patternlab',
        'shell:patternlab-generate',
        'bowerInject',
        'sync:contentImgPublic',
        'sync:imgPublic',
        'sync:iconsPublic',
        'copy:fontsPublic',
        'copy:jsPublic',
        'shell:patternlab-patterns',
        'sass_globbing',
        'concurrent',
        'postcss:dev',
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
        'scsslint',
    ]);

    // Bower components injection.
    grunt.registerTask('bowerInject', [
        'clean:jsVendor',
        'bowercopy',
        'injector',
    ]);

    // Uglify and concat js files.
    grunt.registerTask('scripts', [
        'concat:jsAll',
        'copy:jsDist',
        'uglify:jsDist',
        'clean:jsDist'
    ]);

    // Generate dist files.
    grunt.registerTask('dist', [
        'clean:dist',
        'default',
        'scripts',
        'sync:imgDist',
        'sync:iconsDist',
        'copy:fontsDist',
        'postcss:dist',
    ]);

    // Sync dist assets to cms.
    grunt.registerTask('cms', [
        'dist',
        'sync:cmsAssets',
    ]);

    // Deploy task.
    grunt.registerTask('deploy', [
        'default',
        'rsync:stage',
    ]);

};
