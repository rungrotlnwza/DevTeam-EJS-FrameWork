const path = require('path');
const livereload = require('livereload');
const expressLivereload = require('connect-livereload');
// const { log } = require('console');

module.exports = function setupLiveReload(app) {
    // console.log('hello world');
    if (process.env.LIVERELOAD === 'true') {
        const Server = livereload.createServer({
            exts: ['html', 'css', 'js', 'ejs'],
        });
        Server.watch([
            path.join(__dirname, '../')
        ])
        app.use(expressLivereload());
    }
}