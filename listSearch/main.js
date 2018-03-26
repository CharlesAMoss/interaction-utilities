document.addEventListener('DOMContentLoaded', function() {
    console.log("... document has arrived");

    window.listSearch = function() {
        const input = document.getElementById('search-input').value;
        const filter = input.toUpperCase();
        const ul = document.getElementById('list-container');
        const li = ul.querySelectorAll('li');
        
        for(i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("span")[0];
            //todo: this finds the first span this may not be the case in the demo
            if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = '';
            } else {
                li[i].style.display = 'none';
            }
        }
    }
});