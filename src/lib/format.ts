export const NumberToReadStr = (value: number) => {
  const formatter = Intl.NumberFormat("en", {
    notation: "compact",
    maximumSignificantDigits: 3,
  });
  return formatter.format(value);
};
