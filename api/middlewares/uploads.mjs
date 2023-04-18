import multer from "multer"
const upload = multer({ dest: 'uploads/' })
import User from "../models/User.mjs";

const fileUpload = async (req, res, next) => {
  const {profileImg } = req.body;
  const user = await User.findOne({ _id: req.user.userId });
  
upload.single('file')
const {originalname, path} = req.file
const parts = originalname.split('.')
const ext = parts[parts.length - 1]
const newPath = path + '.' + ext
fs.renameSync(path, newPath)

 (user.profileImg = newPath);
console.log("fileupload");
next();
}


export default fileUpload