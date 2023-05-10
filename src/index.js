


const save = [
    {
        id: 1,
        image: "./image/search/search-img1.svg",
        text: "Louren Ipson",
        paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum risus pellentesque, varius magna sit amet, tempor lacus.",
        linkSVG: "./image/search/search-img1.svg",
        linkPNG: "./image/search/png-search/search1"
    },
    {
        id: 2,
        image: "./image/search/search-img2.svg",
        text: "Louren Ipson",
        paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum risus pellentesque, varius magna sit amet, tempor lacus.",
        linkSVG: "./image/search/search-img2.svg",
        linkPNG: "./image/search/png-search/search2"
    },
    {
        id: 3,
        image: "./image/search/search-img3.svg",
        text: "Louren Ipson",
        paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum risus pellentesque, varius magna sit amet, tempor lacus.",
        linkSVG: "./image/search/search-img3.svg",
        linkPNG: "./image/search/png-search/search3"
    },
    {
        id: 4,
        image: "./image/search/search-img4.svg",
        text: "Louren Ipson",
        paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum risus pellentesque, varius magna sit amet, tempor lacus.",
        linkSVG: "./image/search/search-img4.svg",
        linkPNG: "./image/search/png-search/search4"
        
    }
]

var searchElement = document.querySelector("#search")

box = () => {

    var containerSearch = document.createElement("div")
    containerSearch.classList.add("container-search")
    
    searchElement.appendChild(containerSearch);
    save.map((sv) => {
        containerSearch.innerHTML+= `
            <div class="box-search">
                <div class="content-search">
                    <img src="`+sv.image+`"/>
                    <h3>`+sv.text+`</h3>
                    <p>`+sv.paragraph+`</p>
                    <div class="buttons-search">
                        <button class="btn-svg">
                        <a href="`+sv.linkSVG+`" download>svg</a>
                        </button>
                        <button class="btn-png">
                        <a href="`+sv.linkPNG+`" download>png</a>
                        </button>
                    </div>
                </div>
            </div>
        `
    })
}
box();

