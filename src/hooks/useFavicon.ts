import { useClientEffect$ } from "@builder.io/qwik";

export const useFavicon = (icon: string) => {
  return useClientEffect$(() => {
    let link = document.querySelector<HTMLLinkElement>("link[rel~='icon']");

    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.getElementsByTagName("head")[0].appendChild(link);
    }

    link.href = icon;
  });
};
