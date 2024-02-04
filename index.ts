import { insertionSort } from "./src/insertion-sort";

const createRandomInput = () =>
  Array.from({ length: 10 }, () => Math.floor(Math.random() * 100) + 1);

function test(label: string, sortFn: any) {
  const input = createRandomInput();
  console.group(label);

  console.log("Input:", input);
  console.log(
    "Output:",
    sortFn(input, (a: any, b: any) => a < b)
  );
  console.groupEnd();
}

test("Insertion Sort", insertionSort);
