module.exports = {
    options: {
        separator: ' ',
    },
    jsScripts: {
        src: [
            '<%= globalConfig.source.js %>/scripts/**/*.js',
            '<%= globalConfig.source.js %>/*.js'
        ],
        dest: '<%= globalConfig.dist.js %>/scripts.js'
    },
    jsVendor: {
        src: [
            '<%= globalConfig.source.js %>/vendor/libs/**/*.js',
            '<%= globalConfig.source.js %>/vendor/plugins/**/*.js'
        ],
        dest: '<%= globalConfig.dist.js %>/vendor.js'
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
