const menuItems = [
    {
        id: 1,
        item: "Food Item",
        oneLiner: "Lorem ipsum dolor sit amet consectetur adipisicing elit.  suscipit ab animi fugiat.",
        img: "../Project-3/Pictures/pexels-photo-286283.jpeg",
        hotel: "PC Hotel",
        desc: "One Lorem ipsum dolor sit amet consectetur adipisicing elit.  suscipit ab animi fugiatOne Lorem ipsum dolor sit amet consectetur adipisicing elit.  suscipit ab animi fugiat."
    },
    {
        id: 2,
        item: "Food Item",
        oneLiner: "Lorem ipsum dolor sit amet consectetur adipisicing elit.  suscipit ab animi fugiat.",
        img: "../Project-3/Pictures/pexels-photo-1508662.jpeg",
        hotel: "Motel Hotel",
        desc: "One Lorem ipsum dolor sit amet consectetur adipisicing elit.  suscipit ab animi fugiat."
    }, {
        id: 3,
        item: "Lets eat some food",
        oneLiner: "Lorem ipsum dolor sit amet consectetur adipisicing elit.  suscipit ab animi fugiat.",
        img: "../Project-3/Pictures/pexels-photo-286283.jpeg",
        hotel: "Pizza Hotel",
        desc: "One Lorem ipsum dolor sit amet consectetur adipisicing elit.  suscipit ab animi fugiat.One Lorem ipsum dolor sit amet consectetur adipisicing elit.  suscipit ab animi fugiat"
    },
    {
        id: 4,
        item: "PizzaPlus",
        oneLiner: "Lorem ipsum dolor sit amet consectetur adipisicing elit.  suscipit ab animi fugiat.",
        img: "../Project-3/Pictures/pexels-photo-1307698 (1).jpeg",
        hotel: "Almaida Hotel",
        desc: "One Lorem ipsum dolor sit amet consectetur adipisicing elit.  suscipit ab animi fugiat."
    },
    {
        id: 5,
        item: "Lunch Started",
        oneLiner: "Lorem ipsum dolor sit amet consectetur adipisicing elit.  suscipit ab animi fugiat.One Lorem ipsum dolor sit amet consectetur adipisicing elit.  suscipit ab animi fugiat",
        img: "../Project-3/Pictures/pexels-valeria-boltneva-842571.jpg",
        hotel: "HillTop Hotel",
        desc: "One Lorem ipsum dolor sit amet consectetur adipisicing elit.  suscipit ab animi fugiat."
    },
]


const item = document.getElementById('item');
const oneLiner = document.getElementById('oneLiner');
const img = document.getElementById('img');
const hotel = document.getElementById('hotel');
const desc = document.getElementById('desc');
const prev = document.getElementById('prev');
const random = document.getElementById('random');
const next = document.getElementById('next');


let currentMenu = 0;
window.addEventListener('DOMContentLoaded', function () {
    // let menu = menuItems[currentMenu];
    // item.textContent=menu.item;
    // oneLiner.textContent=menu.oneLiner;
    // img.src=menu.img;
    // hotel.textContent=menu.hotel;
    // desc.textContent=menu.desc;

    allMenu(currentMenu)
})
const allMenu = () => {
    let menu = menuItems[currentMenu];
    item.textContent = menu.item;
    oneLiner.textContent = menu.oneLiner;
    img.src = menu.img;
    hotel.textContent = menu.hotel;
    desc.textContent = menu.desc;
}

random.addEventListener('click', () => {
    currentMenu = Math.floor(Math.random() * menuItems.length);
    // console.log(currentMenu);
    allMenu(currentMenu);
})

// console.log(menuItems.length);

prev.addEventListener('click', () => {
    currentMenu--;
    if (currentMenu < 0) {
        currentMenu = menuItems.length - 1;
    }
    allMenu(currentMenu);
});

next.addEventListener('click', () => {
    currentMenu++;
    if (currentMenu > menuItems.length - 1) {
        currentMenu = 0;
    }
    allMenu(currentMenu);
})