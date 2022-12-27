(async () => {
    const src = chrome.extension.getURL('src/js/content_main.js');
    const contentScript = await import(src);
    contentScript.main(/* chrome: no need to pass it */);
  })();

// // change so only runs on geoguessr

// function getGoogleMapsLink () {
//     const raw = document.querySelectorAll("#__NEXT_DATA__")[0].text;
//     const json = JSON.parse(raw);
//     const curRound = json.props.pageProps.game.round - 1;
//     const curRoundData = json.props.pageProps.game.rounds[curRound];
//     return "https://google.com/maps/place/" + curRoundData.lat + "," + curRoundData.lng;
// }


// gmapsLink = getGoogleMapsLink();
// console.log(gmapsLink);