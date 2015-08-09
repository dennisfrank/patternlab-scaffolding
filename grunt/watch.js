module.exports = {
    scss: {
        files: ['<%= globalConfig.source.css %>/**/{.*,*,*/*}'],
        tasks: ['sass_globbing', 'sass', 'autoprefixer', 'todo:hideOutput']
    },
    js: {
        files: ['<%= globalConfig.source.js %>/**/{.*,*,*/*}'],
        tasks: ['copy:jsPublic', 'copy:jsCms', 'todo:hideOutput']
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
    },
    patterns: {
        files: ['<%= globalConfig.source.patterns %>/**/{.*,*,*/*}'],
        tasks: ['todo:hideOutput']
    },
    docs: {
        files: ['<%= globalConfig.docs.docs %>/**/{.*,*,*/*}'],
        tasks: ['todo:hideOutput']
    }
};
