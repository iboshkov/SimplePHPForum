
window._ = require('lodash');

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

window.$ = window.jQuery = require('jquery');


window.angular = require('angular');
require("../../../semantic/dist/semantic");
require('moment');
require('angular-moment');
require('satellizer');
require('angular-loading-bar');
require('angular-ui-router');

// CKEditor
window.CKEDITOR_BASEPATH = '/ckeditor/';
require("../../../bower_components/ckeditor/ckeditor");
require("../../../bower_components/ckeditor/config");
require("../../../bower_components/ckeditor/lang/en");
require("../../../bower_components/ckeditor/styles");
require("../../../bower_components/angular-ckeditor/angular-ckeditor");
require("../../../bower_components/angular-breadcrumb/release/angular-breadcrumb.min");

/**
 * We'll register a HTTP interceptor to attach the "CSRF" header to each of
 * the outgoing requests issued by this application. The CSRF middleware
 * included with Laravel will automatically verify the header's value.


Vue.http.interceptors.push((request, next) => {
    request.headers.set('X-CSRF-TOKEN', Laravel.csrfToken);

    next();
});
 */


// Utils

// Clamp
(function(){Math.clamp=function(a,b,c){return Math.max(b,Math.min(c,a));}})();