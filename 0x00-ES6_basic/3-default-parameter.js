// export default function getSumOfHoods(
//   initialNumber,
//   expansion1989 = 89,
//   expansion2019 = 19
// ) {
//   if (expansion1989 && expansion2019 !== undefined)
//     return initialNumber + expansion1989 + expansion2019;
// }

const getSumOfHoods = (initialNumber, expansion1989, expansion2019) =>
  initialNumber + expansion1989
    ? expansion1989
    : 89 + expansion2019
    ? expansion2019
    : 19;

export default getSumOfHoods;
