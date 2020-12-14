let mix = require('laravel-mix');

mix
    .js('./src/scripts/main.js', './public/statics/js')
    .sass('./src/styles/scss/main.scss', './public/statics/css')
    .options({
        processCssUrls: false,
    })
    .copy('./src/img', './public/statics/img');


if (mix.inProduction()) {
    mix.version();
} else {
    mix.sourceMaps();
};
