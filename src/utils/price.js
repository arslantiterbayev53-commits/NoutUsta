// Format a numeric price with space thousands separators + localized suffix.
const CURRENCY = { uz: "so'm", ru: "сум", en: "UZS" };

export const formatPrice = (value, lang = "uz") => {
  const num = Number(value) || 0;
  const formatted = num.toLocaleString("ru-RU").replace(/,/g, " ");
  return `${formatted} ${CURRENCY[lang] || CURRENCY.uz}`;
};
