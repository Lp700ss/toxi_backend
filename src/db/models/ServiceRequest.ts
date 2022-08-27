import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ServiceRequestAttributes {
  id: number;
  customerName?: string;
  customerEmail?: string;
  customerPhone?: string;
  service?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export type ServiceRequestPk = "id";
export type ServiceRequestId = ServiceRequest[ServiceRequestPk];
export type ServiceRequestOptionalAttributes = "id" | "customerName" | "customerEmail" | "customerPhone" | "service" | "createdAt" | "updatedAt";
export type ServiceRequestCreationAttributes = Optional<ServiceRequestAttributes, ServiceRequestOptionalAttributes>;

export class ServiceRequest extends Model<ServiceRequestAttributes, ServiceRequestCreationAttributes> implements ServiceRequestAttributes {
  id!: number;
  customerName?: string;
  customerEmail?: string;
  customerPhone?: string;
  service?: string;
  createdAt?: Date;
  updatedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof ServiceRequest {
    return ServiceRequest.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    customerName: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    customerEmail: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    customerPhone: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    service: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ServiceRequest',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "ServiceRequest_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
