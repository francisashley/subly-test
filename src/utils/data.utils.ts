import { card } from "../components/AppCard";
import { filter } from "../components/AppFilters";

const langNames = {
  en: "English",
  nl: "Dutch",
  cz: "Czech",
} as { [key: string]: string };

export function getLanguageFilters(cards: card[]): filter[] {
  const languages: { [key: string]: number } = {};
  cards.forEach((card) => {
    card.languages.forEach((language) => {
      languages[language] = (languages[language] || 0) + 1;
    });
  });
  return Object.keys(languages).map((language) => ({
    id: language,
    label: langNames[language],
    amount: languages[language],
  }));
}

const statusNames = {
  ready: "Ready",
  transcribing: "Transcribing",
  error: "Error",
} as { [key: string]: string };

export function getStatusFilters(cards: card[]): filter[] {
  const statuses: { [key: string]: number } = {
    ready: 0,
    transcribing: 0,
    error: 0,
  };
  cards.forEach((card) => {
    statuses[card.status] = (statuses[card.status] || 0) + 1;
  });
  return Object.keys(statuses).map((status) => ({
    id: status,
    label: statusNames[status],
    amount: statuses[status],
  }));
}

export function sortByName(cards: card[]) {
  return [...cards].sort((a, b) => (b.name > a.name ? -1 : 1));
}

export function sortByUpdated(cards: card[]) {
  return [...cards].sort((b, a) => (b.updatedAt < a.updatedAt ? 1 : -1));
}

export function filterBySearchQuery(cards: card[], searchQuery: string) {
  searchQuery = searchQuery.toLowerCase();
  return cards.filter((card) => card.name.toLowerCase().includes(searchQuery));
}

export default {
  getLanguageFilters,
  getStatusFilters,
  sortByName,
  sortByUpdated,
  filterBySearchQuery,
};
