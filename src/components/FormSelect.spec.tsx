import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import FormSelect from "./FormSelect";

test("<FormSelect /> works as expected", async () => {
  const user = userEvent.setup();

  const options = [
    { value: "apples", name: "Apples" },
    { value: "pears", name: "Pears" },
    { value: "oranges", name: "Oranges" },
  ];

  const onInput = jest.fn();
  render(<FormSelect id="test" options={options} onInput={onInput} />);

  // Renders the select input
  expect(await screen.getAllByRole("option").length).toBe(3);
  expect(
    (screen.getAllByRole("option")[0] as HTMLOptionElement).selected
  ).toBeTruthy();
  expect(
    (screen.getAllByRole("option")[1] as HTMLOptionElement).selected
  ).toBeFalsy();
  expect(
    (screen.getAllByRole("option")[2] as HTMLOptionElement).selected
  ).toBeFalsy();

  // The user can select another option
  await user.selectOptions(screen.getByRole("combobox"), "pears");
  expect(onInput).toHaveBeenCalledTimes(1);
  expect(
    (screen.getAllByRole("option")[0] as HTMLOptionElement).selected
  ).toBeFalsy();
  expect(
    (screen.getAllByRole("option")[1] as HTMLOptionElement).selected
  ).toBeTruthy();
  expect(
    (screen.getAllByRole("option")[2] as HTMLOptionElement).selected
  ).toBeFalsy();
});
