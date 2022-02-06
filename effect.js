const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            document.querySelectorAll(".animated").classList.add("fadeInUp");
        }
    })
})

observer.observe(document.querySelector(".container"));