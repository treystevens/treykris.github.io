const desktopView = window.matchMedia('only screen and (min-width: 1024px)');


// Change demo information to tap and add click event to project image for mobile devices
if(!desktopView.matches){


    document.querySelectorAll('.project__media-container').forEach((project) => {


    document.querySelector('.projects-demo-info').textContent = 'Tap on project image to see demo';

    project.addEventListener('click', (evt) => {

        let projectImg = evt.target.children[0];
        let projectVideo = evt.target.children[1];
                
        let projectImgRect = projectImg.getBoundingClientRect();
        let currentWidth = projectImgRect.width;

        projectVideo.classList.toggle('show');

        if(projectVideo.classList.contains('show')){
            projectVideo.play();
        }
        else{
            projectVideo.pause();
        }

        projectVideo.style.width = currentWidth;


        if(projectVideo.ended){
            projectVideo.currentTime = 0;
        }
        });

    });

    // Scroll just above hash location
    window.addEventListener("hashchange", function () {
    window.scrollTo(window.scrollX, window.scrollY - 80);
    });
  

}

// Add mouse enter and mouse leave events to start and stop video
document.querySelectorAll('.project__media-container').forEach((project) => {
    

    project.addEventListener('mouseenter', (evt) => {


            console.dir(evt.target);

            if(evt.target.className === 'project__media-container'){
                
                let projectImg = evt.target.children[0];
                let projectVideo = evt.target.children[1];
                
                let projectImgRect = projectImg.getBoundingClientRect();
                let currentWidth = projectImgRect.width;

                projectVideo.style.width = currentWidth;

                projectImg.style.display = 'none';
                projectVideo.style.display = 'block';

                projectVideo.play();
            
            
            

                if(projectVideo.ended){
                    projectVideo.currentTime = 0;
                }
            }
            

            console.log('we entered');
        });

});

document.querySelectorAll('.project__media-container').forEach((project) => {
    

    project.addEventListener('mouseleave', (evt) => {

            if(evt.target.className === 'project__media-container'){
                console.dir(evt.target);
                let projectImg = evt.target.children[0];
                let projectVideo = evt.target.children[1];
                
                projectImg.style.display = 'block';
                projectVideo.style.display = 'none';
                

                projectVideo.pause();
                projectVideo.currentTime = 0;
            }
            


        });

});

// Scroll just above hash location
window.addEventListener("hashchange", function () {
    window.scrollTo(window.scrollX, window.scrollY - 40);
  });

