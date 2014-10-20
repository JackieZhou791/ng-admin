define(function(require) {
    "use strict";

    require('nprogress');

    /**
     * Display loader on each route change
     *
     * @param {$rootScope} $rootScope
     * @param {$window} $window
     */
    function loader($rootScope, $window, progress) {
        $rootScope.$on('$stateChangeStart', function() {
            progress.start();
            $window.scrollTo(0, 0);
        });

        $rootScope.$on('$stateChangeSuccess', progress.done.bind(progress));
    }

    loader.$inject = ['$rootScope', '$window', 'progress'];

    return loader;
});
