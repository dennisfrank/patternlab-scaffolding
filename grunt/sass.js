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
            sourceMap: true
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
    cms: {
        options: {
            outputStyle: 'compressed'
        },
        files: [{
            expand: true,
            flatten: true,
            extDot: 'last',
            cwd: '<%= globalConfig.source.css %>/',
            src: [
                '**/*.app.scss'
            ],
            dest: '<%= globalConfig.cms.css %>/',
            ext: '.css'
        }]
    }
};
