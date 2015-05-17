(function(){
    'use strict';

    var apiRouter = {

            url: {
                protocol: 'https',
                host: 'exsharer-api.herokuapp.com'
            },
            route: function(path){
                var url = this.url;
                return '{0}://{1}/{2}'.format(url.protocol, url.host, path);
            },
            id: function(url, id){
                return '{0}/{1}'.format(url, id);
            }
    };

    var api = {
        // Root: Url id
        id: apiRouter.id,

        // Auth module
        token: apiRouter.route('auth/token'),

        // Project module
        project: apiRouter.route('projects')
    };

    angular
        .module('exsharer')
        .constant('api', api)
})();
