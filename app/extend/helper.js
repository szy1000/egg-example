'use strict';

const moment = require('moment');
const dayjs = require('dayjs');


// module.exports.relativeTime = time => moment(new Date(time * 1000)).fromNow();

module.exports = {
  relativeTime: time => moment(new Date(time * 1000)).fromNow(),

  base64: (str = '') => {
    return new Buffer(str).toString('base64');
  },

  time: () => dayjs().format('YYYY-MM-DD HH:mm:ss'),

  timestamp: date => new Date(date).getTime(),

  unPick: (source, arr) => {
    if (Array.isArray(arr)) {
      const obj = {};
      for (const i in source) {
        if (!arr.includes(i)) {
          obj[i] = source[i];
        }
      }
      return obj;
    }
  },
};
