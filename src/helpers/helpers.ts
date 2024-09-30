// helpers.ts
export const CreateProductRows = (
  items: {
    id: string;
    name: string;
    color: string;
    price: string;
    image: string;
  }[],
): {
  id: string;
  name: string;
  color: string;
  price: string;
  image: string;
}[][] => {
  const rows = [];
  for (let i = 0; i < items.length; i += 2) {
    rows.push(items.slice(i, i + 2));
  }
  return rows;
};
