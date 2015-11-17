# gulp-hipchat [![Build Status](https://travis-ci.org/jacopotarantino/gulp-hipchat.svg?branch=master)](https://travis-ci.org/jacopotarantino/gulp-hipchat)

Gulp plugin to send notifications to a HipChat room.

## Install

```
$ npm install --save-dev gulp-hipchat
```

## Usage

```js
var gulp = require('gulp');
var hipchat = require('gulp-hipchat');

gulp.task('default', function () {
	return gulp.src('src/file.ext')
		.pipe(hipchat())
		.pipe(gulp.dest('dist'));
});
```

## API

### hipchat(options)

#### options

##### foo

Type: `boolean`  
Default: `false`

Lorem ipsum.

## License

MIT © [Jack](https://github.com/jacopotarantino)
