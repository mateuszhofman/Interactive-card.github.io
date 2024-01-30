const cvcNumber = document.querySelector('.cvc-number');
const cardNumber = document.querySelector('.card-number');
const name = document.querySelector('.name');
const dateMonth = document.querySelector('.date-month');
const dateYear = document.querySelector('.date-year');

const infoBox = document.querySelector('.info-box');
const nameInput = document.querySelector('.name-input');
const cardNumberInput = document.querySelector('.card-input');
const monthInput = document.querySelector('.month-input');
const yearInput = document.querySelector('.year-input');
const cvcInput = document.querySelector('.cvc-input');

const confirmBtn = document.querySelector('.confirm-btn');
const continueBtn = document.querySelector('.continue-btn');

const popup = document.querySelector('.popup');

const checkCardName = () => {
	const infoName = document.querySelector('.info-name');
	const errorText = infoName.querySelector('.error-text');
	if (nameInput.value === '') {
		errorText.style.display = 'block';
		nameInput.classList.add('error');
	} else {
		errorText.style.display = 'none';
		nameInput.classList.remove('error');
	}
};

const checkCardNumber = () => {
	const infoCard = document.querySelector('.info-card');
	const errorText = infoCard.querySelector('.error-text');
	if (
		cardNumberInput.value === '' ||
		cardNumberInput.value.length < 16 ||
		/[a-zA-Z]/.test(cardNumberInput.value)
	) {
		errorText.style.display = 'block';
		cardNumberInput.classList.add('error');
	} else {
		errorText.style.display = 'none';
		cardNumberInput.classList.remove('error');
	}
};

const checkDate = () => {
	const infoDate = document.querySelector('.info-date');
	const errorText = infoDate.querySelector('.error-text');
	if (yearInput.value === '' && monthInput.value === '') {
		errorText.style.display = 'block';
		yearInput.classList.add('error');
		monthInput.classList.add('error');
	} else if (monthInput.value === '' && yearInput.value !== '') {
		errorText.style.display = 'block';
		monthInput.classList.add('error');
		yearInput.classList.remove('error');
	} else if (yearInput.value === '' && monthInput.value !== '') {
		errorText.style.display = 'block';
		yearInput.classList.add('error');
		monthInput.classList.remove('error');
	} else {
		errorText.style.display = 'none';
		monthInput.classList.remove('error');
		yearInput.classList.remove('error');
	}
};

const checkCardCvc = () => {
	const cvcBox = document.querySelector('.cvc-box');
	const errorText = cvcBox.querySelector('.error-text');
	if (cvcInput.value === '') {
		errorText.style.display = 'block';
		cvcInput.classList.add('error');
	} else {
		errorText.style.display = 'none';
		cvcInput.classList.remove('error');
	}
};
const checkErrors = () => {
	const allInputs = document.querySelectorAll('input');
	allInputs.forEach((input) => {
		if (input.classList.contains('error')) {
			errorCount++;
		}
	});
};

const checkInputs = () => {
	let errorCount = 0;
	checkCardName();
	checkCardNumber();
	checkDate();
	checkCardCvc();
	checkErrors();
	if (errorCount == 0) {
		name.textContent = nameInput.value;
		cardNumber.textContent = cardNumberInput.value
			.replace(/\D/g, '')
			.replace(/(\d{4})(?=\d)/g, '$1 ');
		dateMonth.textContent = monthInput.value;
		dateYear.textContent = yearInput.value;
		dateMonth.textContent = monthInput.value;
		dateYear.textContent = yearInput.value;
		cvcNumber.textContent = cvcInput.value;
		name.textContent = nameInput.value;
		popup.style.display = 'flex';
		infoBox.style.display = 'none';
	}
};

const closePopup = () => {
	popup.style.display = 'none';
	infoBox.style.display = 'flex';
};

confirmBtn.addEventListener('click', checkInputs);
continueBtn.addEventListener('click', closePopup);
