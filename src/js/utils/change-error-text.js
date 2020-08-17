export function changeErrorText() {
    document.querySelector('.failed__heading').textContent = 'Во время запроса произошла ошибка.';
    document.querySelector('.failed__text').textContent = 'Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.';
}