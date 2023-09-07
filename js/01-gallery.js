import { galleryItems } from './gallery-items.js';
// Change code below this line


const gallery = document.querySelector(".gallery");

const markup = galleryItems
.map((galleryItem) => `
    <div class="gallery_item"> 
        <a class ="gallery__link" href="${galleryItem.original}"> 
            <img class="gallery__image" src="${galleryItem.preview}" data-source="${galleryItem.original}" alt="${galleryItem.description}"> 
        </a> 
    </div>`)
.join("");

gallery.insertAdjacentHTML("beforeend", markup);

const zoomImage = (event) => {
  
    event.preventDefault();
  
    if (event.target.nodeName !== "IMG"){
        console.log('click na div !')
    return;
    } 
    
    const bigImg = event.target.dataset.source;
    console.log(bigImg)
    const instance = basicLightbox.create(`<img src="${bigImg}" width="800" height="600">`)
    instance.show()

}

gallery.addEventListener('click', zoomImage, )

const escape = (event) => {
    event.preventDefault();

    const instance = basicLightbox
    const visible = basicLightbox.visible();
    console.log(visible)
    if (visible === true){
        console.log('escape clicked!!')
        instance.close()
        return
    }

    
}


document.addEventListener('keydown', escape)



