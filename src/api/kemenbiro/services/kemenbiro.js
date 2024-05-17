'use strict';

/**
 * kemenbiro service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::kemenbiro.kemenbiro');
