import * as gulp from 'gulp';
import gulpSass from 'gulp-sass';
import * as sass from 'sass';
const sassInstance = gulpSass(sass);

import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import postcss from 'gulp-postcss';
import sourcemaps from 'gulp-sourcemaps';

const { src, dest, watch, parallel } = gulp;

const paths = {
  scss: "src/sass/**/*.scss",
};

export function css() {
  return src(paths.scss)
    .pipe(sourcemaps.init())
    .pipe(sassInstance())
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write("."))
    .pipe(dest("src/css"));
}



export function watchArchivos() {
  watch(paths.scss, css);
}

export default parallel( css, watchArchivos);