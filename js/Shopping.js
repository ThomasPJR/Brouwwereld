document.querySelectorAll(".item").forEach((item)=>{

    item.addEventListener("click", (element) => {

        const elementName = element.currentTarget.getAttribute("name");

        let newWinkelmandje = (sessionStorage.getItem("Winkelmandje") != null)
                                ?sessionStorage.getItem("Winkelmandje").split(',')
                                : [];
        newWinkelmandje.push(elementName);

        sessionStorage.setItem("Winkelmandje", newWinkelmandje);

        console.log(sessionStorage.getItem("Winkelmandje"));

        alert(elementName + " is aan uw winkelmandje toegevoegt");
    });
});