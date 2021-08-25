const img = document.querySelector('.slider__image'); // выбор картинки
const dots = document.querySelectorAll('.slider__dot'); // выбор кнопки круглых

const imgArr = ['./img/tshirts/tshirt_07.png', './img/tshirts/tshirt_08.png', './img/tshirts/tshirt_09.png', './img/tshirts/tshirt_10.png', './img/tshirts/tshirt_11.png']; // создание массива картинок

let currentIntex = 0; // переменная которая будет меняться


function changeIndex(ind) {
    currentIntex = ind;
    slide(currentIntex);
}
// функция для красных кнопок

function nextIndex(direction) {
    currentIntex += direction;
    if (currentIntex >= imgArr.length) {
        currentIntex = 0;
        // length определяет длину массива, т.е. количество картинок и currentIntex говорит об окончании количества (0) при нажатии в одну сторону на кнопку
    } else if (currentIntex < 0) {
        currentIntex = imgArr.length - 1;
    }

    slide(currentIntex);
}

function slide(index) {
    //добавление анимации
    img.style.display = 'none';
    setTimeout(() => {
        img.style.display = 'block';
    }, 0);
    //конец анимации
    img.src = imgArr[index];

    updateDots(index); // обновление текущего состояния крыглых точек
}
// обработка смены слайдов

function updateDots(index) {
    for (let dot of dots) {
        dot.classList.remove('active');
    }
    dots[index].classList.add('active');
}
// снятие активного класса с кнопок


function slider(direction) {
    currentIntex += direction;
    if (currentIntex >= imgArr.lenght) {
        currentIntex = 0;
        // lenght определяет длину массива, т.е. количество картинок и currentIntex говорит об окончании количества (0) при нажатии в одну сторону на кнопку
    } else if (currentIntex < 0) {
        currentIntex = imgArr.lenght - 1;
    }
    // else if проводит дополнительную проверку при нажатии в другую сторону на кнопку и imgArr.lenght - 1
    

    img.src = imgArr[currentIntex]; //выбор картинки из массива
}
//функция которая обрабатывает клики

//ЭТО ФУНКЦИЯ ОТДЕЛЬНО НА КВАДРАТНЫЕ КНОПКИ