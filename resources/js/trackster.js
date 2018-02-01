
$("#submit").on('click', function() {
  Trackster.searchTracksByTitle($("#search").val())
});

const API_KEY = "92df8a1ac0ca58411cbfb52355f6bb45";








var Trackster = {};

/*
  Given an array of track data, create the HTML for a Bootstrap row for each.
  Append each "row" to the container in the body to display all tracks.
*/
Trackster.renderTracks = function(tracks) {

};

/*
  Given a search term as a string, query the LastFM API.
  Render the tracks given in the API query response.
*/
Trackster.searchTracksByTitle = function(title) {
$.ajax({
  url: "http://ws.audioscrobbler.com/2.0/?method=track.search&track=tiny&api_key=92df8a1ac0ca58411cbfb52355f6bb45&format=json",
})



};
