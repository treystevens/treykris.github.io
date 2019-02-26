
// Contact Form validation
document.querySelector('.contact-form').addEventListener('submit', (evt) => {
    
    const contactName = document.getElementsByClassName('contact-field')[0];
    const contactEmail = document.getElementsByClassName('contact-field')[1];
    const contactMessage = document.querySelector('.contact-message');
    const contactError = document.querySelector('.contact-error');

    // Remove error message if present
    if(contactError) contactError.remove();
    

    if(contactName.value === '' || contactEmail.value === '' || contactMessage.value === '') {
        evt.preventDefault();

        // Create and show error message
        const errorMessage = document.createElement('div');
        const contactForm = document.querySelector('.contact-form');
        const contactLabel = document.querySelector('.contact-name__label');

        errorMessage.textContent = 'Please fill out all of the fields.';
        errorMessage.classList.add('contact-error');
        
        contactForm.insertBefore(errorMessage, contactLabel);
        return 1;
    
    }    
});

// Add mouse enter and mouse leave events to start and stop video
document.querySelectorAll('.project__media-container').forEach((project) => {
    
    project.addEventListener('mouseenter', (evt) => {
                const projectImg = evt.target.children[0];
                const projectVideo = evt.target.children[1];
                const videoPlay = evt.target.children[2];
                const projectImgRect = projectImg.getBoundingClientRect();
                const currentWidth = projectImgRect.width;
                
                if(videoPlay){
                    videoPlay.remove();
                }
                
                projectImg.style.display = 'none';
                projectVideo.style.display = 'block';
                projectVideo.style.width = currentWidth;
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


