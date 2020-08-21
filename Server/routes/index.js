/**
 * The main router
 * @author Sandeep G
 * @since 20200816
 */
const app = require('../app');
var newsMgmt = require('./news');

/**
 * Get API to load news
 */
app.get('/news', newsMgmt.get);
app.get('/news/:query', newsMgmt.get);