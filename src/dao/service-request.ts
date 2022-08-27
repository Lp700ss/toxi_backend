import { dbModels } from '../utils/dbModels';
import { createLogObject, logger } from '../utils/logger';
import dotenv from 'dotenv';
import { daoResponse } from '../utils';
dotenv.config();

export const createServiceRequest =async (data:any) => {
    
    try{

        const dbResponse = await dbModels.ServiceRequest.create({
            customerName: data.customerName,
            customerEmail: data.customerEmail,
            customerPhone: data.customerPhone,
            service: data.service
        })

        return daoResponse(true,dbResponse,'')

    }catch(error:any){
        
        logger.error(
            createLogObject('Error in creating service request', 'createServiceRequest', error)
        )
        return daoResponse(false,'',error)
    }

}