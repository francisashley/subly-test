import { getTimeAgo } from "./general.utils";

test("getTimeAgo: returns formatted ago date", () => {
  expect(getTimeAgo("2021-05-01T10:00:00.000Z")).toBe("1 year ago");
});
