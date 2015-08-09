module.exports = {
    dev: [
        '<%= globalConfig.source.css %>/**/*.scss',
        '!<%= globalConfig.source.css %>/styleguide.scss',
        '!<%= globalConfig.source.css %>/vendor/**/*'
    ],
    options: {
        config: '.scss-lint.yml',
        colorizeOutput: true,
        force: true
    }
};
