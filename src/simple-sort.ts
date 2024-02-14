export function simpleSort(
  items: any[],
  compareFn: (a: any, b: any) => boolean
) {
  for (let i = 0; i < items.length; i++) {
    for (let j = 1; j < items.length; j++) {
      if (compareFn(items[j], items[j - 1])) {
        const tmp = items[j];
        items[j] = items[j - 1];
        items[j - 1] = tmp;
      }
    }
  }

  return items;
}
