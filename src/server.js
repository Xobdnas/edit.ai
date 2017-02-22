require('ignore-styles');
const server = require('./core/server');

server.listen(3000, () => {
    console.log('App listening on port 3000!')
});
