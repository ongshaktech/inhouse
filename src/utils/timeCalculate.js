export function timeCalculate(startedOn) {
  // Convert the started_on date to a Date object
  const startDate = new Date(startedOn);

  // Get the current date and time
  const currentDate = new Date();

  // Calculate the difference in milliseconds
  const timeDifference = currentDate - startDate;

  // Convert the time difference to different units
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  // Calculate the remaining hours, minutes, and seconds
  const remainingHours = hours % 24;
  const remainingMinutes = minutes % 60;
  const remainingSeconds = seconds % 60;

  // Display the time difference
  return `${days ? `${days} days, ` : ""}${
    remainingHours < 10 ? `0${remainingHours}` : remainingHours
  }:${
    remainingMinutes < 10 ? `0${remainingMinutes}` : remainingMinutes
  }: ${
    remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds
  }`;
}
