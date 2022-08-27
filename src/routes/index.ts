import { getBankDetails } from '../controller/bankDetails';
import express from 'express';
import validate from '../middlewares/schemaValidation';
import { createServiceSchema } from '../middlewares/schemaValidation/schemas';
import { newServiceRequest } from '../controller/service-request';
import { getTransactionRecords, createNewTransaction } from '../controller/transaction';

import multer from 'multer';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    
    filename: function (req: any, file: any, cb: any) {
        cb(null, file.originalname)
    }
});
const fileFilter = (req: any,file: any,cb: any) => {
    if(file.mimetype === "image/jpg"  || 
       file.mimetype ==="image/jpeg"  || 
       file.mimetype ===  "image/png"){
     
    cb(null, true);
   }else{
      cb(new Error("Image uploaded is not of type jpg/jpeg or png"),false);
   }
}

const upload = multer({storage: storage, fileFilter : fileFilter});

const router: express.Router = express.Router();

router.get('/api/bank-details',getBankDetails);
router.get('/api/getTransactions',getTransactionRecords);
router.post('/api/create-transaction', upload.single('transactionScreenShot') ,createNewTransaction);
router.post('/api/new-service-request',validate(createServiceSchema),newServiceRequest);

export default router;