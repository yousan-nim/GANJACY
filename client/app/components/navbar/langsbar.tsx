import React from "react";
import { BsCart4 } from "react-icons/bs";
import { FaUserLarge } from "react-icons/fa6";

const langs = [
  { lang: "en", label: "English", img: "./langs/en.png", href: "/en" },
  { lang: "ar", label: "Arabic", img: "./langs/ar.png", href: "/ar" },
  { lang: "de", label: "German", img: "./langs/de.png", href: "/de" },
  { lang: "es", label: "Spanish", img: "./langs/es.png", href: "/es" },
  { lang: "fr", label: "French", img: "./langs/fr.png", href: "/fr" },
  { lang: "he", label: "Hebrew", img: "./langs/he.png", href: "/he" },
  { lang: "hi", label: "Hindi", img: "./langs/hi.png", href: "/hi" },
  { lang: "it", label: "Italian", img: "./langs/it.png", href: "/it" },
  { lang: "ja", label: "Japanese", img: "./langs/ja.png", href: "/ja" },
  { lang: "ko", label: "Korean", img: "./langs/ko.png", href: "/ko" },
  { lang: "nl", label: "Dutch", img: "./langs/nl.png", href: "/nl" },
  { lang: "ru", label: "Russian", img: "./langs/ru.png", href: "/ru" },
  { lang: "th", label: "Thai", img: "./langs/th.png", href: "/th" },
  { lang: "uk", label: "United Kingdom", img: "./langs/uk.png", href: "/uk" },
  { lang: "vi", label: "Vietnamese", img: "./langs/vi.png", href: "/vi" },
  {
    lang: "zh-hans",
    label: "Simplified Chinese",
    img: "./langs/zh-hans.png",
    href: "/zh-hans",
  },
  {
    lang: "zh-hant",
    label: "Traditional Chinese",
    img: "./langs/zh-hant.png",
    href: "/zh-hant",
  },
];

const LangsBar = () => {
  const items = 1;

  return (
    <div className="w-full min-h-[6vh] flex items-center justify-end px-4 space-x-3">
      {langs.map((f) => (
        <a
          key={f.lang}
          href={f.href}
          className="flex items-center space-x-1 text-gray-800 hover:text-gray-600"
        >
          <img src={f.img} alt={`${f.label} flag`} className="w-max" />
          {/* <span className="text-sm">{f.label}</span> */}
        </a>
      ))}

      <button className="px-2 py-3 h-[50px] bg-green-600 flex rounded-l-full rounded-r-full items-start justify-start hover:bg-green-700">
        <BsCart4 className="text-white mx-2" size={24} />
        <span className="text-white text-base">{items}</span>
        <div className="text-white mx-2 font-semiBold"> Items</div>
      </button>

      <button className="w-[50px] h-[50px] flex items-center justify-center py-3 text-green-600 hover:bg-green-600 hover:text-white rounded-full">
        <FaUserLarge size={24} className="" />
      </button>
    </div>
  );
};

export default LangsBar;