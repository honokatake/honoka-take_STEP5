const text = document.getElementById('text');
const button = document.getElementById('button');
const result = document.getElementById('result');
const list = document.getElementById('list');

let count = 0;

button.addEventListener('click', function(){
    const value = text.value;

    if(value.trim() === ''){
        alert('入力値が空です');
    }else{
        result.textContent = text.value;
        result.style.backgroundColor = 'yellow';
    }

const li = document.createElement('li');
li.textContent = text.value;

const beletButton = document.createElement('button');
beletButton.textContent = '削除';

beletButton.addEventListener('click', function(){
    li.remove();

count--;
button.style.display = 'inline';
});

li.appendChild(beletButton);
list.appendChild(li);

count++;

if(count >= 3){
    button.style.display = 'none';
}
});


const button2 = document.getElementById('button2');

button2.addEventListener('click', function(){
    const colors = ['lightblue', 'lightgreen', 'lightcoral'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});

for(let i = 1; i <= 5; i++){
    console.log(i);
}
