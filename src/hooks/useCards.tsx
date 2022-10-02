import { useState } from "react";
import { card } from "../AppCard";
import {
  filterBySearchQuery,
  getLanguageFilters,
  getStatusFilters,
  sortByName,
  sortByUpdated,
} from "../utils/data.utils";

export function useCards(initialCards: card[]) {
  const [cards, setCards] = useState(sortByName(initialCards));
  const [filteredCards, setFilteredCards] = useState(sortByName(cards));

  const statuses = getStatusFilters(cards);
  const languages = getLanguageFilters(cards);

  const setSearchQuery = (searchQuery: string) => {
    setCards(
      searchQuery ? filterBySearchQuery(cards, searchQuery) : initialCards
    );
  };

  const setFilter = () => alert("filtering");

  const setSort = (type: string) => {
    if (type === "name") {
      setCards(sortByName(cards));
    } else if (type === "updated") {
      setCards(sortByUpdated(cards));
    }
  };

  return {
    cards,
    setCards,
    filteredCards,
    setFilteredCards,
    statuses,
    languages,
    setSearchQuery,
    setFilter,
    setSort,
  };
}
