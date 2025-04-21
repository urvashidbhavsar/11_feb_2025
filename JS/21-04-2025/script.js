let product = [
    {
        id: 1,
        pname: "OnePlus 13R",
        brand: "OnePlus",
        des: "Smarter with OnePlus AI (12GB RAM, 256GB Storage Nebula Noir)",
        oldprice: "44999",
        newprice: "42999",
        pimage: "https://m.media-amazon.com/images/I/41uPss3u3eL._SX300_SY300_QL70_FMwebp_.jpg",
    },
    {
        id: 2,
        pname: "iQOO Neo 10R",
        brand: "iQOO",
        des: "5G (Raging Blue, 8GB RAM, 128GB Storage) | Snapdragon 8s Gen 3 Processor | India's Slimmest 6400mAh Battery Smartphone | Segment's Most Stable 90FPS for 5 Hours",
        oldprice: "31999",
        newprice: "26999",
        pimage: "https://m.media-amazon.com/images/I/41dsSkED6WL._SX300_SY300_QL70_FMwebp_.jpg",
    },
    {
        id: 3,
        pname: "realme NARZO 80 Pro",
        brand: "realme",
        des: "5G (Speed Silver,8GB+128GB) | Segment's 1st MediaTek Dimensity 7400 Chipset | 6000mAh Titan Battery + 80W Ultra Charge | 4500nits HyperGlow Esports Display | IP69 Waterproof",
        oldprice: "23999",
        newprice: "19999",
        pimage: "https://m.media-amazon.com/images/I/41Xhb2WaWSL._SY300_SX300_.jpg",
    }
]

let card = document.getElementById("product_card");
product.forEach(prod => {
    card.innerHTML += `
     <div class="card">
            <img src=${prod.pimage} alt="">
            <div class="pro-details">
                <h3>${prod.pname}</h3>
                <p>${prod.brand}</p>
                <div>${prod.des}</div>
                <div> <del>₹${prod.oldprice}</del> 
                   ₹${prod.newprice}
                </div>
            </div>
        </div> `
});