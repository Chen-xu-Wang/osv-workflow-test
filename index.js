/**
 * Minimal demo entry — deps intentionally pinned to versions with published OSV advisories.
 */
const _ = require('lodash');
const axios = require('axios');

console.log('demo:', _.chunk([1, 2, 3, 4], 2));
axios.defaults.timeout = 5000;
