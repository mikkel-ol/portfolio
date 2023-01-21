import { component$ } from "@builder.io/qwik";
import Resume from "components/resume";
import { Speak } from "qwik-speak";
import { head as Head } from "..";

export default component$(() => {
  return (
    <Speak assets={["resume"]}>
      <Resume />
    </Speak>
  );
});

// why?
export const head = Head;
