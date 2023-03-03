const logo = document.querySelector('img');
// const header = document.querySelector('body');

function onClick(e) {
    // Event properties
    //   console.log(e);
    //   console.log(e.target);
    //   console.log(e.currentTarget);
    //   console.log(e.type);
    // console.log(e.timeStamp);
    console.log(e.clientX);
    console.log(e.clientY);
    // console.log(e.offsetX);
    // console.log(e.offsetY);
    // console.log(e.pageX);
    // console.log(e.pageY);
    // console.log(e.screenX);
    // console.log(e.screenY);
}

function onDrag(e) {
    document.querySelector('h1').textContent = `X ${e.clientX} Y ${e.clientY}`;
}

logo.addEventListener('click', onClick);
// header.addEventListener('click', onClick);
// logo.addEventListener('drag', onDrag);

// document.body.addEventListener('click', function (e) {
//   console.log(e.target);
//   console.log(e.currentTarget);
// });

// e.preventDefault() method prevents the default behavior
// document.querySelector('a').addEventListener('click', function (e) {
//   e.preventDefault();
//   console.log('Link was clicked');
// });

/*
- `target` - The element that triggered the event
- `currentTarget` - The element that the event listener is attached to (These are the same in this case
- `type` - The type of event that was triggered
- `timeStamp` - The time that the event was triggered
- `clientX` - The x position of the mouse click relative to the window
- `clientY` - The y position of the mouse click relative to the window
- `offsetX` - The x position of the mouse click relative to the element
- `offsetY` - The y position of the mouse click relative to the element
- `pageX` - The x position of the mouse click relative to the page
- `pageY` - The y position of the mouse click relative to the page
- `screenX` - The x position of the mouse click relative to the screen
- `screenY` - The y position of the mouse click relative to the screen
*/














// const logo = document.querySelector('img');
// const body = document.querySelector('body');

// const onClick = () => console.log('click event');

// const onDoubleClick = () => {
//   if (document.body.style.backgroundColor !== 'purple') {
//     document.body.style.backgroundColor = 'purple';
//     document.body.style.color = 'white';
//   } else {
//     document.body.style.backgroundColor = 'white';
//     document.body.style.color = 'black';
//   }
// };
// const onRightClick = () => console.log('right click event');
// const onMouseDown = () => console.log('mouse down event');
// const onMouseUp = () => console.log('mouse up event');
// const onMouseWheel = () => console.log('mouse wheel event');
// const onMouseOver = () => console.log('mouse over event');
// const onMouseOut = () => console.log('mouse out event');
// const onDragStart = () => console.log('drag start event');
// const onDrag = () => console.log('drag event');
// const onDragEnd = () => console.log('drag end event');

// // // Event Listeners
// body.addEventListener('click', onClick);
// body.addEventListener('dblclick', onDoubleClick);
// body.addEventListener('contextmenu', onRightClick);
// body.addEventListener('mousedown', onMouseDown);
// body.addEventListener('mouseup', onMouseUp);
// body.addEventListener('wheel', onMouseWheel);
// body.addEventListener('mouseover', onMouseOver);
// body.addEventListener('mouseout', onMouseOut);
// body.addEventListener('dragstart', onDragStart);
// body.addEventListener('drag', onDrag);
// body.addEventListener('dragend', onDragEnd);










// const clearBtn = document.querySelector('#clear');
// const bodyEl = document.querySelector('body');

// function onClear() {
//   const itemList = document.querySelector('ul');
//   const items = itemList.querySelectorAll('li');

//   itemList.innerHTML = '';
//   items.forEach((item) => item.remove());

//   while (itemList.firstChild) {
//     itemList.removeChild(itemList.firstChild);
//   }
// }

// // JavaScript Event Listener
// // clearBtn.onclick = function () {
// //   alert('Clear Items');
// // };


// // clearBtn.onclick = function () {
// //     console.log('Clear Items');
// // };

// // addEventListener()
// // clearBtn.addEventListener('click', () => alert('Clear Items'));

// // Use named function
// clearBtn.addEventListener('click', onClear);
// bodyEl.addEventListener('click', () => console.log('tık'));

// // removeEventListener()

// // setTimeout(
// //     () => clearBtn.removeEventListener('click', onClear),
// //     5000
// // );

// // Fire off event from JS
// // setTimeout(() => clearBtn.click(), 5000);
// /*
// */
