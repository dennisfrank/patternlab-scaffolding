module.exports = {
    options: {
        separator: ' ',
    },
    jsScripts: {
        src: [
            '<%= globalConfig.source.js %>/scripts/js.js',
            '<%= globalConfig.source.js %>/scripts/**/*.js',
            '<%= globalConfig.source.js %>/*.js'
        ],
        dest: '<%= globalConfig.cms.js %>/scripts.js'
    },
    jsVendor: {
        src: [
            '<%= globalConfig.source.js %>/vendor/libs/**/*.js',
            '<%= globalConfig.source.js %>/vendor/plugins/**/*.js'
        ],
        dest: '<%= globalConfig.cms.js %>/vendor.js'
    },
    jsAll: {
        src: [
            '<%= globalConfig.source.js %>/vendor/libs/**/*.js',
            '<%= globalConfig.source.js %>/vendor/plugins/**/*.js',
            '<%= globalConfig.source.js %>/scripts/**/*.js',
            '<%= globalConfig.source.js %>/*.js'
        ],
        dest: '<%= globalConfig.cms.js %>/app.js'
    }
};
