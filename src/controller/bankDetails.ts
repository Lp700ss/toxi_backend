import { Request, Response, NextFunction } from 'express';
import { sendResponse } from '../utils';
import { bankDetails } from '../service/bankDetails';
import { createLogObject, logger } from '../utils/logger';

export const getBankDetails =async (req:Request, res:Response, next:NextFunction) => {
    try{

        const bankData = await bankDetails();

        if(bankData.status === true){
            return sendResponse(res,200,true,bankData.data,'')
        };

        return sendResponse(res,500,false,'','Internal Server Error');

    }catch(error:any){
        logger.error(
            createLogObject('Error in fetching bankDetails','Error in function getBankDetails in controllers',error)
        );
        return sendResponse(res,500,false,'','Internal Server Error');
    }
}