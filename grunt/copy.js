module.exports = {
    patternlab: {
        files: [
            {
                expand: true,
                cwd: 'core/styleguide/',
                src: ['./**/*.*'],
                dest: '<%= globalConfig.public.public %>/styleguide/'
            }
        ]
    },
    fontsPublic: {
        files: [
            {
                expand: true,
                cwd: '<%= globalConfig.source.fonts %>/',
                src: ['./**/*.*'],
                dest: '<%= globalConfig.public.fonts %>/'
            }
        ]
    },
    fontsDist: {
        files: [
            {
                expand: true,
                cwd: '<%= globalConfig.source.fonts %>/',
                src: ['./**/*.*'],
                dest: '<%= globalConfig.dist.fonts %>/'
            }
        ]
    },
    jsPublic: {
        files: [
            {
                expand: true,
                cwd: '<%= globalConfig.source.js %>/',
                src: ['./**/*.*'],
                dest: '<%= globalConfig.public.js %>/'
            }
        ]
    },
    jsDist: {
        files: [
            {
                expand: true,
                cwd: '<%= globalConfig.source.js %>/standalone',
                src: ['*.js'],
                dest: '<%= globalConfig.dist.js %>/'
            }
        ]
    }
};
