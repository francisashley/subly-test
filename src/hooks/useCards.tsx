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
  const [cards, setCards] = useState(sortByName(initialCards));
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState(new Map());
  const [sort, setSort] = useState("");

  const statuses = getStatusFilters(initialCards);
  const languages = getLanguageFilters(initialCards);

  useEffect(() => {
    // filter searchQuery
    let parsedCards: card[] = searchQuery
      ? filterBySearchQuery([...initialCards], searchQuery)
      : [...initialCards];

    // Filter status
    if (filters.get("status")?.length) {
      const statuses = new Set(filters.get("status"));
      parsedCards = parsedCards.filter((parsedCard) => {
        return statuses.has(parsedCard.status);
      });
    }

    // Filter language
    if (filters.get("language")?.length) {
      const languages = new Set(filters.get("language"));
      parsedCards = parsedCards.filter((parsedCard) => {
        return parsedCard.languages.some((language) => languages.has(language));
      });
    }

    // handle sort
    if (sort === "name") {
      parsedCards = sortByName(cards);
    } else if (sort === "updated") {
      parsedCards = sortByUpdated(cards);
    }

    setCards(parsedCards);
  }, [searchQuery, filters, sort]);

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

  return {
    cards,
    setCards,
    statuses,
    languages,
    setSearchQuery,
    setFilter: handleSetFilter,
    setSort,
  };
}
