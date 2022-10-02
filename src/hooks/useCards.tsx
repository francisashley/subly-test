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
  // Store all of the cards
  const [allCards, setInitialCards] = useState(sortByName(defaultCards));
  // Store cards that have been filtered by the search query
  const [searchedCards, setSearchedCards] = useState(defaultCards);
  // Store cards that have been filtered search query and tags
  const [filteredCards, setFilteredCards] = useState(sortByName(searchedCards));

  // Store a list of the statuses and their amounts
  const [statuses, setStatuses] = useState(getStatusFilters(allCards));
  // Store a list of the languages and their amounts
  const [languages, setLanguages] = useState(getLanguageFilters(allCards));

  // Store the current search query
  const [searchQuery, setSearchQuery] = useState("");

  // Store the currently checked filters
  const [filters, setFilters] = useState(new Map());
  // Store the column to sort the results by
  const [sort, setSort] = useState("name");

  // Update the filter info when search results change.
  useEffect(() => {
    setStatuses(getStatusFilters(searchedCards));
    setLanguages(getLanguageFilters(searchedCards));
  }, [searchedCards]);

  // Filter the search results by the search query when the search query changes
  useEffect(() => {
    const _searchedCards = searchQuery
      ? filterBySearchQuery([...allCards], searchQuery)
      : [...allCards];
    setSearchedCards(_searchedCards);
  }, [searchQuery, allCards]);

  // Filter the search results when the checked filters change
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

  // The filters need some extra logic to toggle "on" or "off"
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

  // Delete a card
  function deleteCard(id: number) {
    setInitialCards(allCards.filter((card) => card.id !== id));
  }

  return {
    filteredCards,
    setFilteredCards,
    statuses,
    languages,
    setSearchQuery,
    setFilter: handleSetFilter,
    setSort,
    deleteCard,
  };
}
