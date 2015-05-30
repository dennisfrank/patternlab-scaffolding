module.exports = {
    scss: {
        files: ['<%= globalConfig.source.css %>/**/{.*,*,*/*}'],
        tasks: ['sass_globbing', 'sass', 'autoprefixer', 'scsslint']
    },
    js: {
        files: ['<%= globalConfig.source.js %>/**/{.*,*,*/*}'],
        tasks: ['copy:jsPublic', 'copy:jsCms']
    },
    img: {
        files: ['<%= globalConfig.source.img %>/**/{.*,*,*/*}'],
        tasks: ['copy:imgPublic', 'copy:imgCms']
    },
    fonts: {
        files: ['<%= globalConfig.source.fonts %>/**/{.*,*,*/*}'],
        tasks: ['copy:fontsPublic', 'copy:fontsCms']
    },
    livereload: {
        options: {
            livereload: 35729
        },
        files: [
            '<%= globalConfig.public.public %>/**/*',
            '!<%= globalConfig.public.public %>/patterns/**/*'
        ]
    }
};
