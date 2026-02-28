import multer from 'multer';
import {nanoid} from 'nanoid';

const storage = multer.diskStorage({
    destination: (_, _, cb) => cb(null, "./public/temp"),
    filename: (_, file, cb) => {
        const fid = nanoid();
        cb(null, file.fieldname+fid);
    }
});

const upload = multer({
    storage
});

export default upload;