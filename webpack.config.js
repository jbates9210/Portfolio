var path = require('path');

module.exports = {
    entry: './docs/assets/scripts/app.js',
    output: {
        path: path.resolve(__dirname, './docs/temp/scripts'),
        filename: 'app.js'
    }
}