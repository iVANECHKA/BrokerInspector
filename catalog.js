$(document).ready(function () {
  $('.news-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    prevArrow: document.querySelector('.previous-arrow'),
    nextArrow: document.querySelector('.next-arrow')
  });
});

// Селектор из попапа

$(".default_option").click(function () {
  $(this).parent().toggleClass("active");
});

$(".select_ul li").click(function () {
  var currentele = $(this).html();
  $(".default_option li").html(currentele);
  $(this).parents(".select_wrap").removeClass("active");
});

// Маска для ввода номера телефона

$.mask.definitions['h'] = "[0|1|3|4|5|6|7|9]"
$(".tel-input").mask("+7 (h99) 999-99-99");



// Открытие/Закрытие попапа

function openPopup (popup) {
  popup.fadeIn(300);
}

function closePopup (popup) {
  popup.fadeOut(300);
}


// Слушатели

$('.intro-ad-button').click(() => {
  openPopup($('.consult-popup'))
});

$('.popup-close-btn').click(() => {
  closePopup($('.popup-bg'))
});

$('.consult-button').click((e) => {
  e.preventDefault()
});


// Валидация

const checkInputValidity = (formElement, inputElement, validationSettings) => {
  if (inputElement.validity.patternMismatch) {
    inputElement.setCustomValidity(inputElement.dataset.errorMessage);
  } else {
    inputElement.setCustomValidity('');
  }

  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, validationSettings);
  } else {
    hideInputError(formElement, inputElement, validationSettings);
  }
};

const showInputError = (formElement, inputElement, errorMessage, validationSettings) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(validationSettings.inputError);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(validationSettings.inputErrorActive);
};

const hideInputError = (formElement, inputElement, validationSettings) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(validationSettings.inputError);
  errorElement.classList.remove(validationSettings.inputErrorActive);
  errorElement.textContent = '';
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
  return !inputElement.validity.valid;
}); 
}

const toggleButtonState = (inputList, buttonElement, validationSettings) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(validationSettings.saveBtnInactive);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(validationSettings.saveBtnInactive);
    buttonElement.disabled = false;
  }
}



const setEventListeners = (formElement, validationSettings) => {

  const inputList = Array.from(formElement.querySelectorAll(validationSettings.popupInput));
  const buttonElement = formElement.querySelector(validationSettings.saveBtn);

  toggleButtonState(inputList, buttonElement, validationSettings);

  formElement.addEventListener('reset', () => {
    setTimeout(() => {
      toggleButtonState(inputList, buttonElement, validationSettings);
    }, 0);
    
  });
  
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, validationSettings);
      toggleButtonState(inputList, buttonElement, validationSettings);
    });
  });
};

  const enableValidation = (validationSettings) => {
  const formList = Array.from(document.querySelectorAll(validationSettings.popupForm));
  formList.forEach((formElement) => {

    formList.forEach(formElement => {
      setEventListeners(formElement, validationSettings);
    })
    
  });
};

const validationSettings = {
  popupForm: '.popup-form',
  popupInput: '.popup-input',
  saveBtn: '.popup-button',
  saveBtnInactive: 'popup-button-inactive',
  inputError: 'popup-input-type-error',
  inputErrorActive: 'popup-input-error-active',
};

enableValidation(validationSettings);