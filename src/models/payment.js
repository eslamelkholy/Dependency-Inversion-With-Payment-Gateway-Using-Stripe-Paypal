"use strict";
import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class payment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  payment.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
      },
      amount: DataTypes.INTEGER,
      userId: DataTypes.UUID,
    },
    {
      sequelize,
      modelName: "payment",
    }
  );
  return payment;
};
