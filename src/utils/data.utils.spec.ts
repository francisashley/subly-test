import { card } from "../components/MediaCard";
import cardsFixture from "../fixtures/cards.json";

const cards = cardsFixture.media as card[];

import {
  filterBySearchQuery,
  getLanguageFilters,
  getStatusFilters,
  sortByName,
  sortByUpdated,
} from "./data.utils";

test("filterBySearchQuery: filters by search query", () => {
  expect(filterBySearchQuery(cards, "Subly").length).toBe(1);
  expect(filterBySearchQuery(cards, "subly").length).toBe(1);
  expect(filterBySearchQuery(cards, "this").length).toBe(3);
});

test("getLanguageFilters: retrieves a list of all of the languages (+ times used) from all of the cards", () => {
  expect(getLanguageFilters(cards)).toEqual([
    { id: "en", label: "English", amount: 4 },
    { id: "nl", label: "Dutch", amount: 1 },
    { id: "cz", label: "Czech", amount: 1 },
  ]);
});

test("getStatusFilters: retrieves a list of all of the status filters (+ times used) from all of the cards", () => {
  expect(getStatusFilters(cards)).toEqual([
    { id: "ready", label: "Ready", amount: 2 },
    { id: "transcribing", label: "Transcribing", amount: 1 },
    { id: "error", label: "Error", amount: 1 },
  ]);
});

test("sortByName: Sort all the cards alphabetically by name", () => {
  expect(sortByName(cards).map((card) => card.name)).toEqual([
    "How to use to Subly",
    "This has an error",
    "This has many languages",
    "This is transcribing",
  ]);
});

test("sortByUpdated: Sort all the cards by updated date (most recent first)", () => {
  expect(sortByUpdated(cards).map((card) => card.updatedAt)).toEqual([
    "2021-07-03T22:17:00.000Z",
    "2021-07-03T22:11:00.000Z",
    "2021-06-03T19:12:00.000Z",
    "2021-05-01T10:00:00.000Z",
  ]);
});
