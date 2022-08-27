import { createLogObject, logger } from '../utils/logger';
import dotenv from 'dotenv';
import { serviceResponse } from '../utils';
dotenv.config();

export const bankDetails = async () => {
    try{

        const bankData = {
            account_number: process.env.ACCOUNT_NO,
            bank_name: process.env.BANK_NAME,
            account_type: process.env.ACCOUNT_TYPE,
            ifsc: process.env.IFSC,
            upi_id: process.env.UPI
        };

        return serviceResponse(true,bankData,'');

    } catch(error: any){
        logger.error(
            createLogObject('Error in fetching bankdetails','bankDetails function in service',{error})
        );
        return serviceResponse(false,{},error);

    }
}