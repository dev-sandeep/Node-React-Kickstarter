/**
 * responsible for managing the shop data in the database
 * @author Sandeep G
 * @since 20200816
 */

const got = require('got');
const CircularJSON = require('circular-json');
const constants = require('../utility/constants');
/*************************************************************************/
/******************************* GET Call*********************************/
/*************************************************************************/
exports.get = function (req, resp) {
    let url = `https://newsapi.org/v2/top-headlines?apiKey=${process.env.KEY}&country=${constants.country}`;
    let query = req.params.query;
    if(query){
        url += '&q='+query;
    }
    got(url, { json: true })
    .then(response => {
        let json = CircularJSON.stringify(response.body);
        resp.send(json);
    })
    .catch(error => {
        console.log(error);
        resp.send(error);
    });
};