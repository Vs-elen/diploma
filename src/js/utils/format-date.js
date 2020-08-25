export function formatDate(date) {
    let newDate = new Date(date);
    let monthes = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    let day = newDate.getDate();
    let month = monthes[newDate.getMonth()];
    let year = newDate.getFullYear();
    let newDateCommit = (day + ' ' + month + ', ' + year);
    return newDateCommit;
}

export function formatDateForGraph(date) {
    let newDate = new Date(date);
    let weeks = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
    let day = newDate.getDate();
    let week = weeks[newDate.getDay()];
    let newDateCommit = (day + ', ' + week);
    return newDateCommit;
}