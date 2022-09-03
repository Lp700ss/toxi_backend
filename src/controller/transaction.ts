import { Request, Response, NextFunction } from 'express';
import { sendResponse } from '../utils';
import { createLogObject, logger } from '../utils/logger';
import { fetchTransaction, transaction } from '../service/transaction';
// const fs = require('file-system');

export const createNewTransaction =async (req:Request, res:Response, next:NextFunction) => {
    try{

        const data = req.body
        const file: any = req.file

        if(!file || !data.transactionId || !data.metamaskId)
            sendResponse(res,400,false,'','Required Field Missing')

        const dataToSave = {
            transactionId: data.transactionId,
            transactionScreenShot: file.filename,
            metamaskId: data.metamaskId
        }

        const serviceData = await transaction(dataToSave)

        if(serviceData.status === true)
            return sendResponse(res,200,serviceData.status,serviceData.data,serviceData.error)

        return sendResponse(res, 500, false, '', 'Internal Server Error')

    }catch(error:any){
        logger.error(
            createLogObject('Error in creating transaction','Error in function createNewTransaction in controllers',error)
        );
        return sendResponse(res,500,false,'','Internal Server Error');
    }
}

export const getTransactionRecords =async (req:Request, res:Response, next:NextFunction) => {
    try{

        const tranasctionStatus: string = req.query.transactionStatus ? (req.query.transactionStatus).toString() : 'pending'

        const serviceData = await fetchTransaction(tranasctionStatus)

        if(serviceData.status === true)
            return sendResponse(res,200,serviceData.status,serviceData.data,serviceData.error)

        return sendResponse(res, 500, false, '', 'Internal Server Error')

    }catch(error:any){
        logger.error(
            createLogObject('Error in getTransactionRecords','Error in function getTransactionRecords in controllers',error)
        );
        return sendResponse(res,500,false,'','Internal Server Error');
    }
}