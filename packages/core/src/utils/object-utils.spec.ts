import { clone, cloneDeep } from "./object-utils";

const obj = {
  _id: "5cf6381456ea900e9eedcfa0",
  index: 0,
  guid: "0b009ede-d6fa-44c2-8902-a711670a6c80",
  isActive: false,
  balance: "$3,206.63",
  tags: ["do", "esse", "velit", "duis", "veniam", "commodo", "velit"],
  friends: [
    {
      id: 0,
      name: "Wells Elliott"
    },
    {
      id: 1,
      name: "Roslyn Bartlett"
    },
    {
      id: 2,
      name: "Black Lott"
    }
  ],
  greeting: "Hello, undefined! You have 10 unread messages.",
  favoriteFruit: "banana",
  inner: {
    _id: "5cf63814766920868e871071",
    index: 1,
    guid: "883922ee-d414-44b7-847a-6e617c3ee72b",
    isActive: false,
    balance: "$3,207.86",
    tags: [
      "non",
      "ullamco",
      "incididunt",
      "pariatur",
      "esse",
      "deserunt",
      "minim"
    ],
    friends: [
      {
        id: 0,
        name: "Fischer Banks"
      },
      {
        id: 1,
        name: "Avis Puckett"
      },
      {
        id: 2,
        name: "Sampson Spence"
      }
    ],
    greeting: "Hello, undefined! You have 4 unread messages.",
    favoriteFruit: "strawberry"
  }
};

it("should do shallow copy", () => {
  const cloned = clone(obj);

  expect(cloned).not.toBe(obj);
  expect(cloned).toEqual(obj);

  expect(cloned.inner).toBe(obj.inner);
});

it("should do deep copy", () => {
  const cloned = cloneDeep(obj);

  expect(cloned).not.toBe(obj);
  expect(cloned).toEqual(obj);

  expect(cloned.inner).not.toBe(obj.inner);
});
