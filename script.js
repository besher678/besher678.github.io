const services = document.querySelector('.about-container');
const obsCallback = function (entries, observer){
    entries.forEach(entry => {
        console.log(entry);
    })
};

const obsOptions = {
    root: null,
    threshold: 0.1,
};

const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(services);