import { component$ } from "@builder.io/qwik";

/**
 * LaTeX text
 */
export default component$(() => {
  return (
    <span
      class="texhtml"
      style="font-family: 'CMU Serif', cmr10, LMRoman10-Regular, 'Times New Roman', 'Nimbus Roman No9 L', Times, serif"
    >
      L
      <span style="text-transform: uppercase; font-size: 70%; margin-left: -0.36em; vertical-align: 0.3em; line-height: 0; margin-right: -0.15em;">
        a
      </span>
      T
      <span style="text-transform: uppercase; margin-left: -0.1667em; vertical-align: -0.5ex; line-height: 0; margin-right: -0.125em;">
        e
      </span>
      X
    </span>
  );
});
