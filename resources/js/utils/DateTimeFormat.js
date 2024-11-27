export function formatFriendlyDateTime(dateTime) {
        const date = new Date(dateTime);
        
        // Check if the date is valid
        if (isNaN(date)) {
            throw new Error("Invalid date format");
        }

        // Options for formatting the date
        const options = {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            hour12: true, // Use 12-hour format
        };

        // Format the date
        return new Intl.DateTimeFormat("en-US", options).format(date);
    }

//Example usage
// const friendlyDate = formatFriendlyDateTime("2024-11-23T19:03:10.000000Z");
// console.log(friendlyDate); // Output: "November 23, 2024, 7:03 PM"
