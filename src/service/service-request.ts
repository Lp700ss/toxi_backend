import { createLogObject, logger } from '../utils/logger';
import dotenv from 'dotenv';
import { serviceResponse } from '../utils';
import { createServiceRequest } from '../dao/service-request';
dotenv.config();

export const serviceRequest = async (data: any) => {
    try{

        const dbResponse = await createServiceRequest(data)
        
        return serviceResponse(dbResponse.status,dbResponse.data,dbResponse.error)

    } catch(error: any){
        logger.error(
            createLogObject('Error in fetching serviceRequest','serviceRequest function in service',error)
        );
        return serviceResponse(false,{},error);

    }
}