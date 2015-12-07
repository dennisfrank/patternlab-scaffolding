module.exports = {
    options: {
        browsers: [
            'last 3 version',
            'ie 9',
            'ie 10',
            'ie 11'
        ]
    },
    dev: {
        expand: true,
        flatten: true,
        cwd: '<%= globalConfig.public.css %>/',
        src: '**/*.css',
        dest: '<%= globalConfig.public.css %>/'
    },
    dist: {
        expand: true,
        flatten: true,
        cwd: '<%= globalConfig.dist.css %>/',
        src: '**/*.css',
        dest: '<%= globalConfig.dist.css %>/'
    }
};
