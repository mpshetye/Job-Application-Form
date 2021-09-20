const lightbox = document.createElement('div');
// lightbox.id = 'lightbox';
document.body.appendChild(lightbox);
lightbox.classList.add('lightbox');

const aTag = document.getElementById('a');
const image = document.getElementById('img');
aTag.addEventListener('mouseover', e =>{
    lightbox.classList.add('active');
    const img = document.createElement('img');
    img.src = image.src;
    while(lightbox.firstChild){
        lightbox.removeChild(lightbox.firstChild);
    }
    lightbox.appendChild(img);
});


lightbox.addEventListener('click', e =>{
    if(e.target !== e.currentTarget) return
    lightbox.classList.remove('active');
})
