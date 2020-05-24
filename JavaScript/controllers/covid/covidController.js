const axios = require('axios')

function removeUnknown(e) {
    return e !== 'Unknown';
}

// Covid19 affected State and District list
exports.covidstatewise = async (req, res, next) => {
    try {
        
        const stateDistrictWiseResponse = (
            await axios.get('https://api.covid19india.org/state_district_wise.json')
        ).data;
        const states = Object.keys(stateDistrictWiseResponse).filter(removeUnknown);
        const result = {};
        states.map((stateName) => {
        result[stateName] = Object.keys(
            stateDistrictWiseResponse[stateName]['districtData']
        ).filter(removeUnknown);
        });
        res.status(200).json({
            status: true,
            message : 'State And District Covid Data',
            data: {
                data : result
            }
        });

    } catch (err) {
        next(err);
    }
};