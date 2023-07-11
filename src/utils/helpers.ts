export const calculateAge = (day: number, month: number, year: number) => {
    const today = new Date();
    const todayYear = today.getFullYear();
    const todayMonths = today.getMonth();
    const todayDays = today.getDate()

    const ageYears = todayYear - year;
    const ageMonths = todayMonths - month;
    const ageDays = todayDays - day;
    return { ageYears, ageMonths, ageDays };
}