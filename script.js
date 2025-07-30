function greetUser(){
    const name = document.getElementById('nameInput').value;
    const greeting = document.getElementById('greeting');
    if (name){
        greeting.textContent = `Hello, ${name}`;
        } else {
            greeting.textContent = 'Hello';
    }
}

const boxes = document.querySelectorAll('.box');
boxes.forEach(box => {
    box.addEventListener('click', () => {
        const color = box.dataset.color;
        box.style.backgroundColor = color;
        box.style.color = color === 'yellow' ? '#333' : 'white';
    });
});