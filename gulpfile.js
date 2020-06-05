const { series, src, dest } = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const inject = require('gulp-inject-string');
const replace = require('gulp-replace');
const rename = require("gulp-rename");
const through2 = require('through2');



function build() {
  return src('index.js')
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(dest('dist'));
}

function encodeURI(file, _, cb) {
  if (file.isBuffer()) {
    file.contents = Buffer.from(encodeURIComponent(file.contents.toString()));
  }
  cb(null, file);
}

function bookmarklet() {
  return src('dist/index.js')
    .pipe(through2.obj(encodeURI))
    .pipe(inject.prepend('javascript:(function(){'))
    .pipe(inject.append('})();'))
    // .pipe(replace(/!/, '('))
    // .pipe(replace(/\(\);$/g, ')();'))
    .pipe(rename('bookmarklet.js'))
    .pipe(dest('dist'));

}

exports.build = build;
exports.default = series(build, bookmarklet);