const cors = require('cors')
const express = require('express');
const bussinessentityRoutes = require('../routers/bussinesEntityRouters');
const phonenumbertypeRoutes = require('../routers/phoneNumberTypeRouters');
const personphoneRoutes = require('../routers/personPhoneRouters');

const app = express();

app.use(cors());

app.use(express.json());

app.use('/api/bussinessentity', bussinessentityRoutes);
app.use('/api/phonenumbertype', phonenumbertypeRoutes);
app.use('/api/personphone', personphoneRoutes);

module.exports = app;