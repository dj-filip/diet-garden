const express = require('express');
const router = express.Router();

const { addGrocery, getGroceries } = require("../controllers/groceries.controllers");
const { groceryUpload } = require('../middlewares/uploadMiddleware');


router.post('/addGrocery', groceryUpload.single('image'), addGrocery);
router.get('/getGroceries', getGroceries);

module.exports = router;