export const sectionConfig = {
    launchYear: {
        sectionName: "Launch Year",
        buttons: [{
            id: '2006',
            label: '2006'
        }, {
            id: '2007',
            label: '2007'
        }, {
            id: '2008',
            label: '2008'
        }, {
            id: '2009',
            label: '2009'
        }, {
            id: '2010',
            label: '2010'
        }, {
            id: '2011',
            label: '2011'
        }, {
            id: '2012',
            label: '2012'
        }, {
            id: '2013',
            label: '2013'
        }, {
            id: '2014',
            label: '2014'
        }, {
            id: '2015',
            label: '2015'
        }, {
            id: '2016',
            label: '2016'
        }, {
            id: '2017',
            label: '2017'
        }, {
            id: '2018',
            label: '2018'
        }, {
            id: '2019',
            label: '2019'
        }, {
            id: '2020',
            label: '2020'
        }],
        filterName: 'launchYear'
    },
    sucessfulLaunch: {
        sectionName: "Successful Launch",
        buttons: [{ id: 'true', label: 'True' }, { id: 'false', label: 'False' }],
        filterName: 'sucessfulLaunch'
    },
    sucessfulLanding: {
        sectionName: "Successful Landing",
        buttons: [{ id: 'true', label: 'True' }, { id: 'false', label: 'False' }],
        filterName: 'sucessfulLanding'
    }

};

// used to construct URL in FilterSection.js
export const constructUrl = (baseUrl, params) => {
    const keys = Object.keys(params);
    return keys.reduce((prevValue, currentValue, idx) => {
        let str = idx ? `&${currentValue}=${params[currentValue]}` : `${currentValue}=${params[currentValue]}`;
        return `${prevValue}${str}`

    }, `${baseUrl}?`);

}

export const filterMapping = {
    launchYear: 'launch_year',
    sucessfulLanding: 'land_success',
    sucessfulLaunch: 'launch_success'

};

export const constructApiUrl = (baseUrl, params) => {
    const keys = Object.keys(params);
    return keys.reduce((prevValue, currentValue, idx) => {
        let str = `&${filterMapping[currentValue]}=${params[currentValue]}`;
        return `${prevValue}${str}`

    }, `${baseUrl}`);

}

export const baseUrl = 'https://api.spacexdata.com/v3/launches?limit=100';


