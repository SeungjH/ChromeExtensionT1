let bobRossImages = [
    "https://bit.ly/3Ck6DTU",
    "https://bit.ly/3ozQCVk"
];

function replaceImages() {
    const images = document.getElementsByTagName("img");
    for (let image of images) {
        const index = Math.floor(Math.random() * bobRossImages.length);
        image.src = bobRossImages[index];
    }
}

// Run initially
replaceImages();

// Observe new images being added (for dynamic content like YouTube)
const observer = new MutationObserver(() => replaceImages());

observer.observe(document.body, {
    childList: true,
    subtree: true
});


// const images = document.getElementsByTagName("img");

// for(image of images){
//     const index = Math.floor(Math.random() * bobRossImages.length);
//     image.src = bobRossImages[index];
// }