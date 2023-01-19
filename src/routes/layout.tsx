import { component$, Slot, useStylesScoped$ } from "@builder.io/qwik";
import Header from "components/header";

import styles from "./layout.scss?inline";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <div class="layout">
      <Header />
      <main>
        <Slot />
      </main>
    </div>
  );
});
