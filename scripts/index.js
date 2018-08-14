const desktopView = window.matchMedia('only screen and (min-width: 1024px)');


// Add mouse enter and mouse leave events to start and stop video
document.querySelectorAll('.project__media-container').forEach((project) => {
    

    project.addEventListener('mouseenter', (evt) => {
                
                const projectImg = evt.target.children[0];
                const projectVideo = evt.target.children[1];
                const videoPlay = evt.target.children[2];
                
                if(videoPlay){
                    videoPlay.remove();
                }
                
                const projectImgRect = projectImg.getBoundingClientRect();
                const currentWidth = projectImgRect.width;

                projectVideo.style.width = currentWidth;

                projectImg.style.display = 'none';
                projectVideo.style.display = 'block';

                projectVideo.play();

                if(projectVideo.ended){
                    projectVideo.currentTime = 0;
                }
        });    

});

document.querySelectorAll('.project__media-container').forEach((project) => {
    
    project.addEventListener('mouseleave', (evt) => {

            if(evt.target.className === 'project__media-container'){
                
                const projectImg = evt.target.children[0];
                const projectVideo = evt.target.children[1];
                
                projectImg.style.display = 'block';
                projectVideo.style.display = 'none';
                

                projectVideo.pause();
            }
        });

});

// Scroll just above hash location
window.addEventListener("hashchange", function () {
    window.scrollTo(window.scrollX, window.scrollY - 20);
  });

