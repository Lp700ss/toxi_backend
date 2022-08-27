import type { Sequelize } from "sequelize";
import { SequelizeMeta as _SequelizeMeta } from "./SequelizeMeta";
import type { SequelizeMetaAttributes, SequelizeMetaCreationAttributes } from "./SequelizeMeta";
import { ServiceRequest as _ServiceRequest } from "./ServiceRequest";
import type { ServiceRequestAttributes, ServiceRequestCreationAttributes } from "./ServiceRequest";
import { Transaction as _Transaction } from "./Transaction";
import type { TransactionAttributes, TransactionCreationAttributes } from "./Transaction";

export {
  _SequelizeMeta as SequelizeMeta,
  _ServiceRequest as ServiceRequest,
  _Transaction as Transaction,
};

export type {
  SequelizeMetaAttributes,
  SequelizeMetaCreationAttributes,
  ServiceRequestAttributes,
  ServiceRequestCreationAttributes,
  TransactionAttributes,
  TransactionCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const SequelizeMeta = _SequelizeMeta.initModel(sequelize);
  const ServiceRequest = _ServiceRequest.initModel(sequelize);
  const Transaction = _Transaction.initModel(sequelize);


  return {
    SequelizeMeta: SequelizeMeta,
    ServiceRequest: ServiceRequest,
    Transaction: Transaction,
  };
}
