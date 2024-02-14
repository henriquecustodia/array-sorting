export function bubbleSort(
  items: any[],
  compareFn: (a: any, b: any) => boolean
) {
  for (let currentIndex = 0; currentIndex < items.length; currentIndex++) {
    for (let sortingIndex = 1; sortingIndex < items.length - currentIndex; sortingIndex++) {
      if (compareFn(items[sortingIndex], items[sortingIndex - 1])) {
        const storeValueTemporarily = items[sortingIndex];
        items[sortingIndex] = items[sortingIndex - 1];
        items[sortingIndex - 1] = storeValueTemporarily;
      }
    }
  }

  return items;
}
