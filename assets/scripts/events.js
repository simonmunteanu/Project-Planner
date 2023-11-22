const btn = document.querySelector('button');
// const btnList = document.querySelectorAll('button');

const anotherButtonClickHandler = () => {
    console.log('salut baiti')
}

// btn.onclick = buttonClickHandler; 

// btn.onclick = anotherButtonClickHandler;

// const bindFn = buttonClickHandler.bind(this)

// btn.addEventListener('click', buttonClickHandler);

// setTimeout(() => {
//     btn.removeEventListener('click', buttonClickHandler);
// }, 2000)


// Event propagation: bubling + capturing in events JS 

const div = document.querySelector('div');
div.addEventListener('click', (event) => {
    console.log('ClICKED DIV');
    console.log(event);
})


const buttonClickHandler = (event) => {
    // event.stopPropagation(); 
    // event.stopImmediatePropagation();

    console.log('ClICKED BUTTON');
    console.log(event);
    // event.target.disabled = true;
}

btn.addEventListener('click', buttonClickHandler);

const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(event);

    //logica de HTTP requst
})



// event delegation pattern based on event propagation

const listItems = document.querySelectorAll('li');
// simply part
// listItems.forEach((listItem) => {
//     listItem.addEventListener('click', event => {
//         event.target.classList.toggle('highlight');
//     })
// })

/// alternativ way with event deletagion

const list = document.querySelector('ul');

list.addEventListener('click', (event) => {
    console.log(event); 
        event.target.closest('li').classList.toggle('highlight');
        // form.submit();
        btn.click();
})
