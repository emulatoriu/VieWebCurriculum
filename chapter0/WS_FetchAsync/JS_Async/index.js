const indexDict = [

    {
        quality: 'Good',
        bg_color: '#009966',
        max: 50,
        min: 0
    },
    {
        quality: 'Moderate',
        bg_color: '#ffde33',
        max: 100,
        min: 51
    },
    {
        quality: '	Unhealthy for Sensitive Groups',
        bg_color: '#ff9933',
        max: 150,
        min: 101
    },
    {
        quality: 'Unhealthy',
        bg_color: '#cc0033',
        max: 200,
        min: 151
    },
    {
        quality: 'Very Unhealthy',
        bg_color: '#660099',
        max: 300,
        min: 201
    },
    {
        quality: 'Hazardous',
        bg_color: '#7e0023',
        max: 1000,
        min: 301
    },


]
const apiPath = 'http://api.waqi.info/feed/', apiToken = '539cb1ae89de8446355e64865174e45b61d0d344';
const elementUserInput = document.getElementById('elementUserInput');


const fetchAirQualityIndex = async (cityName = "vienna") => {

    const url = apiPath + cityName + '?token=' + apiToken;
    //-----------------
    const res = await fetch(url)
    //-------------
    const jsonRes = await res.json()


    return jsonRes.data.aqi;

}
const renderCardData = (airQualityIndexData, cityName) => {
    console.log(airQualityIndexData, cityName)

    const elementLastUpdate = document.getElementById('elementLastUpdate');
    const elementCity = document.getElementById('elementCity');
    const elementIndex = document.getElementById('elementIndex');
    const elementQuality = document.getElementById('elementQuality');
    const elementIndexCard = document.getElementById('elementIndexCard');

    elementIndex.innerText = airQualityIndexData;
    elementCity.innerText = cityName;
    elementLastUpdate.innerText = Date(Date.now());

    const indexQuality = indexDict.find((obj) => {
        return obj.max >= airQualityIndexData && obj.min <= airQualityIndexData

    });
    elementQuality.innerText = indexQuality.quality;
    elementIndexCard.style.backgroundColor = indexQuality.bg_color;

}

const submitUserSearch = async (userInput) => {

    const indexNumber = await fetchAirQualityIndex(userInput.toLowerCase());

    renderCardData(indexNumber, userInput);


}


elementUserInput.onkeydown = (event) => {
    if (event.key === 'Enter') {        
        submitUserSearch(elementUserInput.value)
    }

}