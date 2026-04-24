import { format } from "date-fns";
import { ro, enGB, enUS } from "date-fns/locale";
import { Temporal } from "@js-temporal/polyfill";

const languages = ["en-US", "en-GB", "ro-RO"];
const lang_mapping = { "en-US": enUS, "en-GB": enGB, "ro-RO": ro };

languages.map((lang) => {
  const today = new Date();

  // const val = new Intl.DateTimeFormat(lang, {
  //   dateStyle: "full",
  //   timeStyle: "short",
  // }).format(today);

  const val = format(today, "EEEE, LLLL dd, yyyy hh:mm", {
    locale: lang_mapping[lang],
  });

  // console.log(lang, val);
});

// languages.map((lang) => {
//   const rtf = new Intl.RelativeTimeFormat(lang, {
//     style: "long",
//     numeric: "auto",
//   });

//   const val = rtf.format(2, "day");
//   console.log(lang, val);
// });

languages.map((lang) => {
  const jsheroes_2025 = new Temporal.PlainDateTime(2025, 5, 29, 9, 30);
  const jsheroes_2026 = Temporal.Now.plainDateTimeISO();
  const duration = jsheroes_2026.since(jsheroes_2025);

  const val = new Intl.DurationFormat(lang, {
    style: "digital",
  }).format(duration);

  console.log(lang, val);
});
