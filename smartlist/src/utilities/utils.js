export function formatDate(date) {
    const dateObj = new Date(date);
    
    const monthNames = {
        1: 'January', 2: 'February', 3: 'March', 4: 'April',
        5: 'May', 6: 'June', 7: 'July', 8: 'August',
        9: 'September', 10: 'October', 11: 'November', 12: 'December'
    };
    
    const day = dateObj.getDate();
    const month = dateObj.getMonth() + 1;
    const year = dateObj.getFullYear();
    
    return `${monthNames[month]} ${day}, ${year}`;
}

export function formatTimeFromMilitary(time) {
    // Handle different time formats: "14:30", "14:30:00", "2:30 PM", etc.
    let timeStr = time;
    
    // If it's already in standard format (contains AM/PM), return as is
    if (timeStr.includes('AM') || timeStr.includes('PM')) {
        return timeStr;
    }
    
    // Split the time string to get hours and minutes
    const timeParts = timeStr.split(':');
    let hours = parseInt(timeParts[0]);
    const minutes = timeParts[1] || '00';
    
    // Determine AM or PM
    const period = hours >= 12 ? 'PM' : 'AM';
    
    // Convert to 12-hour format
    if (hours === 0) {
        hours = 12; // Midnight (00:xx) becomes 12:xx AM
    } else if (hours > 12) {
        hours = hours - 12; // 13:xx becomes 1:xx PM, etc.
    }
    
    return `${hours}:${minutes} ${period}`;
}

export function sortTasksByPriority(tasks) {
    return tasks.sort((a, b) => a.priority - b.priority);
}

