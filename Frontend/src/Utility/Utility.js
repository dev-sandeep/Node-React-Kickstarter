import Axios from 'axios';

function getValueFromObj(array, val) {
    let res = array.find(item => (
        item.label === val
    ));

    if (res) {
        return res.val;
    } else {
        return 0
    }
}

function setEnviournmentNews() {
    // const { setNews } = UseBaseContext();
    const URL = {
        BASE: 'https://newsapi.org/v2/top-headlines',
        API_KEY: '0dc8ac7f0e564f7a98de3c56a0d9c640',
        COUNTRY: 'in',
        getDefaultUrl: function (country = this.COUNTRY) {
            return this.BASE + '?apikey=' + this.API_KEY + '&country=' + country;
        }
    };

    Axios.get(URL.getDefaultUrl()).then((promise) => {
        // setNews(promise.data.articles);
        console.log(promise.data.articles);
    }, function (e) {
        console.error(e);
    });
}


function limitString(string, limit) {
    return string.substring(string, limit);
}

export {
    getValueFromObj,
    setEnviournmentNews,
    limitString
}