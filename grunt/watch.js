module.exports = {
    scss: {
        files: ['<%= globalConfig.source.css %>/**/{.*,*,*/*}'],
        tasks: ['sass_globbing', 'sass', 'postcss:dev', 'todo:hideOutput']
    },
    js: {
        files: ['<%= globalConfig.source.js %>/**/{.*,*,*/*}'],
        tasks: ['copy:jsPublic', 'todo:hideOutput']
    },
    img: {
        files: ['<%= globalConfig.source.img %>/**/{.*,*,*/*}'],
        tasks: ['sync:imgPublic']
    },
    contentimg: {
        files: ['<%= globalConfig.source.contentimg %>/**/{.*,*,*/*}'],
        tasks: ['sync:contentImgPublic']
    },
    fonts: {
        files: ['<%= globalConfig.source.fonts %>/**/{.*,*,*/*}'],
        tasks: ['copy:fontsPublic']
    },
    icons: {
        files: ['<%= globalConfig.source.icons %>/**/{.*,*,*/*}'],
        tasks: ['sync:iconsPublic']
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
