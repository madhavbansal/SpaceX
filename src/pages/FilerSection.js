import React, { useState } from 'react';
import { useLocation, useHistory } from "react-router-dom";
import { ContainedButtons } from '../components';
import queryString from 'query-string';
import { constructUrl } from '../utils/helper';

const FilterSection = (props) => {
    const history = useHistory();
    const location = useLocation();
    const [selectedButtonConfig, setSelectedButtonConfig] = useState({});
    const buttonCLickHandler = (id, filterName) => {
        let params = queryString.parse(location.search, { parseBooleans: true });
        params = { ...params, [filterName]: id };
        const newUrl = constructUrl('/', params);
        setSelectedButtonConfig({...params});
        history.push(newUrl);
    }

    const { sectionConfig: { sectionName, buttons, filterName } } = props;

    return (
        <>

            {sectionName}
            {buttons.map(({ label, id }) => {
            const isSelected = selectedButtonConfig[filterName]===id;
            return(
                <ContainedButtons label={label} id={id} key={id} isSelected={isSelected} onClick={() => buttonCLickHandler(id, filterName)} />
            )})}
        </>
    )


}

export default FilterSection;