console.log("ITS WORK!")

let aaa = 42;

let bbb = `<div class="testclass">1111</div>`;




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

// ===== People / Leute =====

const derMann = `<img class="quiz__image" src=images/icons/people/der_mann.png>`;
const dieFrau = `<img class="quiz__image" src=images/icons/people/die_frau.png>`;
const dasMadchen = `<img class="quiz__image" src=images/icons/people/das_madchen.png>`;
const derJunge = `<img class="quiz__image" src=images/icons/people/der_junge.png>`;
const dasBaby = `<img class="quiz__image" src=images/icons/people/das_baby.png>`;
const dasKind = `<img class="quiz__image" src=images/icons/people/das_kind.png>`;
const derSenior = `<img class="quiz__image" src=images/icons/people/der_senior.png>`;

let dataPeople = 
[
	new Question(`${derMann}"Mann = "`,
	[
		new Answer("Der", 1),
		new Answer("Das", 0),
		new Answer("Die", 0)
	]),

	new Question(`${dasMadchen}"Madchen = "`,
	[
		new Answer("Der", 0),
		new Answer("Das", 1),
		new Answer("Die", 0)
	]),

	new Question(`${derJunge}"Junge = "`,
	[
		new Answer("Der", 1),
		new Answer("Das", 0),
		new Answer("Die", 0)
	]),

    new Question(`${dasBaby}"Baby = "`,
	[
		new Answer("Der", 0),
		new Answer("Das", 1),
		new Answer("Die", 0)
	]),

    new Question(`${dasKind}"Kind = "`,
	[
		new Answer("Der", 0),
		new Answer("Das", 1),
		new Answer("Die", 0)
	]),

    new Question(`${derSenior}"Senior = "`,
	[
		new Answer("Der", 1),
		new Answer("Das", 0),
		new Answer("Die", 0)
	]),

	new Question(`${dieFrau}"Frau = "`, 
	[
		new Answer("Der", 0),
		new Answer("Das", 0),
		new Answer("Die", 1)
	])
]

// ===== Pronouns / Pronomen =====

const pronEr = `<img class="quiz__image" src=images/icons/pronouns/er.png>`;
const pronIch = `<img class="quiz__image" src=images/icons/pronouns/ich.png>`;
const pronEs = `<img class="quiz__image" src=images/icons/pronouns/es.png>`;
const pronSie = `<img class="quiz__image" src=images/icons/pronouns/sie.png>`;
const pronDu = `<img class="quiz__image" src=images/icons/pronouns/du.png>`;
const pronWir = `<img class="quiz__image" src=images/icons/pronouns/wir.png>`;
const pronSiePlur = `<img class="quiz__image" src=images/icons/pronouns/sie_plural.png>`;
const pronDas = `<img class="quiz__image" src=images/icons/pronouns/das.png>`;
const pronDieser = `<img class="quiz__image" src=images/icons/pronouns/dieser.png>`;
const pronIhr = `<img class="quiz__image" src=images/icons/pronouns/ihr.png>`;

const dataPronouns = 
[
	new Question(`${pronEr}"He = "`,
	[
		new Answer("er", 1),
		new Answer("sie", 0),
		new Answer("ich", 0),
		new Answer("du", 0)
	]),

	new Question(`${pronEs}"It = "`,
	[
		new Answer("du", 0),
		new Answer("sie", 0),
		new Answer("er", 0),
		new Answer("es", 1)
	]),

	new Question(`${pronSie}"She = "`,
	[
		new Answer("ich", 0),
		new Answer("wir", 0),
		new Answer("sie", 1),
		new Answer("das", 0)
	]),

	new Question(`${pronDu}"You = "`,
	[
		new Answer("du", 1),
		new Answer("ihr", 0),
		new Answer("ich", 0),
		new Answer("sie", 0)
	]),

	new Question(`${pronWir}"We = "`,
	[
		new Answer("ich", 0),
		new Answer("du", 0),
		new Answer("euch", 0),
		new Answer("wir", 1)
	]),

	new Question(`${pronSiePlur}"They = "`,
	[
		new Answer("es", 0),
		new Answer("du", 0),
		new Answer("sie", 1),
		new Answer("er", 0)
	]),

	new Question(`${pronDas}"That = "`,
	[
		new Answer("du", 0),
		new Answer("das", 1),
		new Answer("sie", 0),
		new Answer("ihr", 0)
	]),

	new Question(`${pronDieser}"This = "`,
	[
		new Answer("ihr", 0),
		new Answer("es", 0),
		new Answer("das", 0),
		new Answer("dieser", 1)
	]),

	new Question(`${pronIhr}"You = "`,
	[
		new Answer("ihr", 1),
		new Answer("er", 0),
		new Answer("ich", 0),
		new Answer("es", 0)
	]),

	new Question(`${pronIch}"I = "`,
	[
		new Answer("wir", 0),
		new Answer("ich", 1),
		new Answer("ihr", 0),
		new Answer("du", 0)
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