player = document.querySelector(".player")
section1Items = document.querySelectorAll(".section1-item")

dom = {
    player: player,
    section1Items: section1Items,
 
}


function addEvent (){
    for (const element of dom.section1Items) {
        element.addEventListener("click", function(){
            player.style.display = "block"
            player.scrollIntoView ({
                behavior: "smooth"
            })
            
        })
        
    }

    
}
addEvent()