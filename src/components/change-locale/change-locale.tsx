import { $, component$ } from "@builder.io/qwik";
import { useLocation, useNavigate } from "@builder.io/qwik-city";
import { changeLocale, useSpeakContext, type SpeakLocale } from "qwik-speak";
import { config } from "src/speak-config";

export default component$(() => {
  const loc = useLocation();
  const nav = useNavigate();

  const ctx = useSpeakContext();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const changeLocale$ = $(async (locale: SpeakLocale) => {
    await changeLocale(locale, ctx);

    // E.g. Store locale in cookie
    document.cookie = `locale=${JSON.stringify(locale)};max-age=86400;path=/`;

    // E.g. Replace locale in URL
    let pathname = loc.pathname;
    if (loc.params.lang) {
      if (locale.lang !== config.defaultLocale.lang) {
        pathname = pathname.replace(loc.params.lang, locale.lang);
      } else {
        pathname = pathname.replace(new RegExp(`(/${loc.params.lang}/)|(/${loc.params.lang}$)`), "/");
      }
    } else if (locale.lang !== config.defaultLocale.lang) {
      pathname = `/${locale.lang}${pathname}`;
    }

    // No full-page reload
    nav.path = pathname;
  });

  return <></>;
});
