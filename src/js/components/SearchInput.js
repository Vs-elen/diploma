
export default class SearchInput {
  constructor(sendQueryCallback) {
    this.form = document.querySelector('.search__section-form');
    this.sendQueryCallback = sendQueryCallback;
    this.setEventListeners();
  }

    setEventListeners = () => {
        this.form.addEventListener('submit', this.sendQueryCallback)
        
  }
}

