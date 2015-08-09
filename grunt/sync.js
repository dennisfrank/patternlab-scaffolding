module.exports = {
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
