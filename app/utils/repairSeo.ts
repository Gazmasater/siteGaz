export const repairBrands = [
  { slug: "protherm", name: "Protherm", alias: "Протерм", logo: "/img/brands/protherm-logo.png" },
  { slug: "baxi", name: "Baxi", logo: "/img/brands/baxi-logo.jpg" },
  { slug: "navien", name: "Navien", logo: "/img/brands/navien-logo.png" },
  { slug: "vaillant", name: "Vaillant", alias: "Вайлант", logo: "/img/brands/vaillant-logo.png" },
  { slug: "viessmann", name: "Viessmann", logo: "/img/brands/viessmann-logo.svg" },
];

export const repairServicePages = [
  {
    slug: "remont-gazovyh-kotlov",
    title: "Ремонт газовых котлов",
    lead: "Диагностика и ремонт настенных газовых котлов в Липецке: розжиг, плата, датчики, насос, теплообменник и дымоудаление.",
  },
  {
    slug: "obsluzhivanie-kotlov",
    title: "Обслуживание газовых котлов",
    lead: "Профилактика котла перед сезоном: чистка, проверка датчиков, тяги, давления, насоса и основных узлов.",
  },
  {
    slug: "chistka-teploobmennika",
    title: "Чистка теплообменника котла",
    lead: "Чистка основного или вторичного теплообменника при слабом нагреве, перегреве, шуме и ошибках циркуляции.",
  },
  {
    slug: "zamena-platy-kotla",
    title: "Замена и ремонт платы котла",
    lead: "Проверка платы управления, восстановление контактов, диагностика питания и замена платы при подтвержденной неисправности.",
  },
  {
    slug: "zamena-nasosa-kotla",
    title: "Замена насоса котла",
    lead: "Диагностика насоса котла при слабой циркуляции, перегреве, шуме, ошибках давления и замена насоса при подтвержденной неисправности.",
  },
];

export const brandErrorCodes: Record<string, string[]> = {
  protherm: [
    "F00",
    "F01",
    "F10",
    "F11",
    "F12",
    "F13",
    "F20",
    "F22",
    "F23",
    "F24",
    "F25",
    "F26",
    "F27",
    "F28",
    "F29",
    "F32",
    "F33",
    "F49",
    "F61",
    "F62",
    "F63",
    "F64",
    "F65",
    "F67",
    "F70",
    "F71",
    "F72",
    "F73",
    "F74",
    "F75",
    "F76",
    "F77",
    "F80",
    "F81",
    "F83",
    "F84",
    "F85",
    "F86",
    "F87",
    "F90",
    "F91",
  ],
  baxi: ["E01", "E02", "E03", "E04", "E05", "E06", "E10", "E20", "E25", "E26", "E35", "E96", "E97", "E98", "E99"],
  navien: [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "27",
    "30",
    "46",
    "47",
    "49",
    "56",
    "57",
    "93",
    "218",
  ],
  vaillant: ["F20", "F22", "F23", "F24", "F27", "F28", "F29", "F60", "F61", "F70", "F71", "F73", "F75", "F77", "F82", "FXX"],
  viessmann: ["F2", "F3", "F4", "F5", "F6", "F8", "B0", "B8", "30", "38", "51", "59", "50", "58", "0C", "0E", "0A", "03-SERV", "SERV"],
};

export function displayErrorCode(code: string) {
  return code.toLowerCase() === "03-serv" ? "03 + SERV" : code.toUpperCase();
}

export function regionTitle(region: string) {
  return region === "lipeck" ? "Липецк" : region;
}

export function regionPrepTitle(region: string) {
  return region === "lipeck" ? "Липецке" : regionTitle(region);
}

export function regionRouteTitle(region: string) {
  return region === "lipeck" ? "Липецку" : regionTitle(region);
}
