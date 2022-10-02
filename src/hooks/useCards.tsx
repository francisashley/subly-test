import { useState, useEffect } from "react";
import { card } from "../AppCard";
import {
  filterBySearchQuery,
  getLanguageFilters,
  getStatusFilters,
  sortByName,
  sortByUpdated,
} from "../utils/data.utils";

export function useCards(defaultCards: card[]) {
  const [initialCards] = useState(sortByName(defaultCards));
  const [searchedCards, setSearchedCards] = useState(defaultCards);
  const [cards, setCards] = useState(sortByName(searchedCards));
  const [filters, setFilters] = useState(new Map());
  const [sort, setSort] = useState("");

  const statuses = getStatusFilters(initialCards);
  const languages = getLanguageFilters(initialCards);

  function search(searchQuery: string) {
    const _searchedCards = searchQuery
      ? filterBySearchQuery([...initialCards], searchQuery)
      : [...initialCards];
    setSearchedCards(_searchedCards);
  }

  const handleSetFilter = (group: string, filter: string, checked: boolean) => {
    let _filters: string[] = filters.get(group) ?? [];

    if (checked) {
      _filters = [..._filters, filter];
    } else {
      _filters = _filters.filter((_filter) => _filter !== filter);
    }

    filters.set(group, _filters);
    setFilters(new Map(filters));
  };

  useEffect(() => {
    let _cards: card[] = searchedCards;
    // Filter status
    if (filters.get("status")?.length) {
      const statuses = new Set(filters.get("status"));
      _cards = _cards.filter((_card) => statuses.has(_card.status));
    }

    // Filter language
    if (filters.get("language")?.length) {
      const languages = new Set(filters.get("language"));
      _cards = _cards.filter((_card) => {
        return _card.languages.some((language) => languages.has(language));
      });
    }

    // handle sort
    if (sort === "name") {
      _cards = sortByName(cards);
    } else if (sort === "updated") {
      _cards = sortByUpdated(cards);
    }

    setCards(_cards);
  }, [searchedCards, filters, sort]);

  return {
    cards,
    setCards,
    statuses,
    languages,
    search,
    setFilter: handleSetFilter,
    setSort,
  };
}
