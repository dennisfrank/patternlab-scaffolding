module.exports = {
    imgPublic: {
        files: [
            {
                expand: true,
                cwd: '<%= globalConfig.source.img %>/',
                src: ['./**/*.*'],
                dest: '<%= globalConfig.public.img %>/'
            }
        ],
        updateAndDelete: true
    },
    imgDist: {
        files: [
            {
                expand: true,
                cwd: '<%= globalConfig.source.img %>/',
                src: ['./**/*.*'],
                dest: '<%= globalConfig.dist.img %>/'
            }
        ],
        updateAndDelete: true
    },
    contentImgPublic: {
        files: [
            {
                expand: true,
                cwd: '<%= globalConfig.source.contentimg %>/',
                src: ['./**/*.*'],
                dest: '<%= globalConfig.public.contentimg %>/'
            }
        ],
        updateAndDelete: true
    }
};
