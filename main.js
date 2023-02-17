const resetBtn = document.querySelector('.reset');
const billInput = document.querySelector('.bill-input');
const peopleInput = document.querySelector('.people-input');
const tipLevel = document.querySelectorAll('.btn');
const tipAmount = document.querySelector('.amount');
const totalAmount = document.querySelector('.amount-total');
const inputTip = document.querySelector('.custom');
const error = document.querySelector('.error');
const year = document.querySelector('.year');
const input = document.querySelectorAll('input');

function tipCount() {
	const tip = parseInt(this.value) / 100;
	const bill = parseInt(billInput.value);
	const people = parseInt(peopleInput.value);
	const tipPerperson = (tip * bill) / people;
	const sum = (bill * tip + bill) / people;

	if (peopleInput.value <= 0) {
		error.textContent = `Can't be zero`;
		peopleInput.classList.add('error-input');
	} else if (peopleInput.value !== '' && billInput.value !== '') {
		tipAmount.textContent = `$` + tipPerperson.toFixed(2);
		totalAmount.textContent = `$` + sum.toFixed(2);
		error.textContent = ``;
		peopleInput.classList.remove('error-input');
	}
}

const resetFun = () => {
	peopleInput.value = '';
	billInput.value = '';
	inputTip.value = '';
	totalAmount.textContent = '0.00';
	tipAmount.textContent = '0.00';
	error.textContent = ``;
	peopleInput.classList.remove('error-input');
};

const countYear = () => {
	const newDate = new Date();
	const currentYear = newDate.getFullYear();
	year.textContent = currentYear;
};

tipLevel.forEach((tip) => {
	tip.addEventListener('click', tipCount);
});
input.forEach((item) => {
	item.addEventListener('input', tipCount);
});
resetBtn.addEventListener('click', resetFun);
countYear();
