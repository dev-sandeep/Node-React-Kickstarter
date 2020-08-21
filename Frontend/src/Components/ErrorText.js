import React from 'react'

const ErrorText = (props)=>{
    return (
        <div className="error-text">
            <span className="error-msg">No data found :/</span>
            <p className={props.searchText.length > 0?'desc':'hidden'}>Try again with other keyword or refresh the page</p>
            <p className={props.searchText.length === 0?'desc':'hidden'}>The issue may be because of CORS, 
            You could download the following 
            &nbsp;<a rel="noopener noreferrer" target='_blank' href='https://chrome.google.com/webstore/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino?hl=en'>plugin</a>&nbsp; 
            to see data,<br/> While we are deploying this website on a server</p>
        </div>
    );
}
export default ErrorText;