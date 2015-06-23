var handlers = require('./handlers.js');
var routes = [
  {
    method: 'GET',
    path: '/static/{path*}',
    handler:  {
      directory: {
        path: './'
      }
    }
  },

  {
  	path: '/dashboard',
  	method: 'GET',
  	handler: handlers.dashboard
  },

  {
  	path: '/public/{path*}',
  	method: 'GET',
  	handler: {
        directory: {
            path: './public'
        }
    }
 },

 {
     method: 'GET',
     path: '/',
     config: {
         auth: {
             mode: 'try',
             strategy: 'session'
         },
         handler: handlers.main
     }
 },

 {
     path: '/issues',
     method: 'GET',
     config: {
         auth: {
             mode: "try",
             strategy: "session"
         },
         handler: handlers.issues
     }
 },

 {
     method: 'GET',
     path: '/login',
     config: {
         auth: 'github',
         handler: handlers.login
     }
 },

];

module.exports = routes;
