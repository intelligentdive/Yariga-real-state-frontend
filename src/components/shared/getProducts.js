export const getProducts = async () => {
  const res = await fetch("http://localhost:5000/property");
  const data = await res.json();

  return [data];
};
