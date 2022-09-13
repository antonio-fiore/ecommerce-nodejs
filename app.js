const express= require('express')
const app = express();
//CONFIG APP
require('./config/db.config');
app.use(express.json());

//Routes
const userAPI = require('./user/user.route');
const productAPI = require('./product/product.route')

app.use('/api/v1/user', userAPI);
app.use('/api/v1/product', productAPI)

app.listen(3000);