import { merge } from "../logic";
describe("merge function", () => {
  it("should merge three collections correctly", () => {
    const collection_1 = [1, 3, 5];
    const collection_2 = [6, 4, 2];
    const collection_3 = [0, 7, 8];
    const mergedCollection = merge(collection_1, collection_2, collection_3);
    expect(mergedCollection).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  });
  it("should handle collections with duplicate elements", () => {
    const collection_1 = [1, 3, 5, 5];
    const collection_2 = [6, 2, 2];
    const collection_3 = [0, 7, 8, 8];
    const mergedCollection = merge(collection_1, collection_2, collection_3);
    expect(mergedCollection).toEqual([0, 1, 2, 2, 3, 5, 5, 6, 7, 8, 8]);
  });
  it("should handle empty collections", () => {
    const collection_1: number[] = [];
    const collection_2: number[] = [];
    const collection_3: number[] = [];
    const mergedCollection = merge(collection_1, collection_2, collection_3);
    expect(mergedCollection).toEqual([]);
  });

  it("should handle single element collections", () => {
    const collection_1 = [1];
    const collection_2 = [2];
    const collection_3 = [3];
    const mergedCollection = merge(collection_1, collection_2, collection_3);
    expect(mergedCollection).toEqual([1, 2, 3]);
  });
});
