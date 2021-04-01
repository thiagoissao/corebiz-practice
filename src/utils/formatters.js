export const formatCurrency = value => {
  const val = value === undefined || value === null ? 0 : Number(value);
  return val.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
};
