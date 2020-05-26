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
        
        // Using axios library to fetch data from the JSON output
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

exports.checkstateaffected = async (req, res, next) => {
    try {
        
        // We are taking link from the user side.
        const statecode =  req.body.statecode;
        // Using axios library to fetch data from the JSON output
        const stateResponse = (
            await axios.get("https://api.covid19india.org/data.json")
        ).data.statewise;


        function find_in_object(my_object, my_criteria){
            // The filter() method creates an array filled with all array elements that pass a test (provided as a function).
            return my_object.filter(function(obj) {
            // The every() method checks if all elements in an array pass a test (provided as a function).
              return Object.keys(my_criteria).every(function(c) {
                return obj[c] == my_criteria[c];
              });
            });
          }

        // A common use of JSON is to exchange data to/from a web server.
        // When sending data to a web server, the data has to be a string.
        // Convert a JavaScript object into a string with JSON.stringify().
        var my_json = JSON.stringify(stateResponse)
        // The JSON.parse() method parses a string and returns a JavaScript object.
        // The string has to be written in JSON format.
        var filtered_json = find_in_object(JSON.parse(my_json), {statecode: statecode});
        
        const state = filtered_json[0].state;
        
        // For true and sucess response is 200
        // For failure the response can be passed 404 and status false 
        res.status(200).json({
            status: true,
            message : 'COVID19 '+state+' State Detail',
            state : state,
            data: filtered_json[0]
        });

    } catch (err) {
        next(err);
    }
};


// API list 
// https://api.covid19india.org/data.json
// https://api.covid19india.org/state_district_wise.json
// https://api.covid19india.org/states_daily.json
// https://api.covid19india.org/state_test_data.json
// https://api.covid19india.org/sources_list.json
// https://api.covid19india.org/zones.json

exports.checkdistrictaffected = async (req, res, next) => {
    try {
        
        // We are taking link from the user side.
        const statecode =  req.body.statecode;
        const districtname = req.body.districtname;
        // Using axios library to fetch data from the JSON output
        const stateResponse = (
            await axios.get("https://api.covid19india.org/state_district_wise.json")
        ).data;

        const stateResponseData = (
            await axios.get("https://api.covid19india.org/data.json")
        ).data.statewise;

        function find_in_object(my_object, my_criteria){
            // The filter() method creates an array filled with all array elements that pass a test (provided as a function).
            return my_object.filter(function(obj) {
            // The every() method checks if all elements in an array pass a test (provided as a function).
              return Object.keys(my_criteria).every(function(c) {
                return obj[c] == my_criteria[c];
              });
            });
          }

        var my_json = JSON.stringify(stateResponseData);
        var filtered_json = find_in_object(JSON.parse(my_json), {statecode: statecode});
        const state = filtered_json[0].state;

        const stateData = stateResponse[state];
        const districtData = stateData.districtData[districtname];


        // For true and sucess response is 200
        // For failure the response can be passed 404 and status false 
        res.status(200).json({
            status: true,
            message : 'COVID19 State Detail',
            stateName : state,
            districtName : districtname,
            data : districtData
        });

    } catch (err) {
        next(err);
    }
};