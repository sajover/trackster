var Trackster = {};
const API_KEY = '92df8a1ac0ca58411cbfb52355f6bb45'; // API KEY extracted from Lastfm //
$('#submit').on('click', function(){
  Trackster.searchTracksByTitle( $('#search').val());
}); // This function tells that everytime #submit is clicked a function runs, looks up for the song written on search on AJAX function below //

/*
  Given an array of track data, create the HTML for a Bootstrap row for each.
  Append each "row" to the container in the body to display all tracks.
*/
Trackster.renderTracks = function(tracks) {
  var $tracklist = $('#tracks'); // identifies the id of the row where info will be displayed //
  for (var trackIndex = 0; trackIndex < tracks.length; trackIndex++) { // loop that starts at 0 and ends with the total lenght of the search, adds 1  //
    var track = tracks[trackIndex]; // variable that identifies the tracks and come from Last FM API //
    var mediumAlbumArt = track.image[1]["#text"]; // as img is nested, is better to have it outside //
    var htmlTrackRow ='<div class="row" id="tracks">' + // we buil this on html and then paste it here and do the modifications //
      '<div class="play-button col-md-1 col-md-offset-1">'+
        '    <a href="'+ track.url +'" target="_blank">' +
        '<i class="far fa-play-circle"></i></a>'+
      '</div>'+
      '<div class= "col-md-4">' + track.name +' </div>'+
      '<div class="col-md-2"> ' + track.artist +'</div>'+
      '<div class="col-md-2"> <img src="' + mediumAlbumArt + '"/> </div>'+
      '<div class="col-md-2">' + track.listeners +'</div>'+
    '</div>';
  $tracklist.append(htmlTrackRow); // this allow us to print the output //
  }
};

  //  On red= .name .artist .listeners .url and .image come from api request, it should match //
/*
  Given a search term as a string, query the LastFM API.
  Render the tracks given in the API query response.
*/
Trackster.searchTracksByTitle = function(title) {
  $.ajax({
    url:'http://ws.audioscrobbler.com/2.0/?method=track.search&track=' + title + '&api_key=' + API_KEY + '&format=json',
    type: 'GET',
    dataType:'json',
    success(response) {
      Trackster.renderTracks(response.results.trackmatches.track);
    },
    error(jqXHR, status, errorThrown){
      console.log(jqXHR)
    }
  })
};

  //  On red= response .results .trackmatches .track come from api request, it should match //
