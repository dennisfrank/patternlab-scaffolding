module.exports = {
    libs: {
        src: [
            'jquery/dist/jquery.js'
        ],
        dest: '<%= globalConfig.source.js %>/vendor/libs'
    },

    html5shiv: {
        src: [
            'html5shiv/dist/html5shiv.js',
            'html5shiv/dist/html5shiv-printshiv.js',
        ],
        dest: '<%= globalConfig.source.js %>/standalone'
    },

    // Copy plugins
    // plugins: {
    //     src: [

    //     ],
    //     dest: '<%= globalConfig.source.js %>/vendor/plugins'
    // },

    // Copy development scripts
    // dev: {
    //     src: [
    //
    //     ],
    //     dest: '<%= globalConfig.source.js %>/dev'
    // },

    // Copy vendor CSS files as SCSS files
    // css: {
    //     options: {
    //         destPrefix: '<%= globalConfig.source.css %>/vendor'
    //     },
    //     files: {
    //         'example.scss': 'example/dist/example.css'
    //     }
    // }
};
