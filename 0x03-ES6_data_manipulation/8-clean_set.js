/* eslint-disable consistent-return */
// const getTheRestOfTheString = (startString, mainString) => {
//   if (!startString || startString === '') return;
//   if (typeof startString !== 'string') return;
//   if (startString.length > mainString.length) return;
//   let i = 0;
//   let finalString = '';

//   while (i < startString.length) {
//     if (startString[i] !== mainString[i]) return;
//     i += 1;
//   }

//   while (i < mainString.length) {
//     finalString += mainString[i];
//     i += 1;
//   }
//   return finalString;
// };
// // getTheRestOfTheString("don", "donkey");
// // getTheRestOfTheString("bon", "bonjovi")

// export default function cleanSet(set, startString) {
//   if (
//     !set && !startString && !(set instanceof Set) && typeof startString !== 'string'
//   ) {
//     return '';
//   }
//   const finalStringsArray = [];
//   set.forEach((element) => {
//     const restOfStringFromCurrentElement = getTheRestOfTheString(startString, element);
//     if (restOfStringFromCurrentElement && restOfStringFromCurrentElement !== '') {
//       finalStringsArray.push(restOfStringFromCurrentElement);
//     }
//   });
//   return finalStringsArray.join('-');
// }

export default function cleanSet(set, startString) {
  if (
    !set && !startString && !(set instanceof Set) && typeof startString !== 'string'
  ) {
    return '';
  }

  const parts = [];

  for (const value of set.values()) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      const valueSubStr = value.substring(startString.length);

      if (valueSubStr && valueSubStr !== value) {
        parts.push(valueSubStr);
      }
    }
  }
  return parts.join('-');
}
