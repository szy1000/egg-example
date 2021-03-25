'use strict';

module.exports = app => {
  const { STRING, INTEGER } = app.Sequelize;

  return app.model.define('user', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: STRING(20),
    pwd: STRING(20),
  });
};

