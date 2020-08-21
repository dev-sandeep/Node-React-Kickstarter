import { useContext } from 'react';
import { BaseContext } from './BaseContext'

const UseBaseContext = () => {
    const [state, setState] = useContext(BaseContext);

    function setData(data, customDataObj) {
        setState(state => ({
            ...state, [customDataObj]: data
        }));
    }

    function getData(customDataObj) {
        return state[customDataObj];
    }
    return {
        setData,
        getData,
    }
}


export default UseBaseContext;