module.exports = {
    options: {
        separator: ' ',
    },
    jsAll: {
        src: [
            '<%= globalConfig.source.js %>/vendor/libs/**/*.js',
            '<%= globalConfig.source.js %>/vendor/plugins/**/*.js',
            '<%= globalConfig.source.js %>/scripts/**/*.js',
            '<%= globalConfig.source.js %>/*.js'
        ],
        dest: '<%= globalConfig.dist.js %>/app.js'
    }
};
