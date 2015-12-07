module.exports = {
    js: {
        files: [{
            expand: true,
            cwd: '<%= globalConfig.dist.js %>',
            src: ['**/*.js'],
            dest: '<%= globalConfig.dist.js %>',
            ext: '.min.js'
        }]
    }
};
