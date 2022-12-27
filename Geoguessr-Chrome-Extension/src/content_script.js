// change so only runs on geoguessr

function getGoogleMapsLink () {
  const raw = document.querySelectorAll("#__NEXT_DATA__")[0].text;
  const json = JSON.parse(raw);
  const curRound = json.props.pageProps.game.round - 1;
  const curRoundData = json.props.pageProps.game.rounds[curRound];
  return `https://maps.google.com/maps?q=${curRoundData.lat},${curRoundData.lng}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
}


function sendGmapsLink() {
  chrome.runtime.sendMessage({gmapsLink: getGoogleMapsLink()}, function(response) {
    console.log(response.farewell);
  });
}

sendGmapsLink();
