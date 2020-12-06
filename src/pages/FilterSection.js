import React, { useState } from 'react';
import { useLocation, useHistory } from "react-router-dom";
import {useDevice} from '../customHooks';
import { ContainedButtons } from '../components';
import queryString from 'query-string';
import { constructUrl } from '../utils/helper';
import * as styles from './FilterSection.style';

const FilterSection = (props) => {
    const history = useHistory();
    const location = useLocation();
    const deviceType = useDevice();
    const [selectedButtonConfig, setSelectedButtonConfig] = useState({});
    const buttonCLickHandler = (id, filterName) => {
        let params = queryString.parse(location.search, { parseBooleans: true });
        params = { ...params, [filterName]: id };
        const newUrl = constructUrl('/', params);
        setSelectedButtonConfig({...params});
        history.push(newUrl);
    }

    const { sectionConfig: { sectionName, buttons, filterName } } = props;

    const style = styles[deviceType];

    return (
        <>

            <div style={style.text}>{sectionName}</div>
            <div style={style.button}>
            {buttons.map(({ label, id }) => {
            const isSelected = selectedButtonConfig[filterName]===id;
            return(
                <ContainedButtons style={{...style.ContainedButtons,background:isSelected ? "#7bba02" : "#c5e09b"}} label={label} key={id} onClick={() => buttonCLickHandler(id, filterName)} />
            )})}
            </div>
        </>
    )


}

export default FilterSection;