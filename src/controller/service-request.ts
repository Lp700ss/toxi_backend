import { Request, Response, NextFunction } from 'express';
import { sendResponse } from '../utils';
import { createLogObject, logger } from '../utils/logger';
import { serviceRequest } from '../service/service-request';

export const newServiceRequest =async (req:Request, res:Response, next:NextFunction) => {
    try{

        const data = req.body

        const serviceData = await serviceRequest(data)

        if(serviceData.status === true)
            return sendResponse(res,200,serviceData.status,serviceData.data,serviceData.error)

        return sendResponse(res, 500, false, '', 'Internal Server Error')

    }catch(error:any){
        logger.error(
            createLogObject('Error in creating service request','Error in function newServiceRequest in controllers',error)
        );
        return sendResponse(res,500,false,'','Internal Server Error');
    }
}