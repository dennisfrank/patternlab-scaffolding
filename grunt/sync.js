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
    },
    iconsPublic: {
        files: [
            {
                expand: true,
                cwd: '<%= globalConfig.source.icons %>/',
                src: ['./**/*.*'],
                dest: '<%= globalConfig.public.icons %>/'
            }
        ],
        updateAndDelete: true
    },
    iconsDist: {
        files: [
            {
                expand: true,
                cwd: '<%= globalConfig.source.icons %>/',
                src: ['./**/*.*'],
                dest: '<%= globalConfig.dist.icons %>/'
            }
        ],
        updateAndDelete: true
    },
    cmsAssets: {
        files: [
            {
                expand: true,
                cwd: '<%= globalConfig.dist.assets %>/',
                src: ['./**/*.*'],
                dest: '<%= globalConfig.cms.assets %>/',
            }
        ],
        ignoreInDest: [
          './{<%= globalConfig.cms.ignoreAssetsPaths %>}',
          '{<%= globalConfig.cms.ignoreAssetsPaths %>}/**/*.*',
        ],
        updateAndDelete: true,
        compareUsing: "md5",
    }
};
