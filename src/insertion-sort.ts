export function insertionSort(
  items: any[],
  compareFn: (a: any, b: any) => boolean
) {
  for (let currentIndex = 0; currentIndex < items.length; currentIndex++) {
    let sortingIndex = currentIndex;

    while (
      sortingIndex > 0 &&
      compareFn(items[sortingIndex], items[sortingIndex - 1])
    ) {
      const storeValueTemporarily = items[sortingIndex];
      items[sortingIndex] = items[sortingIndex - 1];
      items[sortingIndex - 1] = storeValueTemporarily;

      sortingIndex--;
    }
  }

  return items;
}
