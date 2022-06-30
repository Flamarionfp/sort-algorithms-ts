export function bubbleSort(list: number[]) {
  let current = list[0];
  let next = list[1];
  let count = 0;
  const elementBreakIterator = list.length - 2;
  while (count < elementBreakIterator) {
    for (let i = 0; i < list.length - 1; i++) {
      if (current > next) {
        list[i] = next;
        list[i + 1] = current;
      }
      current = list[i + 1];
      next = list[i + 2];
    }
    count++
  }

  return list;
}

