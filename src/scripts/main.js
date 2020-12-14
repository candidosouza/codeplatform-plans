try {
    window.$ = window.jQuery = require('jquery');
    require('bootstrap');

    $(document).ready(function () {});
} catch (e) {
    console.log(e);
}
