async function getMatchData(){

    return await fetch("https://api.cricapi.com/v1/currentMatches?apikey=46f8b8e2-b2a4-4f49-b4aa-4ece0b14b94b&offset=0")

    .then(data => data.json())

    .then(data => {
        if (data.status != "success")return;

        const matchesList = data.data;

        if(!matchesList)return [];

        const relevantData = matchesList.map(match => `${match.name}, ${match.status}`); 

        console.log({relevantData});

        document.getElementById("matches").innerHTML = relevantData.map(match => `<li>${match} </li>`).join('');

        return relevantData;

    })
    .catch(e => console.log(e));
}
getMatchData();