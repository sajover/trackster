var Trackster = {};
const API_KEY = '92df8a1ac0ca58411cbfb52355f6bb45';
$('#submit').on('click', function(){
  Trackster.searchTracksByTitle( $('#search').val());
});

/*
  Given an array of track data, create the HTML for a Bootstrap row for each.
  Append each "row" to the container in the body to display all tracks. el while lo he escrito a saco yo, hay que revisar
*/
Trackster.renderTracks = function(tracks) {
  var $tracklist = $('#tracks');
  for (var trackIndex = 0; trackIndex < tracks.length; trackIndex++) {
    var track = tracks[trackIndex];
    var mediumAlbumArt = track.image[1]["#text"];
    var htmlTrackRow ='<div class="row" id="tracks">' +
      '<div class="play-button col-md-1 col-md-offset-1">'+
        '    <a href="'+ track.url +'" target="_blank">' +
        '<i class="far fa-play-circle"></i></a>'+
      '</div>'+
      '<div class= "col-md-4">' + track.name +' </div>'+
      '<div class="col-md-2"> ' + track.artist +'</div>'+
      '<div class="col-md-2"> <img src="' + mediumAlbumArt + '"/> </div>'+
      '<div class="col-md-2">' + track.listeners +'</div>'+
    '</div>';
  $tracklist.append(htmlTrackRow);
  }
};
/*
  red .name .artist .listeners .url and .image comes from api request, it should match.
*/
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
