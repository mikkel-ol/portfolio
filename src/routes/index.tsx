import { component$, useStylesScoped$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import UnderConstruction from "components/under-construction";

import styles from "./index.scss?inline";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <div class="container">
      <UnderConstruction></UnderConstruction>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Portfolio — Mikkel O. Laursen",
  meta: [
    {
      name: "description",
      content: "Portfolio for Mikkel O. Laursen",
    },
  ],
};
