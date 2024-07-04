const menuItems = [
    {
        title: "Smashed Avo",
        image: "/image/menu-img/Rectangle 9.png",
        price: 20,
        id: 0,
        quantity: 1,
    },
    {
        title: "Ying & Yang",
        image: "/image/menu-img/Rectangle 10.png",
        price: 20,
        id: 1,
        quantity: 1,
    },
    {
        title: "Pancakes",
        image: "/image/menu-img/Rectangle 11.png",
        price: 20,
        id: 2,
        quantity: 1,
    },
    {
        title: "Huevos Rancheros",
        image: "/image/menu-img/Rectangle 12.png",
        price: 20,
        id: 3,
        quantity: 1,
    },
    {
        title: "Rancheros",
        image: "/image/menu-img/Rectangle 13.png",
        price: 20,
        id: 4,
        quantity: 1,
    },
    {
        title: "Veg Burger",
        image: "/image/menu-img/Rectangle 14.png",
        price: 20,
        id: 5,
        quantity: 1,
    },
    {
        title: "Egg Burger",
        image: "/image/menu-img/Rectangle 15.png",
        price: 20,
        id: 6,
        quantity: 1,
    },
    {
        title: "Burrito",
        image: "/image/menu-img/Rectangle 16.png",
        price: 20,
        id: 7,
        quantity: 1,
    },
];
const menuContainer = document.querySelector(".menu-complete");
menuItems.map((menuItem) => {
    const cardList = document.createElement("div")
    cardList.classList.add("card");
    const image = document.createElement('img');
    image.src = menuItem.image;
    cardList.appendChild(image);

    const title = document.createElement('p')
    title.textContent = menuItem.title;
    cardList.appendChild(title);
    menuContainer.appendChild(cardList)
})
const handleHome = () => {
    window.location.href = "landingPage.html"
}
const handleSpoon =(event) => {
    event.preventDefault();
    window.location.href ="menu.html"
}