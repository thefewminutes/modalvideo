$(document).ready(function() {
	$("#launcher").click(function() {
		$('#vidModal').modal({
			overlayClose:true,
			minHeight: 200,
			minWidth: 400,
			onOpen: function(dialog){
				dialog.overlay.fadeIn('slow', function () {
					dialog.data.hide();
					dialog.container.fadeIn('slow', function () {
						dialog.data.slideDown('slow');
					});
				});
			},
			onClose: function(dialog){
				dialog.data.slideUp('slow', function () {
					dialog.overlay.fadeOut('slow', function() {
						$.modal.close();
					})
				})
			}
		}); // modal
		return false;
	}); // launcher
});

//player
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
	player = new YT.Player('player', {
		height: '390',
		width: '640',
		videoId: 'BKPMnjWLLfk',
		events: {
			'onReady': onPlayerReady,
			'onStateChange': onPlayerStateChange
		},
		playerVars: { 'rel': 0 }
	});
}

function onPlayerReady(event) {
	event.target.playVideo();
}

function onPlayerStateChange(event) {
	if (event.data == YT.PlayerState.ENDED) {
		stopVideo();
	}
}
function stopVideo() {
	player.stopVideo();
	$.modal.close();
}
