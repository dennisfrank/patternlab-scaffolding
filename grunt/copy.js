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
    imgPublic: {
        files: [
            {
                expand: true,
                cwd: '<%= globalConfig.source.img %>/',
                src: ['./**/*.*'],
                dest: '<%= globalConfig.public.img %>/'
            }
        ]
    },
    imgDist: {
        files: [
            {
                expand: true,
                cwd: '<%= globalConfig.source.img %>/',
                src: ['./**/*.*'],
                dest: '<%= globalConfig.dist.img %>/'
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
                cwd: '<%= globalConfig.source.js %>/',
                src: ['*.js'],
                dest: '<%= globalConfig.dist.js %>/'
            }
        ]
    }
};
