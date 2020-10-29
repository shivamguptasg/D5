import React, { useState } from 'react';
import MyAppContext from './myAppContext';

const MyAppProvider = ({ children }) => {
    const [netStatus, setNetStatus] = useState(false)
    return (
        <MyAppContext.Provider value={{ netStatus, setNetStatus }}>
            {children}
        </MyAppContext.Provider>
    );
}

export default MyAppProvider;  