import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from "react-router-dom";
import queryString from 'query-string';
import { constructApiUrl, baseUrl } from '../utils/helper';


const useLaunchData = () => {
    const location = useLocation();
    let params = queryString.parse(location.search, { parseBooleans: true });
    const newUrl = constructApiUrl(baseUrl, params);

    
    const [options, setOptions] = useState({ loading: true, error: false, data: [] });


    useEffect(() => {
        axios.get(newUrl).then((response) => {
            const { data = [] } = response || {};
            setOptions({ loading: false, error: false, data });
        })
            .catch(error => {
                console.log(error);
                setOptions({ loading: false, error: true, data: [] });
            });
    }, [newUrl]);
    return options;
}

export default useLaunchData;
