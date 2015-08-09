module.exports = {
    js: {
        files: [{
            expand: true,
            cwd: '<%= globalConfig.cms.js %>',
            src: ['**/*.js'],
            dest: '<%= globalConfig.cms.js %>',
            ext: '.min.js'
        }]
    }
};
