const price = 10;
const startPrice = "€";
const endPrice = ",-";

sessionStorage.getItem("Winkelmandje").split(",").forEach((item)=>{
    document.getElementById("names").innerHTML+="<p>"+ item +"</p>";
    document.getElementById("prices").innerHTML+="<p>" + startPrice + price + endPrice + "</p>";
});

document.getElementById("Total").innerHTML = "€" + sessionStorage.getItem("Winkelmandje").split(",").length * 10 + ",-";

document.querySelector(".pay").addEventListener("click", (()=>{
    document.getElementById("names").innerHTML = "";
    document.getElementById("prices").innerHTML = "";
    document.getElementById("Total").innerHTML = "";
    sessionStorage.removeItem("Winkelmandje");
    alert("U hebt betaald, dank u wel");
}))