

document.getElementById("chat-Pedro").addEventListener("click", () => {
    let width = window.innerWidth;
    console.log(width);
    
    if(width < 768){
        document.querySelector(".chatPedro").classList.remove("d-none");
        document.querySelector(".chat").classList.add("d-none");
        document.querySelector(".chat__nuevosMensajes").classList.add("d-none");
    }else{
        document.querySelector(".chatPedro").classList.remove("d-none");
        document.querySelector(".chat__nuevosMensajes").classList.add("d-none");
    }
    
})

document.querySelector(".chatPedro-icon").addEventListener("click", () => {
    document.querySelector(".chat").classList.remove("d-none");
    document.querySelector(".chatPedro").classList.add("d-none");
})


