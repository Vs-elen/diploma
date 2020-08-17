export function formatDate(date) {
    let newDate = new Date(date);
    let monthes = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    let day = newDate.getDate();
    let month = monthes[newDate.getMonth()];
    let year = newDate.getFullYear();
    let newDateCommit = (day + ' ' + month + ', ' + year);
    return newDateCommit;
}