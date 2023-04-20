export default function returnHowManyArguments(...args) {
  let totalNumberOfArgs = 0;
  // eslint-disable-next-line no-unused-vars
  for (const _ of args) {
    totalNumberOfArgs += 1;
  }
  return totalNumberOfArgs;
}
