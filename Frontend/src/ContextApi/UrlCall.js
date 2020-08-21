import Axios from 'axios'
import UseBaseContext from './UseBaseContext'

function UrlCall() {
    const {
        setData
    } = UseBaseContext();
    
    const BASE_URL = 'http://localhost:3001/news';
   
    let url = BASE_URL;
    getCall(url);

    function getCall(url) {
        return new Promise((resolve, reject) => {
            Axios.get(url).then((promise) => {
                resolve(promise.data);
            },(e)=>{
                reject(e);
            });
        })
    };

    function getSearchResult(search){
        let url = BASE_URL+'/'+search;
        console.log(url);
        return new Promise((resolve, reject) => {
            getCall(url).then((data) => {
                if (data && data.articles) {
                    setData(data.articles, "news");
                    resolve(data.articles);
                }
            },(error)=>{
                reject(error);
            })
        });
    }

    /* the first call which the system would do */
    function defaultCall() {
        return new Promise((resolve, reject) => {
            getCall(BASE_URL).then((data) => {
                if (data && data.articles) {
                    setData(data.articles, "news");
                    resolve(data.articles);
                }
            },(error)=>{
                reject(error);
            })
        });
    }

    return {
        defaultCall,
        getSearchResult
    }
}

export default UrlCall;