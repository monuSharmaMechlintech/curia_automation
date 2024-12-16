const generateRandomString = (length: number): string => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return Array.from({ length }, () =>
    characters.charAt(Math.floor(Math.random() * characters.length))
  ).join("");
};

const zipCodes = [
  "35203",
  "99501",
  "85001",
  "72201",
  "90001",
  "80202",
  "06103",
  "19901",
  "33101",
  "30303",
  "96813",
  "83702",
  "60601",
  "46204",
  "50309",
  "66101",
  "40202",
  "70112",
  "04101",
  "21201",
  "02108",
  "48226",
  "55101",
  "39201",
  "63101",
  "59601",
  "68102",
  "89501",
  "03301",
  "07102",
  "87501",
  "10001",
  "27601",
  "58102",
  "44114",
  "73102",
  "97201",
  "19102",
  "02903",
  "29201",
  "57104",
  "37203",
  "75201",
  "84101",
  "05602",
  "23219",
  "98001",
  "25301",
  "53202",
  "82001",
];

const generateRandomZipCode = (): string =>
  zipCodes[Math.floor(Math.random() * zipCodes.length)].replace(/\s+/g, "");

const generateRandomYear = (
  minYear: number = 1900,
  maxYear: number = 2024
): string =>
  (Math.floor(Math.random() * (maxYear - minYear + 1)) + minYear).toString();

const generateRandomNumberOfDigits = (digitCount) => {
  if (digitCount <= 0) throw new Error("Digit count must be greater than 0");

  const min = Math.pow(10, digitCount - 1);
  const max = Math.pow(10, digitCount) - 1;

  return (Math.floor(Math.random() * (max - min + 1)) + min).toString();
};

function generateRandomDateWithinYear(): string {
  const today = new Date();
  const oneYearFromToday = new Date();
  oneYearFromToday.setFullYear(today.getFullYear() + 1);

  const randomTimestamp =
    today.getTime() +
    Math.random() * (oneYearFromToday.getTime() - today.getTime());
  const randomDate = new Date(randomTimestamp);

  const month = (randomDate.getMonth() + 1).toString().padStart(2, "0");
  const day = randomDate.getDate().toString().padStart(2, "0");
  const year = randomDate.getFullYear();

  return `${month}-${day}-${year}`;
}
const generateRandomGenderInput = (): string => {
  const options = ['M', 'F', 'U'];  // The possible values
  return options[Math.floor(Math.random() * options.length)];  // Randomly selects one of the values
};
export {
  generateRandomString,
  generateRandomZipCode,
  generateRandomYear,
  generateRandomDateWithinYear,
  generateRandomNumberOfDigits,
  generateRandomGenderInput,
};
