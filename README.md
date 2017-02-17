## My Gulp 101

- Konfiguracja środowiska do pracy z HTML5+CSS3+JavaScript.
  * [Atom](https://atom.io) – a hackable text editor for the 21st Century.
    - [Atom Flight Manual](https://atom.io/docs/latest/) – the latest version
    - [Keyboard shortcuts](https://github.com/nwinkler/atom-keyboard-shortcuts)
  * [Gulp](http://gulpjs.com) – a toolkit for automating painful or
    time-consuming tasks in your development workflow, so you can stop
    messing around and build something.
    - Callum Macrae, [Building With Gulp](https://www.smashingmagazine.com/2014/06/building-with-gulp/)
    - Mark Goodyear, [Getting started with Gulp](https://markgoodyear.com/2014/01/getting-started-with-gulp/)
  * [Slack](https://slack.com) – where work happens.
    - [Getting Started](https://get.slack.help/hc/en-us/categories/202622877-Slack-Guides)

Zainstaluj [node](https://nodejs.org/en/). Następnie ww tym katalogu wykonaj
te polecenia:

```sh
npm install -g gulp
npm init
npm install --save-dev gulp # npm i -D gulp

npm ls graceful-fs # ?
```

### HTML5 + CSS3 + ES6

Zmodyfikowany przykład z bloga J. Rexroad, [Automate Your Tasks Easily with Gulp.js](https://scotch.io/tutorials/automate-your-tasks-easily-with-gulp-js).

```sh
mkdir -p src/{javascript,scss}
touch src/javascript/main.js
touch src/scss/style.scss
# optional
mkdir -p dist/assets/{stylesheets,javascript/vendor}
touch dist/assets/javascript/bundle.js
touch dist/assets/stylesheets/style.css
```

Zaczynamy.

```sh
npm install --save-dev jshint gulp-jshint jshint-stylish
```



### Uruchamiamy stronę na GitHub

```sh
rename dist docs # ?
```


### Uruchamiamy stronę na Firebase

TODO
