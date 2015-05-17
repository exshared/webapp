(function(){
    'use strict';

    angular
    .module('exsharer')
    .constant(
        'headers', {
            urlencoded: 'application/x-www-form-urlencoded',
            json: 'application/json',
            authorization: function(t, k) { return '{0} {1}'.format(t, k) }
        }
    )
    .constant(
        'tokens', {
            client: 'alv9183kvl',
            user: '6lv91k2vc5'
        }
    )
    .constant(
        'access', {
            client: {
                "__v": 0,
                "name": "web",
                "description": "Web Client",
                "_id": "55584f576f416b9503f449b2",
                "created": "2015-05-17T08:20:39.340Z",
                "secret": "eXISsE6kEwuAQZVBe+GSs/E9pB6TjThbghyvwtixf6sS7kbAVLaPpnTF9RLgp743aH8XP62OxG4q1FhEntQh7w==",
                "id": "NOTgK9szOPIgojbqwSIcbgJaBMMtw3tbVT1+loO3z2AJIW7s09rsOGqU3pFUmMrwDPYISZ3V+6otq1RyXTFvuQ=="
            },
            password: function(user, password){

                return {
                    grant_type: 'password',
                    username: user,
                    password: CryptoJS.SHA1(password).toString()
                }
            },
            refresh: function(refresh_token){

                return  {
                    grant_type: 'refresh_token',
                    refresh_token: refresh_token
                }

            }
        }
    );

})()
