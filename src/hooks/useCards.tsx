import { useEffect, useState } from "react";

import { card } from "../components/AppCard";
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
  const [filteredCards, setFilteredCards] = useState(sortByName(searchedCards));
  const [filters, setFilters] = useState(new Map());
  const [sort, setSort] = useState("name");
  const [statuses, setStatuses] = useState(getStatusFilters(initialCards));
  const [languages, setLanguages] = useState(getLanguageFilters(initialCards));

  useEffect(() => {
    setStatuses(getStatusFilters(searchedCards));
    setLanguages(getLanguageFilters(searchedCards));
  }, [searchedCards]);

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
    let _filteredCards: card[] = searchedCards;
    // Filter status
    if (filters.get("status")?.length) {
      const statuses = new Set(filters.get("status"));
      _filteredCards = _filteredCards.filter((_card) =>
        statuses.has(_card.status)
      );
    }

    // Filter language
    if (filters.get("language")?.length) {
      const languages = new Set(filters.get("language"));
      _filteredCards = _filteredCards.filter((_card) => {
        return _card.languages.some((language) => languages.has(language));
      });
    }

    // handle sort
    if (sort === "name") {
      _filteredCards = sortByName(_filteredCards);
    } else if (sort === "updated") {
      _filteredCards = sortByUpdated(_filteredCards);
    }

    setFilteredCards(_filteredCards);
  }, [searchedCards, filters, sort]);

  return {
    filteredCards,
    setFilteredCards,
    statuses,
    languages,
    search,
    setFilter: handleSetFilter,
    setSort,
  };
}
