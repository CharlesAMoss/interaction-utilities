const items = ['ten', 'twenty', 'thirty'];

const searchInput = document.querySelector('#search'),
      suggestions = document.querySelector('#suggestions');

function findMatches(wordToMatch, arr) {
    return arr.filter(function(item) {
        const regex = new RegExp(wordToMatch, 'gi');
        return item.match(regex);
    });
}

function displayMatches() {
    const matchArray = findMatches(this.value, cities);
    const html = matchArray.map(item => {
    const regex = new RegExp(this.value, 'gi');
    const itemName =  item.replace(regex, `<span class="hl">${this.value}</span>`);
    
    return `
      <li>
        <span class="name">${itemName}</span>    
      </li>
    `;
  }).join('');
  suggestions.innerHTML = html;
}

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);