module.exports = {
    public: {
        src: [
            '<%= globalConfig.public.public %>/'
        ]
    },
    dist: {
        options: {
          force: true
        },
        src: [
            '<%= globalConfig.dist.css %>',
            '<%= globalConfig.dist.js %>',
            '<%= globalConfig.dist.fonts %>',
            '<%= globalConfig.dist.img %>',
            '<%= globalConfig.dist.icons %>',
        ]
    },
    jsVendor: {
        src: [
            '<%= globalConfig.source.js %>/vendor/'
        ]
    },
    jsDist: {
        src: [
            '<%= globalConfig.dist.js %>/*.js',
            '!<%= globalConfig.dist.js %>/*.min.js',
        ]
    }
};
