// 1 Анализ задачи
//	1.1 Создать инпут

// 2 Написать код
// 3. Оптимизация кода по алгоритму
// 4 Оптимихация кода по синтаксису

let btn = document.querySelector(".btn"),
	span = document.querySelector(".show_result"),
	number = Math.floor(Math.random() * 150);


btn.addEventListener("click", function () {
	const input = document.querySelector(".input").value;

	let message = "";

	if (input == number) {
		message = `you are right! ${number}`;
	} else if (input < number) {
		message = "Col!";
	} else if (input > number) {
		message = "hot";
	}

  	span.textContent = message;
});
