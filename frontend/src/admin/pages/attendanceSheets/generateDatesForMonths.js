const generateDatesForMonth = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const dates = [];

    // Get the number of days in the current month
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(year, month, day);
        const formattedDate = date.toISOString().split('T')[0]; // Format as YYYY-MM-DD
        dates.push(formattedDate);
    }

    return dates;
};

export default generateDatesForMonth