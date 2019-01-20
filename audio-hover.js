	var $music = $('#music');
	var $audioPlayer = $('#audio-player');

	$audioPlayer.on('mouseenter', function (){
		$music.get(0).play();

	});

	$audioPlayer.on('mouseout', function (){
		$music.get(0).pause();

	});
