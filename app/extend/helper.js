'use strict';

const moment = require('moment');

// module.exports.relativeTime = time => moment(new Date(time * 1000)).fromNow();

module.exports = {
  relativeTime: time => moment(new Date(time * 1000)).fromNow(),
};
