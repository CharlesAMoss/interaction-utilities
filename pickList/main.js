const Pickable = document.getElementById('list-container-pickable');
const Picked = document.getElementById('list-container-picked');

function pick(elem) {
    let elemContent = elem.firstChild.innerHTML;
    if(!elem.classList.contains('disabled')) {
        let removeable = `<li class="list-group-item" onclick="remove(this)"><span>${elemContent}</span></li>`;
        Picked.insertAdjacentHTML('beforeend', removeable);
        elem.classList.add('disabled');
    } else {
        console.log(`${elemContent} has already been picked`);
        let pickedElem = Array.from(Picked.querySelectorAll('li'))
            .find(el => el.textContent === elem.firstChild.innerHTML);
        pickedElem.classList.add('list-group-item-info'); 
        setTimeout(function(){
            pickedElem.classList.remove('list-group-item-info');
        }, 500);
    }
}

function remove(elem) {
    Picked.removeChild(elem);
    Array.from(Pickable.querySelectorAll('li'))
        .find(el => el.textContent === elem.firstChild.innerHTML)
        .classList.remove("disabled");
}