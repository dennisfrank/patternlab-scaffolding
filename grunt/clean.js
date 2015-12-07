module.exports = {
    public: {
        src: [
            '<%= globalConfig.public.public %>/'
        ]
    },
    dist: {
        src: [
            '<%= globalConfig.dist.dist %>/'
        ]
    },
    jsVendor: {
        src: [
            '<%= globalConfig.source.js %>/vendor/'
        ]
    }
};
