const multer = require('multer');
const path = require('path');


const storage = (folder) => multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, `uploads/images/${folder}/`);
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});


exports.groceryUpload = multer({ storage: storage('groceries') });
exports.mealUpload = multer({ storage: storage('meals') });