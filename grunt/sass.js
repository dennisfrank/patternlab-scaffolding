module.exports = {
    options: {
        includePaths: [
            'bower_components/'
        ],
        sourcemap: false
    },
    dev: {
        options: {
            outputStyle: 'nested',
            sourceComments: true,
            sourceMapEmbed: 'embed'
        },
        files: [{
            expand: true,
            flatten: true,
            extDot: 'last',
            cwd: '<%= globalConfig.source.css %>/',
            src: [
                'styleguide.scss',
                '**/app.scss',
                '**/*.app.scss'
            ],
            dest: '<%= globalConfig.public.css %>/',
            ext: '.css'
        }]
    },
};
