module.exports = {
    public: {
        src: [
            '<%= globalConfig.public.public %>/'
        ]
    },
    cms: {
        src: [
            '<%= globalConfig.cms.cms %>/'
        ]
    },
    jsVendor: {
        src: [
            '<%= globalConfig.source.js %>/vendor/'
        ]
    }
};
