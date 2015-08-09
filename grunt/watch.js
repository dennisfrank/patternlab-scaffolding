module.exports = {
    scss: {
        files: ['<%= globalConfig.source.css %>/**/{.*,*,*/*}'],
        tasks: ['sass_globbing', 'sass', 'autoprefixer']
    },
    js: {
        files: ['<%= globalConfig.source.js %>/**/{.*,*,*/*}'],
        tasks: ['copy:jsPublic', 'copy:jsCms']
    },
    img: {
        files: ['<%= globalConfig.source.img %>/**/{.*,*,*/*}'],
        tasks: ['copy:imgPublic', 'copy:imgCms']
    },
    contentimg: {
        files: ['<%= globalConfig.source.contentimg %>/**/{.*,*,*/*}'],
        tasks: ['sync:contentImgPublic']
    },
    fonts: {
        files: ['<%= globalConfig.source.fonts %>/**/{.*,*,*/*}'],
        tasks: ['copy:fontsPublic', 'copy:fontsCms']
    }
};
