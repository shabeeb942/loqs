function playVideoSlowStart() {
    let videos = document.querySelectorAll("video");
    videos.forEach((video) => {
        video.muted = true;
        video.play();

        // Slow start for the first 2 seconds
        video.playbackRate = 0.4; // Adjust the initial playback rate as needed (0.5 means half speed)
        setTimeout(() => {
            video.playbackRate = 1; // Return to normal speed after 2 seconds
        }, 2000); // 2000 milliseconds = 2 seconds
    });
}

// Start playing videos with a slow start for the initial 2 seconds
playVideoSlowStart();
