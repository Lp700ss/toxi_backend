import { createLogObject, logger } from '../utils/logger';
import dotenv from 'dotenv';
import { serviceResponse } from '../utils';
import { createTransaction, getTransaction } from '../dao/transaction';
dotenv.config();

export const transaction = async (data: any) => {
    try{

        const dbResponse = await createTransaction(data)
        
        return serviceResponse(dbResponse.status,dbResponse.data,dbResponse.error)

    } catch(error: any){
        logger.error(
            createLogObject('Error in transaction','transaction',error)
        );
        return serviceResponse(false,{},error);

    }
}

export const fetchTransaction = async (tranasctionStatus: String) => {
    try{

        const dbResponse = await getTransaction(tranasctionStatus)
        
        return serviceResponse(dbResponse.status,dbResponse.data,dbResponse.error)

    } catch(error: any){
        logger.error(
            createLogObject('Error in transaction','transaction',error)
        );
        return serviceResponse(false,{},error);

    }
}