export default function getSumOfHoods(
  initialNumber,
  expansion1989,
  expansion2019
) {
  if (expansion1989 && expansion2019 !== undefined)
    return initialNumber + expansion1989 + expansion2019;
}
