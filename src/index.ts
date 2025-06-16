import { merge } from "./logic";

const collection_1 = [1, 3, 5];
const collection_2 = [6, 4, 2];
const collection_3 = [0, 7, 8];
const mergedCollection = merge(collection_1, collection_2, collection_3);
console.log("output:", mergedCollection); // Output: [0, 1, 2, 3, 4, 5, 6, 7, 8]
