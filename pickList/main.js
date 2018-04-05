const Pickable = document.getElementById('list-container-pickable');
const PickableItems = Array.from(Pickable.querySelectorAll('li'));

const Picked = document.getElementById('list-container-picked');
const PickedItems = Array.from(Picked.querySelectorAll('li'));

function pick(elem) {
    let elemContent = elem.firstChild.innerHTML;
    if(!elem.classList.contains('disabled')) {
        let removeable = `<li class="list-group-item" onclick="remove(this)"><span>${elemContent}</span></li>`;
        Picked.insertAdjacentHTML('beforeend', removeable);
        elem.classList.add("disabled");
    } else {
        console.log(`${elemContent} has already been picked`);
    }
}

function remove(elem) {
    Picked.removeChild(elem)
    //let disabledPick = Pickable.querySelectorAll('li').innerText = elem.firstChild.innerHTML;
    //console.log(disabledPick)
    //disabledPick.classList.remove("disabled")
}