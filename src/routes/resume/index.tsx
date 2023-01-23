import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Resume from "components/resume";
import { Speak } from "qwik-speak";

export default component$(() => {
  return (
    <Speak assets={["resume"]}>
      <Resume />
    </Speak>
  );
});

export const head: DocumentHead = {
  title: "Resume — Mikkel O. Laursen",
  meta: [
    {
      name: "description",
      content: "Resume for Mikkel O. Laursen",
    },
  ],
};
