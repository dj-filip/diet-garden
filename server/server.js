const express = require('express');
const cors = require('cors');
const router = require('./routes/router');
const mongoose = require('mongoose');

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/uploads', express.static('uploads'));

const corsOptions = {
  origin: '*',
  credentials: true,
  optionSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use('/', router);

const port = 4000;


mongoose.connect('mongodb+srv://admin:root@dietgardencluster.tgwtc.mongodb.net/dietgardendb?retryWrites=true&w=majority&appName=DietGardenCluster').then(() => {
  console.log('connected to MongoDB');
  const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  })
}).catch((error) => {
  console.log(error);
});