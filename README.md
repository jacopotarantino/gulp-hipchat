# gulp-hipchat [![Build Status](https://travis-ci.org/jacopotarantino/gulp-hipchat.svg?branch=master)](https://travis-ci.org/jacopotarantino/gulp-hipchat)

Gulp plugin to send notifications to a HipChat room.

More description //@TODO

## Install

```
$ npm install --save-dev gulp-hipchat
```

## Usage

The below would go in `<PROJECT SOURCE>/gulp/hipchat.js`.

```js
var gulp = require('gulp'),
    hipchat = require('gulp-hipchat')

gulp.task('notify-hipchat-of-build', function (done) {
  hipchat({
    apiKey: 'YOUR_API_KEY',
    room: 'YOUR_PREFERRED_ROOM_ID', // see [this link](https://www.hipchat.com/docs/apiv2/method/get_all_rooms) for details on how to get your room id
    message: '<strong>warning!</strong>: building [library-name] to production!',
    from: 'YOUR_NAME', // or santa_claus... whatever.
    color: 'YOUR_FAVORITE_COLOR' // hipchat only supports a few text colors. [see here](https://www.hipchat.com/docs/api/method/rooms/message)
  }, done)
})

gulp.task('build-to-production', ['notify-hipchat-of-build'], function () {
  // do other build tasks...
})
```

## API

### hipchat(options, callback)

#### options

A hash of options as defined below:

* apiKey
  * Your HipChat API key.
* room
  * See [this link](https://www.hipchat.com/docs/apiv2/method/get_all_rooms) for details on how to get your room id. This is the HipChat room you'd like your message posted to.
* message
  * The text content to post to your chat room.
* color
  * The background/text color to set for your message to HipChat.
}
```

#### callback

The gulp callback function. This is important so that Gulp can know when this very synchronous task is done.

## Testing

This is a fairly small plugin and has a fairly limited API. Run the below to execute all tests. If you plan on contributing to the project please make sure to write new tests before writing new functional code.

```bash
node ./test.js
```

## Contributing

Please make a pull request or open a new issue with any concerns or recommendations. Pull requests are recommended and take priority. Please conform to the code style already present in the repository. Please write tests for all new code and improve tests and documentation where possible.

## License

This work is licensed under the Creative Commons Attribution-ShareAlike 4.0 International License. To view a copy of this license, visit [http://creativecommons.org/licenses/by-sa/4.0/deed.en_US](http://creativecommons.org/licenses/by-sa/4.0/deed.en_US.
