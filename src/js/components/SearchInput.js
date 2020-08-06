import { ERROR_MESSAGES } from '../constants/error-messages';

export default class SearchInput {
    constructor(button) {
        this.errorMessages = ERROR_MESSAGES;
        this.input = document.querySelector('.search__section-input');
        this.form = document.querySelector('.search__section-form');
        this.submitButton = button;
        this.setEventListeners();
    }

    checkInputValidity(input) {

        input.setCustomValidity("");


        if (input.validity.valueMissing) {
            input.setCustomValidity(this.errorMessages.empty);
            return false
        }


        if (input.validity.tooShort || input.validity.tooLong) {
            input.setCustomValidity(this.errorMessages.wrongLength);
            return false
        }

        return input.checkValidity();
    }

    isFormValid = () => {
        if (this.input.type !== 'submit' && this.input.type !== 'button') {
            this.input.parentNode.querySelector(`#${this.input.id}-error`).textContent = this.checkInputValidity(this.input) ? '' : this.input.validationMessage;
        }
    }

    setSubmitButtonState = (state) => {

        if (state) {    
          this.submitButton.removeAttribute('disabled');
    
        } else {
          this.submitButton.setAttribute('disabled', '');
        }   
      }

      handlerInputForm = (evt) => {        
        this.isFormValid(evt.target);
        if (this.form.checkValidity()) {
          this.setSubmitButtonState(true);
        } else {
          this.setSubmitButtonState(false)
        }
      }

    setEventListeners = () => {
        this.form.addEventListener('input', this.isFormValid);   
        this.form.addEventListener('input', this.handlerInputForm, true);       
      }

}

