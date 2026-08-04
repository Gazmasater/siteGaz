import type { SparePart } from "./spareParts";

type ProductSeo = {
  lead: string;
  details: string;
  metaDescription: string;
};

const partKind = (part: SparePart) => {
  const name = part.name.toLowerCase();
  if (part.category === "Вентиляторы") return "вентилятор дымоудаления";
  if (name.includes("битермичес")) return "битермический теплообменник";
  if (name.includes("вторич") || name.includes("гвс") || name.includes("пластин")) return "вторичный пластинчатый теплообменник ГВС";
  if (name.includes("первич") || name.includes("основн")) return "первичный теплообменник";
  return "теплообменник";
};

const technicalNote = (part: SparePart) => {
  const name = part.name.toLowerCase();
  if (part.category === "Вентиляторы") return "Сверяем мощность, тип разъёма, крепление и направление подключения.";
  if (name.includes("пластин") || name.includes("вторич") || name.includes("гвс")) return "Для точного подбора сверяем число пластин, расположение и тип присоединений.";
  if (name.includes("битермичес")) return "Для точного подбора сверяем модель котла, мощность и расположение патрубков.";
  return "Для точного подбора сверяем модель котла, мощность, подключение и серийный номер.";
};

export const buildProductSeo = (part: SparePart, brand: string, models: string[]): ProductSeo => {
  const kind = partKind(part);
  const hasConfirmedModels = models.length > 0 && !models[0].startsWith("Подбор по");
  const modelsText = hasConfirmedModels
    ? ` Подтверждена совместимость с ${models.length} ${models.length === 1 ? "моделью" : "моделями"}: ${models.slice(0, 3).join(", ")}${models.length > 3 ? " и другими из списка ниже" : ""}.`
    : " Производитель не приводит полный перечень моделей, поэтому совместимость проверяем по артикулу, модели и серийному номеру котла.";
  const lead = `${part.name} — ${kind} для котлов ${brand}. Артикул детали: ${part.article}.${modelsText}`;
  return {
    lead,
    details: `${technicalNote(part)} Деталь подбирается по артикулу ${part.article}; перед заказом подтвердим совместимость с комплектацией вашего котла.`,
    metaDescription: `${part.name}. Артикул ${part.article}. ${hasConfirmedModels ? `Совместимые модели: ${models.slice(0, 3).join(", ")}.` : "Проверка совместимости по модели и серийному номеру."} Купить и подобрать в Липецке.`,
  };
};

export const buildProductTitle = (part: SparePart) => `${part.name} ${part.article} — купить в Липецке | Gazmaster`;

const duplicateCanonicals = new Map<string, string>([
  ["Baxi:baxi-5653850", "fime-vgr0042710-5653850"],
  ["Protherm:vtorichnyy-12-plastin-pantera-v15-0020043598", "vtorichnyy-12-plastin-pantera-15-17-0020043598"],
]);

export const preferredProductSlug = (brand: string, slug?: string) => duplicateCanonicals.get(`${brand}:${slug}`) ?? slug;
