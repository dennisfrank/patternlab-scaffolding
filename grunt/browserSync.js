module.exports = {
    bsFiles: {
        src: [
            '<%= globalConfig.public.public %>/**/*',
            '!<%= globalConfig.public.public %>/*',
            '!<%= globalConfig.public.public %>/patterns/**/*',
            '!<%= globalConfig.public.public %>/styleguide/**/*'
        ]
    },
    options: {
        watchTask: true,
        port: 8000,
        ui: {
            port: 8001
        },
        server: {
            baseDir: './<%= globalConfig.public.public %>/'
        },
        ghostMode: false,
        notify: false,
        open: false
    }
};
