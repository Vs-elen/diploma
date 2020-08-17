import {LAST_SEVEN_DAYS} from '../constants/constants'

export function showLastWeek() {
    let lastWeekDate = new Date();
    lastWeekDate.setDate(lastWeekDate.getDate() - LAST_SEVEN_DAYS);

    return lastWeekDate.toISOString();
}