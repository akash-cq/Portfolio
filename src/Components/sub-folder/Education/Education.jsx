import React from "react";
import Cards from "../cards";
import { education } from "../../../constant";
export default function Education() {
  return (
    <section id="education">
      <Cards
        contents={education}
        cardFor="EDUCATION"
        desc="my education background "
      ></Cards>
    </section>
  );
}
