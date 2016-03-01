# Pattern Lab and Grunt Tasks

Before you go on, make sure you've [made yourself familiar with Pattern Lab](http://patternlab.io/docs/index.html).

------

## Requirements

- [PHP 5.3+](https://php.net/)
- [Node.js](http://nodejs.org/)
- [Grunt](http://gruntjs.com/)
- [Bower](http://bower.io/)
- [Git](http://git-scm.com/)
- [SCSS-Lint](https://github.com/brigade/scss-lint) (if you’re going to use SCSS linting with `grunt lint`)

## Setup

1. Get NPM dependencies

```
$ npm install
```

2. Get Bower packages

```
$ bower install
```

Now you are ready to run Pattern Lab and Grunt.

## Run Grunt and Pattern Lab

For development you have to open two terminal windows.

Run Grunt in the first terminal:

```
$ grunt serve
```

And start Pattern Lab in the second one:

```
$ php core/builder.php -wrp
```

When both command are running, open Pattern Lab on [http://localhost:8000](http://localhost:8000).

## Grunt Tasks

Besides `grunt serve` you can use following Grunt tasks:

```
$ grunt
```

Default Grunt task which generates a fresh Pattern Lab in `public/` and compiles, copys and optimizes assets from `source/` (scss/css, js, fonts, images) to `public/`.

```
$ grunt serve
```

Extends default task by starting [Browsersync](https://browsersync.io/) and watches changes in `source/`.

```
grunt lint
```

Provides a task to lint your SCSS files according to [SCSS-Lint](https://github.com/brigade/scss-lint). 

```
grunt dist
```

Generate `dist/` and copy assets files with further optimizations. `dist/` does not contain Pattern Lab.

```
grunt cms
```

Syncs assets from `dist/` to the CMS assets directory as defined in Gruntfile.js (`globalConfig.cms.assets`)

```
grunt deploy
```

Deploys `public/` to a staging server as defined in Gruntfile.js (`globalConfig.stage.host` and `globalConfig.stage.dest`)
