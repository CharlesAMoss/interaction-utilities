const Pickable = document.getElementById('list-container-pickable');
const PickableItems = Array.from(Pickable.querySelectorAll('li'));

const Picked = document.getElementById('list-container-picked');
const PickedItems = Array.from(Picked.querySelectorAll('li'));

function pick(elem) {
    console.log(elem.firstChild.innerHTML)
    elem.classList.add("disabled")
    Picked.appendChild(elem.cloneNode(true))
    

}

console.log(PickableItems)