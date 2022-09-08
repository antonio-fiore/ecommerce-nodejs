const express= require('express')
const app = express();
//CONFIG APP
require('./config/db.config');
app.use(express.json());

//Routes
const userAPI = require('./user/user.route');


app.use('/api/v1/user', userAPI);

app.listen(3000);