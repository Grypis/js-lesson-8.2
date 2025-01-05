function calculateHousePerimeter({ a, b, c, d }) {
  const perimeter = a + b + c + d;
  return perimeter;
}

const info = {
  a: 10,
  b: 15,
  c: 10,
  d: 15,
};

const perimeter = calculateHousePerimeter(info);
console.log(`Периметр будинку: ${perimeter}`);
