'use strict';

module.exports = app => {
  const { STRING } = app.Sequelize;

  return app.model.define('hint', {
    label: {
      type: STRING,
      primaryKey: true,
    },
    hint: STRING,
  });
};

