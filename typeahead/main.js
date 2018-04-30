const items = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'six', 'seventy'];

const searchInput = document.querySelector('#typeahead-input'),
      suggestions = document.querySelector('#suggestions'),
      container = document.querySelector('#suggestions-container');

function selectFrom(elm) {
    console.log(elm.textContent)
    searchInput.value = elm.textContent;
    container.classList.add('invisible')
}

function findMatches(wordToMatch, arr) {
    return arr.filter(item => {
        let regex = new RegExp(wordToMatch, 'gi');
        return item.match(regex);
    });
}

function displayMatches() {
    if (searchInput.value.length == 0) {
      container.classList.add('invisible')
    } else {
        let _this = this;
        let matchArray = findMatches(_this.value, items);
        let html = matchArray.map(item => {
          let regex = new RegExp(_this.value, 'gi');
          let itemName =  item.replace(regex, `<span>${_this.value}</span>`);
           return `<li class="list-group-item" onmouseup="selectFrom(this)"><span>${itemName}</span></li>`;
        }).join('');
        suggestions.innerHTML = html;
        container.classList.remove('invisible');
    }
}

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);