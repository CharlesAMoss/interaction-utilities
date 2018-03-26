let dragSrcEl = null;

function handleDragStart(e) {
     dragSrcEl = this;
  
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.outerHTML);
  
    this.classList.add('dragElem');
}

function handleDragOver(e) {
    if (e.preventDefault) {
      e.preventDefault(); 
    }
    e.dataTransfer.dropEffect = 'move';    
    return false;
}
  
function handleDrop(e) { 
    if (e.stopPropagation) {
      e.stopPropagation(); 
    }
  
    if (dragSrcEl != this) {
      this.parentNode.removeChild(dragSrcEl);
      var dropHTML = e.dataTransfer.getData('text/html');
      this.insertAdjacentHTML('beforebegin',dropHTML);
      var dropElem = this.previousSibling;
      addDnDHandlers(dropElem); 
    }
    
    return false;
}

function addDnDHandlers(elem) {
    elem.addEventListener('dragstart', handleDragStart, false);
    elem.addEventListener('dragover', handleDragOver, false);
    elem.addEventListener('drop', handleDrop, false);  
}

document.addEventListener('DOMContentLoaded', function() {

    const listContainer = document.getElementById('list-container');
    const listItems = Array.from(listContainer.querySelectorAll('li'));

    // const dragItems = listItems.map(n => {
    //                     n.setAttribute('draggable', true)
    //                    
    //                          return n
    //                 })
    [].forEach.call(listItems, addDnDHandlers);

})