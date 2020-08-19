export function getMonth(array, month) {
    array.forEach(card => {
        const thisMonth = new Date(card.publishedAt).toLocaleString('ru', { month: 'long' });
        month.textContent = `(${thisMonth.toUpperCase()})`;
    });
}