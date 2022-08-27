import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface TransactionAttributes {
  id: number;
  transactionId?: string;
  transactionScreenShot?: string;
  metamaskId?: string;
  isTokenTransfered?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export type TransactionPk = "id";
export type TransactionId = Transaction[TransactionPk];
export type TransactionOptionalAttributes = "id" | "transactionId" | "transactionScreenShot" | "metamaskId" | "isTokenTransfered" | "createdAt" | "updatedAt";
export type TransactionCreationAttributes = Optional<TransactionAttributes, TransactionOptionalAttributes>;

export class Transaction extends Model<TransactionAttributes, TransactionCreationAttributes> implements TransactionAttributes {
  id!: number;
  transactionId?: string;
  transactionScreenShot?: string;
  metamaskId?: string;
  isTokenTransfered?: boolean;
  createdAt?: Date;
  updatedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof Transaction {
    return Transaction.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    transactionId: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    transactionScreenShot: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    metamaskId: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    isTokenTransfered: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'Transaction',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "Transaction_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
