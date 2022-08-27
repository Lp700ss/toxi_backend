import { dbModels } from '../utils/dbModels';
import { createLogObject, logger } from '../utils/logger';
import dotenv from 'dotenv';
import { daoResponse } from '../utils';
dotenv.config();

export const createTransaction =async (data:any) => {
    
    try{

        const dbResponse = await dbModels.Transaction.create({
            transactionId: data.transactionId,
            transactionScreenShot: data.transactionScreenShot,
            metamaskId: data.metamaskId
        })

        return daoResponse(true,dbResponse,'')

    }catch(error:any){
        
        logger.error(
            createLogObject('Error in creating transaction', 'createTransaction', error)
        )
        return daoResponse(false,'',error)
    }

}

export const getTransaction =async (tranasctionStatus: String) => {
    
    try{

        const dbResponse = await dbModels.Transaction.findAll({
            where: {
                isTokenTransfered: tranasctionStatus === 'paid' ? true : false
            }
        })

        return daoResponse(true,dbResponse,'')

    }catch(error:any){
        
        logger.error(
            createLogObject('Error in getTransaction', 'getTransaction', error)
        )
        return daoResponse(false,'',error)
    }

}