var textArea = document.getElementsByClassName('add-card');

function onDragStart(event) {
     event
         .dataTransfer
         .setData('text/plain', event.target.id);
     event
         .currentTarget
         .style
         .backgroundColor = "yellow"
   }

   function onDragOver(event) {
     event.preventDefault()
   }

   function onDrop(event) {
     const id = event
         .dataTransfer
         .getData('text');
     const draggableElement = document.getElementById(id);
     const dropZone = event.target;
     dropZone.appendChild(draggableElement);
     event
         .dataTransfer
         .clearData()
   }
   window.onload =  function () {
    for(var i=0; i<textArea.length; i++){
      textArea[i].addEventListener('keydown', function (e) {
        if( e.keyCode === 13) {
          var card = document.createElement("div");
              card.textContent = this.value;
              card.setAttribute('class', 'card');
              card.setAttribute('draggable', 'true');
              card.setAttribute('id', this.value);
              card.setAttribute('ondragstart', 'onDragStart(event)');

          console.log("enter pressed");
          this.parentElement
              .append(card);
          this.value= "";
          this.setSelectionRange(0,0);
          this.selectionEnd = 0;
        }
      });
    }
}

