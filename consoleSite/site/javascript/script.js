
let text = document.querySelector('.text');
let close = document.querySelector('#close');
let console_block = document.querySelector('.console');
let openConsole = document.querySelector('.btn_t');
let menu_console = document.querySelector('.menu_console');
let insertText = document.querySelector('.insertText');
let textInsertGlobal = document.querySelector('.textInsertGlobal');
let content_console = document.querySelector('.content_console');
let slideConsole = document.querySelector('.btn_o');
let cmd_title = document.querySelector('.cmd_title');
let arr = navigator.userAgent;
let flag = true;

function closes() {
  console_block.style.display = 'none';
}
function open() {

  if (flag === true) {
    console_block.style.width = 100 + '%';
    console_block.style.height = 100 + 'vh';
    console_block.style.margin = 0;
    flag = false
  }
  else if (flag === false) {
    console_block.style.width = 978 + 'px';
    console_block.style.height = 512 + 'px';
    console_block.style.margin = 'auto';
    console_block.style.marginTop = 50 + 'px';
    flag = true;
  }
}
flagHelp = true;
let divHelp;
function help() {
  if (flagHelp === true) {
    divHelp = document.createElement('div');
    divHelp.style.width = 500 + 'px';
    divHelp.style.height = 350 + 'px';
    divHelp.style.backgroundColor = 'rgb(211, 211, 211)';
    divHelp.style.position = 'absolute';
    divHelp.style.top = '50%';
    divHelp.style.left = '50%';
    divHelp.style.marginLeft = -260 + 'px';
    divHelp.style.marginTop = -150 + 'px';
    divHelp.style.padding = 10 + 'px';
    divHelp.style.border = 5 + 'px solid white';
    divHelp.classList.add("divHelps");
    divHelp.innerHTML = `<center>Команды:</center><br>
    Температура - ввести название города<br>
    $react<br>
    $Vue<br>
    $Angular<br>
    $массивы (справочник методов)<br>
    $redux<br>
    print - печатает ваше слово<br>
    hello - Hello World<br>
    exit - закрыть консоль<br>
    chucknorris<br>
    $ip - ваш ip адресс
    `;
    document.body.appendChild(divHelp);
    flagHelp = false;
    content_console.addEventListener("click", () => {
      divHelp.remove();
      flagHelp = true;
    });
  }
  else if (flagHelp === false) {
    divHelp.remove()
    flagHelp = true;
  }
}

close.addEventListener("click", closes);
openConsole.addEventListener("click", open);
slideConsole.addEventListener("click", help);


var s = 0;
var speed = 40;
(function typeWriter() {
  if (s < arr.length) {
    text.innerHTML += arr.charAt(s);
    s++;
    setTimeout(typeWriter, speed);
  }
})()


let commandList = {
  $react: `npx create-react-app my-app<br>`,
  $vue: 'npm install vue<br>',
  $angular: 'npm install -g @angular/cli<br>',
  $redux: 'npm install redux<br>',
  $массивы:
    `push (...items) – добавляет элементы в конец<br>
   pop() – извлекает элемент с конца<br>
   shift() – извлекает элемент с начала<br>
   unshift(...items) – добавляет элементы в начало<br>
   splice(pos, deleteCount, ...items) – начиная с индекса pos, удаляет deleteCount элементов и вставляет items<br>
   slice(start, end) – создаёт новый массив, копируя в него элементы с позиции start до end (не включая end)<br>
   concat(...items) – возвращает новый массив: копирует все члены текущего массива и добавляет к нему items. Если какой-то из items является массивом, тогда берутся его элементы<br>
   indexOf/lastIndexOf(item, pos) – ищет item, начиная с позиции pos, и возвращает его индекс или -1, если ничего не найдено<br>
   includes(value) – возвращает true, если в массиве имеется элемент value, в противном случае false<br>
   find/filter(func) – фильтрует элементы через функцию и отдаёт первое/все значения, при прохождении которых через функцию возвращается true<br>
   findIndex похож на find, но возвращает индекс вместо значения<br>
   forEach(func) – вызывает func для каждого элемента. Ничего не возвращает<br>
   map(func) – создаёт новый массив из результатов вызова func для каждого элемента.<br>
   sort(func) – сортирует массив «на месте», а потом возвращает его.<br>
   reverse() – «на месте» меняет порядок следования элементов на противоположный и возвращает изменённый массив.<br>
   split/join – преобразует строку в массив и обратно.<br>
   reduce(func, initial) – вычисляет одно значение на основе всего массива, вызывая func для каждого элемента и передавая промежуточный результат между вызовами<br>
   Array.isArray(arr) проверяет, является ли arr массивом<br>
   `
  ,
  print(args) {
    textInsertGlobal.innerHTML += args.join(' ') + '<br>';
  },
  hello() {
    textInsertGlobal.innerHTML += 'Hello World' + '<br>';
  },
  exit() {
    closes();
  },
  chucknorris() {
    chak();
  },
  $time() {

    let date = new Date(),
      hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours(),
      minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes(),
      seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
    textInsertGlobal.innerHTML = hours + ':' + minutes + ':' + seconds;
    setInterval($time, 1000);
  },
  $ip() {
    myIPadress();
  }
};

let city;
const ENTER_KEYCODE = 13;
let request

insertText.addEventListener('keydown', async function (e) {
  if (e.keyCode === ENTER_KEYCODE) {
    insertText.value = insertText.value.toLowerCase()
    if (insertText.value) {
      try {

        city = insertText.value;
        textInsertGlobal.innerHTML += 'Загружаю...';
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=72f8ed585c57d651edb7c3fe39fb3554`
        let promise = await fetch(url);
        request = await promise.json();
        textInsertGlobal.innerHTML = '';
        let tempKelvin = request.main.temp;
        let tempСelsius = convertTemp(tempKelvin);
        textInsertGlobal.innerHTML += `Температура в ${city}: ${tempСelsius} &#8451 <br>`;
        insertText.value = '';

      }
      catch (error) {
        const command = insertText.value.split(' ');
        const keyword = command[0];
        const args = command.slice(1);
        if (!Object.keys(commandList).includes(keyword)) {
          textInsertGlobal.innerHTML += 'Неверный запрос' + '<br>';
          insertText.value = '';
        }
        else {

          if (typeof commandList[keyword] === 'function') {
            commandList[keyword](args);
            insertText.value = '';
          }


          else {
            textInsertGlobal.innerHTML += commandList[keyword] + '<br>';
            insertText.value = '';
          }
        }
      }
    }
  }
});


function convertTemp(tempKelvin) {
  return Math.round(tempKelvin - 273)
}


function chak() {

  let chak = document.createElement('img');
  chak.src = 'https://static.wixstatic.com/media/2cd43b_8bc6993d75f0408fb3bc4a859acf3c34~mv2.png/v1/fill/w_155,h_226,q_90/2cd43b_8bc6993d75f0408fb3bc4a859acf3c34~mv2.png';
  chak.classList.add("chak");
  document.body.appendChild(chak);
  setTimeout(() => {
    chak.remove();
  }, 3000);
}

async function myIPadress() {
  textInsertGlobal.innerHTML += 'Загружаю...';
  let url = `http://ip-api.com/json/`;
  let promise = await fetch(url);
  request = await promise.json();
  textInsertGlobal.innerHTML = '';
  let myIP = request.query;
  let country = request.country;
  let city = request.city;
  console.log(myIP);
  textInsertGlobal.innerHTML += `IP:${myIP}<br>страна: ${country} город: ${city} `;
  insertText.value = '';
}