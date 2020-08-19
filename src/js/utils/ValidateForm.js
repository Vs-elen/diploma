import { ERROR_MESSAGES } from '../constants/error-messages';

export default class ValidateForm  {
    constructor (input, form, button) {
        this.errorMessages = ERROR_MESSAGES;
        this._input = input;
        this._form = form;
        this._submitButton = button;
        this._setEventListeners();
    }

    _checkInputValidity(input) {

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
        if (this._input.type !== 'submit' && this._input.type !== 'button') {
          this._input.parentNode.querySelector(`#${this._input.id}-error`).textContent = this._checkInputValidity(this._input) ? '' : this._input.validationMessage;
        }
      }
    
      setSubmitButtonState = (state) => {
    
        if (state) {
          this._submitButton.removeAttribute('disabled');
    
        } else {
          this._submitButton.setAttribute('disabled', '');
        }
      }
    
      handlerInputForm = (evt) => {
        this.isFormValid(evt.target);
        if (this._form.checkValidity()) {
          this.setSubmitButtonState(true);
        } else {
          this.setSubmitButtonState(false)
        }
      }
    
      _setEventListeners = () => {
        this._form.addEventListener('input', this.isFormValid);
        this._form.addEventListener('input', this.handlerInputForm, true);
      }
}