export function binarySearch(sortedList, searchedItem) {
  let firstPosition = 0;
  let lastPosition = sortedList.length - 1;

  while (firstPosition <= lastPosition) {
    const middle = Math.trunc((firstPosition + lastPosition) / 2);
    const guess = sortedList[middle];

    if (guess === searchedItem) {
      return middle;
    }

    if (guess > searchedItem) {
      lastPosition = middle - 1;
    } else {
      firstPosition = middle + 1;
    }
  }

  return null;
}
