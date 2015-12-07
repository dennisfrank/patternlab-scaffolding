module.exports = {
    scss: {
        files: ['<%= globalConfig.source.css %>/**/{.*,*,*/*}'],
        tasks: ['sass_globbing', 'sass', 'autoprefixer', 'todo:hideOutput']
    },
    js: {
        files: ['<%= globalConfig.source.js %>/**/{.*,*,*/*}'],
        tasks: ['copy:jsPublic', 'copy:jsDist', 'todo:hideOutput']
    },
    img: {
        files: ['<%= globalConfig.source.img %>/**/{.*,*,*/*}'],
        tasks: ['copy:imgPublic', 'copy:imgDist']
    },
    contentimg: {
        files: ['<%= globalConfig.source.contentimg %>/**/{.*,*,*/*}'],
        tasks: ['sync:contentImgPublic']
    },
    fonts: {
        files: ['<%= globalConfig.source.fonts %>/**/{.*,*,*/*}'],
        tasks: ['copy:fontsPublic', 'copy:fontsDist']
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
