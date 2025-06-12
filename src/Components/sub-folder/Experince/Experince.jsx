import React from "react";
import { experiences } from "../../../constant";
import Cards from "../cards";
export default function Experince() {
  return (
    <Cards
      contents={experiences}
      cardFor="EXPERIENCE"
      desc="A collection of my work experience and the roles i have taken various organisation."
    />
  );
}
