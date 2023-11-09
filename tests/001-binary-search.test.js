import { describe, expect, it } from "vitest";
import { binarySearch } from "../src/001-binary-search";
import { binarySearchMock } from "./mocks/binary-search";

describe("binary search", () => {
  const sortedList = binarySearchMock.sort();

  it("return the exact index where the element is", () => {
    const randomIndex = Math.floor(Math.random() * sortedList.length);
    const randomItem = sortedList[randomIndex];

    expect(binarySearch(sortedList, randomItem)).toBe(randomIndex);
  });

  it("return null if the element was not found", () => {
    const searchedItem = "Fulaninho de Jesus";

    expect(binarySearch(sortedList, searchedItem)).toBeNull();
  });

  it("return exact first element index", () => {
    const searchedItem = sortedList[0];

    expect(binarySearch(sortedList, searchedItem)).toBe(0);
  });

  it("return exact last element index", () => {
    const lastPosition = sortedList.length - 1;
    const searchedItem = sortedList[lastPosition];

    expect(binarySearch(sortedList, searchedItem)).toBe(lastPosition);
  });

  it("return exact middle element index", () => {
    const middlePosition = Math.trunc((sortedList.length - 1) / 2);
    const searchedItem = sortedList[middlePosition];

    expect(binarySearch(sortedList, searchedItem)).toBe(middlePosition);
  });
});
