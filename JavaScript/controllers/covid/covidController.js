// Importing Axios for HTTP requests
const axios = require('axios')

// Removing the unknown data from the API filteration
function removeUnknown(e) {
    return e !== 'Unknown';
}

// Fetch data of Covid19 affected State and District list
// Display data in JSON format File as response
exports.covidstatewise = async (req, res, next) => {
    try {
        
        // We are taking link from the user side.
        // This is to check how passing parameters work in NodeJS
        const link =  req.body.link;
        // Using axios library to fetch data from the JSON output
        const stateDistrictWiseResponse = (
            await axios.get(link)
        ).data;
        const states = Object.keys(stateDistrictWiseResponse).filter(removeUnknown);
        const result = {};
        states.map((stateName) => {
        result[stateName] = Object.keys(
            stateDistrictWiseResponse[stateName]['districtData']
        ).filter(removeUnknown);
        });

        // For true and sucess response is 200
        // For failure the response can be passed 404 and status false 
        res.status(200).json({
            status: true,
            message : 'COVID State And District Data list',
            data: {
                data : result
            }
        });

    } catch (err) {
        next(err);
    }
};