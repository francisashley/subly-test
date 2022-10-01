import { card } from "../AppCard";
import { filter } from "../AppFilters";

const langNames = {
  en: "English",
  nl: "Dutch",
  cz: "Czech",
} as { [key: string]: string };

export function getLanguageFilters(cards: card[]): filter[] {
  const langs = new Set(cards.map((card) => card.languages).flat());
  return Array.from(langs).map((lang) => ({
    id: lang,
    label: langNames[lang],
  }));
}

const statusNames = {
  ready: "Complete",
  transcribing: "Processing",
  error: "Error",
} as { [key: string]: string };

export function getStatusFilters(cards: card[]): filter[] {
  const statuses = new Set(cards.map((card) => card.status));
  return Array.from(statuses).map((status) => ({
    id: status,
    label: statusNames[status],
  }));
}

export default {
  getLanguageFilters,
  getStatusFilters,
};
