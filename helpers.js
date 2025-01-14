var requestGithub = require('request');
var server = require('./server');

var helpers = {
    hook : function(user, repo, token){
        requestGithub.post({
             url: 'https://api.github.com/repos/' + user + '/' + repo + '/hooks',
             headers: {
                 'user-agent': user,
                 'Authorization': 'token ' + token
             },
             json: {
                 name: 'web',
                 config: {
                     url: 'http://c84a4901.ngrok.io/create'
                 },
                 events: ['issues']
             }},
             function(err, req, res){
                 if (err){
                     throw err;
                 }
                 return console.log('Hook added: ' + res);
             }
        );
    }
};

module.exports = helpers;
