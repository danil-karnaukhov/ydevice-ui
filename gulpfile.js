import { deleteAsync } from 'del'
import { dest, parallel, series, src } from 'gulp'
import babel from 'gulp-babel'
import plumber from 'gulp-plumber'
import replace from 'gulp-replace'
import gulpSass from 'gulp-sass'
import ts from 'gulp-typescript'
import fs from 'node:fs'
import * as dartSass from 'sass'

const BUILD_DIR = 'build'

const TS_SOURCES = ['src/**/*.{ts,tsx}', '!src/**/*.stories.*']

const BABEL_CONFIG = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        targets: { browsers: ['> 1%', 'last 2 versions', 'not dead'] },
      },
    ],
    ['@babel/preset-react', { runtime: 'automatic' }],
    '@babel/preset-typescript',
  ],
}

const tsProject = ts.createProject('tsconfig.build.json')
const sass = gulpSass(dartSass)

const removeBuildDir = () => {
  return deleteAsync(BUILD_DIR)
}

const js = () => {
  return src(TS_SOURCES).pipe(plumber()).pipe(babel(BABEL_CONFIG)).pipe(dest(BUILD_DIR))
}

const declarations = () => {
  return src(['global.d.ts', ...TS_SOURCES])
    .pipe(plumber())
    .pipe(tsProject())
    .pipe(dest(BUILD_DIR))
}

const replaceScssImports = () => {
  return src([`${BUILD_DIR}/**/*.js`, `${BUILD_DIR}/**/*.d.ts`])
    .pipe(replace(/import\s+['"]([^'"]*?)\.scss['"]/g, "import '$1.css'"))
    .pipe(dest(BUILD_DIR))
}

const css = () => {
  return src('./src/**/*.{css,scss}').pipe(plumber()).pipe(sass()).pipe(dest(BUILD_DIR))
}

const copyFonts = () => {
  return src('./src/fonts/*.{otf,ttf,woff,woff2}', { encoding: false })
    .pipe(plumber())
    .pipe(dest(`${BUILD_DIR}/fonts`))
}

const preparePackageJson = (done) => {
  const packageJson = JSON.parse(fs.readFileSync('package.json'))
  const fieldsToDelete = ['scripts', 'devDependencies']

  fieldsToDelete.forEach((field) => delete packageJson[field])

  fs.writeFileSync(`${BUILD_DIR}/package.json`, JSON.stringify(packageJson, null, 2))

  done()
}

export const build = series(
  removeBuildDir,
  parallel(js, declarations),
  replaceScssImports,
  parallel(css, copyFonts, preparePackageJson),
)
