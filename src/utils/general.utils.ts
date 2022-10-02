import formatDistance from "date-fns/formatDistance";

export function getTimeAgo(date: string) {
  return formatDistance(new Date(date), new Date(), { addSuffix: true });
}

export default {
  getTimeAgo,
};
