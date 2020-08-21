import React, { useState } from 'react';

const BaseContext = React.createContext([{}, () => { }]);

const BaseContextProvider = (props) => {
    const [state, setState] = useState({
        movies: [],//all the movies
        show: [],//currently shown movies
        filter: [],
        search: '',
    });

    return (
        <BaseContext.Provider value={[state, setState]}>
            {props.children}
        </BaseContext.Provider>
    );
};

export { BaseContext, BaseContextProvider };