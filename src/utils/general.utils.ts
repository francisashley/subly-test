import formatDistanceStrict from "date-fns/formatDistanceStrict";

export function getTimeAgo(date: string) {
  return formatDistanceStrict(new Date(date), new Date(), { addSuffix: true });
}

export default {
  getTimeAgo,
};
