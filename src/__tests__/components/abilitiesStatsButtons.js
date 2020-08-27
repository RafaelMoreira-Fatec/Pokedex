import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { PokedexContext } from "../../context/PokedexContext";
import AbilitiesStatsButtons from "../../components/AbilitiesStats";

describe("Abilites and Stats component", () => {
  test("Displays Pokemon stats", () => {
    const { getByTestId } = render(<AbilitiesStatsButtons />);
  });
});