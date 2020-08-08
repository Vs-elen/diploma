import './index.css';
import SearchInput from '../../js/components/SearchInput';

const searchButton = document.querySelector('.search__section-button');

const searchInput = new SearchInput(searchButton);


searchInput.setSubmitButtonState();


