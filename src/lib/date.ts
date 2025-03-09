/**
 * Calculates the number of years from a given date until now.
 * @param {string | Date} startDate - The start date in 'YYYY-MM-DD' format or as a Date object.
 * @returns {number} - The number of years from the start date until now.
 */
export function calculateYearsFromNow(startDate: string | Date) {
  // Convert the input to a Date object if it is a string
  const start = typeof startDate === "string" ? new Date(startDate) : startDate;
  const now = new Date();

  // Calculate the difference in years
  let yearsDifference = now.getFullYear() - start.getFullYear();

  // Adjust if the current date is before the anniversary of the start date in the current year
  const monthDifference = now.getMonth() - start.getMonth();
  const dayDifference = now.getDate() - start.getDate();

  if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
    yearsDifference--;
  }

  return yearsDifference;
}
