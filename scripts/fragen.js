console.log("ITS WORK!")

let aaa = 42;

let bbb = `<div class="testclass">1111</div>`;

const derMann = "<img src=images/icons/der_mann.png>";
const dieFrau = "<img src=images/icons/die_frau.png>";
const dasMadchen = "<img src=images/icons/das_madchen.png>";
const derJunge = "<img src=images/icons/der_junge.png>";


class Question 
{
	constructor(text, answers)
	{
		this.text = text;
		this.answers = answers; 
	}

	Click(index) 
	{
		return this.answers[index].value; 
	}
}

//Класс, представляющий ответ
class Answer 
{
	constructor(text, value) 
	{
		this.text = text; 
		this.value = value; 
	}
}



const joka = 
[
	new Question(`Joka?`,
	[
		new Answer("Schreibt", 1),
		new Answer("Schreiben", 0),
		new Answer("Schreibst", 0),
		new Answer("Schreibe", 0)
	])
]

const boka = 
[
	new Question(`Boka?`,
	[
		new Answer("Der", 1),
		new Answer("Das", 0),
		new Answer("Die", 0),
		new Answer("Den", 0),
		new Answer("Dem", 0),
		new Answer("Des", 0)
	])
]

let deutsch = 
[
	new Question(`${derMann}"Mann = "`,
	[
		new Answer("Der", 1),
		new Answer("Das", 0),
		new Answer("Die", 0),
		new Answer("Den", 0),
		new Answer("Dem", 0),
		new Answer("Des", 0)
	]),

	new Question(`${dasMadchen}"Madchen = "`,
	[
		new Answer("Der", 0),
		new Answer("Das", 1),
		new Answer("Die", 0),
		new Answer("Den", 0),
		new Answer("Dem", 0),
		new Answer("Des", 0)
	]),

	new Question(`${derJunge}"Junge = "`,
	[
		new Answer("Der", 1),
		new Answer("Das", 0),
		new Answer("Die", 0),
		new Answer("Den", 0),
		new Answer("Dem", 0),
		new Answer("Des", 0)
	]),

	new Question(`${dieFrau}"Frau = "`, 
	[
		new Answer("Der", 0),
		new Answer("Das", 0),
		new Answer("Die", 1),
		new Answer("Den", 0),
		new Answer("Dem", 0),
		new Answer("Des", 0)
	])
]