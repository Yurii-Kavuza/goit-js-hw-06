const counterRef=document.querySelector("#value");

const decrementRef = document.querySelector('button[data-action="decrement"');
const incrementRef = document.querySelector('button[data-action="increment"');
//const decrementRef = counterRef.previousElementSibling;
//const incrementRef = counterRef.nextElementSibling;


let counterValue = 0;

const setValueRef = (value) => {
    counterRef.textContent = value;  
};
decrementRef.addEventListener('click', () => {
    setValueRef(--counterValue);    
});

incrementRef.addEventListener('click', () => {
    setValueRef(++counterValue);    
});

