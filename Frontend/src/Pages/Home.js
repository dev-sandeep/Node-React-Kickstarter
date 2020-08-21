import React, { useEffect, useState } from 'react'
import UseBaseContext from './../ContextApi/UseBaseContext'
import UrlCall from '../ContextApi/UrlCall'
import CardNews from './../Components/CardNews'
import ErrorText from './../Components/ErrorText'
import { Container, Row, Col } from 'reactstrap';

/**
 * based on props.number decide which of the column to show
 * @param {} props 
 */
const CardColumn = (props)=>{
    return (<>
        {
            props.resources.map((data, i)=>(
                    <CardNews 
                        key={i}
                        className={i%3 !== props.number?'hidden':''}//hiding based on condition
                        title={data.title}
                        description={data.description}
                        image={data.urlToImage}
                        url={data.url}
                        source={data.source.name}
                        time={data.publishedAt} />
            ))
        }
        </>);
}

function Home() {
    /* get the context instance */
    const { getData } = UseBaseContext();
    const { defaultCall, getSearchResult } = UrlCall();
    
    const [col1, setCol1] = useState([]);
    const [col2, setCol2] = useState([]);
    const [col3, setCol3] = useState([]);
    const [searchText, setSearchText] = useState('');

    const [loader, setLoader] = useState(false);
    const [isError, setIsError] = useState(false);
    //one time load or when there is a change in search value
    useEffect(()=>{
        let searchTerm = getData("search");
        setSearchText(searchTerm);
        setLoader(true);
        //when there is no search term, simply load everything
        if(searchTerm.length === 0 || col1.length === 0){
            defaultCall().then((resp)=>{
                setColData(resp);
                setLoader(false);
            }, (e)=>{
                setLoader(false);
                setIsError(true);
            });
            //responsible for loading the results with the search terms
        }else if(searchTerm){
            getSearchResult(searchTerm).then((resp)=>{
                setColData(resp);
                setLoader(false);
            }, (e)=>{
                setLoader(false);
                setIsError(true);
            });
        }    
    }, [getData("search")]);

    //dividing the data in to 3 different columns
    const setColData = (data)=>{
        if(data.length === 0){
            setIsError(true);
        }else{
            setIsError(false);
        }

        let arr1 = [], arr2 = [], arr3 = [];
        for(let i = 0; i < data.length; i++){
            if(i % 3 === 0){
                arr1.push(data[i])
            }else if(i % 3 === 1){
                arr2.push(data[i])
            }else{
                arr3.push(data[i])
            }
        }

        setCol1(arr1);
        setCol2(arr2);
        setCol3(arr3);
    }

    /* all of the maon content goes here  */
    return (
        <section className="home-page m-top-3">
            <div className={loader?'loader':'hidden'}>Loading...</div>
            <div className="row1 ov-y-hide">
                <div className="container">
                    <Container>
                        <Row>
                            <Col className={isError && !loader?'':'hidden'} lg={12} md={12} sm={12} xs={12}>
                                <ErrorText searchText={searchText} />
                            </Col>

                            {/* column 1 */}
                            <Col lg={4} md={4} sm={6} xs={12}>
                                <CardColumn resources={col1} />
                            </Col>
                            {/* column 2 */}
                            <Col lg={4} md={4} sm={6} xs={12}>
                                <CardColumn resources={col2} />
                            </Col>
                            {/* column 3 */}
                            <Col lg={4} md={4} sm={6} xs={12}>
                                <CardColumn resources={col3} />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </section>
    );
}

export default Home;