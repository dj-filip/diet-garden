const multer = require('multer');
const path = require('path');

const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('cloudinary').v2;

const storage = (folder) => new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
    const fileName = file.originalname.split('.')[0];
    return {
      folder: `Diet Garden/${folder}`, // Set the folder name in Cloudinary
      allowed_formats: ['jpg', 'jpeg', 'png'], // Optional: Restrict formats if needed
      public_id: `${fileName}-${Date.now()}`  // Generate unique public_id
    };
  }
});


exports.groceryUpload = multer({ storage: storage('groceries') });
exports.mealUpload = multer({ storage: storage('meals') });


// const storage = (folder) => multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, `uploads/images/${folder}/`);
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
//   }
// });