const inputElement = document.getElementById("title");
const createBtn = document.getElementById("create");
const listElement = document.getElementById("list");

const notes = [
  {
    title: "notsOne",
    completed: false,
  },
  {
    title: "notsTwo",
    completed: true,
  },
];
function render() {
  listElement.innerHTML = "";
  if (notes.length === 0) {
    listElement.innerHTML = "<p>Нет заметок</p>";
  }
  for (let i = 0; i < notes.length; i++) {
    listElement.insertAdjacentHTML("beforeend", getNoteTemplate(notes[i], i));
  }
}
render();
listElement.onclick = function (event) {
  if (event.target.dataset.index) {
    const index = parseInt(event.target.dataset.index);
    const type = event.target.dataset.type;

    if (type === "toggle") {
      notes[index].completed = !notes[index].completed;
    } else if (type === "remove") {
      notes.splice(index, 1);
    }

    render();
  }
};
function getNoteTemplate(note, index) {
  return `
        <li>
            <span class="note-text ${note.completed ? "completed" : ""}">${
    note.title
  }</span>
            <span class="check-btn${
              note.completed ? "-warning" : ""
            }" data-index="${index}" title="Готово" data-type="toggle" >✓</span>
            <span class="delete-btn" title="Удалить" data-index="${index}" data-type="remove">✕</span>
        </li>
        `;
}
createBtn.onclick = function () {
  if (inputElement.value.length === 0) {
    return;
  }
  const newNote = {
    title: inputElement.value,
    completed: false,
  };
  notes.push(newNote);
  render();
  inputElement.value = "";
};
const people = [
  { people: "Анна", budget: 4200 },
  { people: "Иван", budget: 3500 },
  { people: "Мария", budget: 12000 },
  { people: "Петр", budget: 10000 },
];

const string = "Привет, как дела ?";
const reversed = string
  .split("")
  .toReversed()
  .join("!")
  .split("")
  .filter((c) => c !== "!")
  .join("");

// console.log(reversed);

// const str = 'Привет, мир!'

// console.log(str[str.length - 1])

// const num1 = 48
// if (num1 % 2 === 0 ) {
//   console.log('chetnoe')
// }
// else{
//   console.log('nechetnoe')
// }
// const list1 = 'hello'
// const list2 = 'huilo'

// if (list1[0] === list2[0]){
//    console.log('Первые буквы совпадают');
// } else {
//     console.log('Первые буквы разные');
// }

// const list1 = 32

// console.log(String(list1)[0])

// const globalMessage = 'Привет'

// function logMessage(message, count = 5) {
//   const messageFormated = `(((${message})))`

//   for (let i = 0; i < count ; i++) {
//     console.log(messageFormated)
//   }
// }
// logMessage(globalMessage)


class Student {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  set city(value) {
    const firstLetter = value[0].toUpperCase()
    const fromSecondLetter = value.slice(1).toLowerCase()

    this._city = `г. ${firstLetter}${fromSecondLetter}`
  }
  get city(){
    return `${this._city}`
  }
}
const firstStudent = new Student('Вася', 25)

firstStudent.city = 'москва'
console.log(firstStudent.city)