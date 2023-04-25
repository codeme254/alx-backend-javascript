/* eslint-disable consistent-return */
const getTheRestOfTheString = (startString, mainString) => {
  if (!startString || startString === '') return;
  if (startString.length > mainString.length) return;
  let i = 0;
  let finalString = '';

  while (i < startString.length) {
    if (startString[i] !== mainString[i]) return;
    i += 1;
  }

  while (i < mainString.length) {
    finalString += mainString[i];
    i += 1;
  }
  return finalString;
};
// getTheRestOfTheString("don", "donkey");
// getTheRestOfTheString("bon", "bonjovi")

export default function cleanSet(set, startString) {
  const finalStringsArray = [];
  set.forEach((element) => {
    const restOfStringFromCurrentElement = getTheRestOfTheString(startString, element);
    if (restOfStringFromCurrentElement && restOfStringFromCurrentElement !== '') {
      finalStringsArray.push(restOfStringFromCurrentElement);
    }
  });
  return finalStringsArray.join('-');
}
