var express = require('express'), 
    http = require('http'),
    path = require('path'),
    os = require('os'),
    Q = require('q');

Q(express())
.then(function setEnv(app){
    app.set('port', process.env.PORT || 3000);
    app.set('reload port', process.env['npm_package_config_reload_port'] || 35729);
    return app;
})
.then(function configView(app){
    app.set('views', path.join(__dirname, 'app/jade'));
    app.set('view engine', 'jade');
    return app;
})
.then(function configAssets(app){
    app.use(express.static(__dirname + '/app/assets'));
    return app;
})
.then(function configLess(app){
    app.use(require('less-middleware')({ 
        src: __dirname + '/app/src'
    }));
    app.use(express.static(__dirname + '/app/src'));
    return app;
})
.then(function configReload(app){
    app.configure('development', function() {
      console.log('configuring development mode');
      app.use(require('connect-livereload')({
        port: app.get('reload port'),
        excludeList: ['.woff', '.flv']
      }));
    });
    return app;
})
.then(function configRoutes(app){
    app.use(app.router);
    app.get('/',function(req, res){
        res.render('index', { title: 'Home' });
    });
    app.get('/templates/:template', function(req, res){
        var tmplt = path.basename(req.params.template, '.html');
        console.log('template', tmplt);
        res.render('templates/' + tmplt, req.query);
    });
    return app;
})
.then(function startServer(app){
    http.createServer(app).listen(app.get('port'), function(){
      console.log('Express server started http://localhost:' + app.get('port'));
      console.log('Livereload on port: ', app.get('reload port'));
    });
    return app;
}, function serverError(e){
    console.error("Error starting the server: " + e);
})
;







