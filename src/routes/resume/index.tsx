import { component$ } from "@builder.io/qwik";
import Resume from "components/resume";
import { head as Head } from "..";

export default component$(() => {
  return <Resume />;
});

// why?
export const head = Head;
