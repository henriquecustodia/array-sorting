export function quickSort(
  items: any[],
  compareFn: (a: any, b: any) => boolean
) {
  
  sort(items, 0, items.length - 1, compareFn);

  return items;
}

function sort(items: any[], left: number, right: number, compareFn: (a: any, b: any) => boolean) {
  if (left < right) {
    const pivotIndex = partition(items, left, right, compareFn);

    sort(items, left, pivotIndex - 1, compareFn);
    sort(items, pivotIndex + 1, right, compareFn);
  }
}

function partition(items: any[], left: number, right: number, compareFn: (a: any, b: any) => boolean) {
  const pivot = items[left];
  let i = left;

  for (let j = left + 1; j <= right; j++) {
    if (compareFn(pivot, items[j])) {
      i += 1;
      swap(items, i, j);
    }
  }

  swap(items, left, i);

  return i;
}

function swap(items: any[], index1: number, index2: number) {
  const tmp = items[index1];
  items[index1] = items[index2];
  items[index2] = tmp;
}
