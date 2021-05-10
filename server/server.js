const dotenv = require('dotenv');

dotenv.config();
require('./helpers/db')();

/*
 * Server Start from here
 */
const app = require('./app');
const port = process.env.PORT || 3030;

app.listen(port, () => {
    console.log(`Server Listening on http://localhost:${port}`);
});
