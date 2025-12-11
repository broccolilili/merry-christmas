export const randomRange = (min: number, max: number) => Math.random() * (max - min) + min;

// Generate a point on the surface of a cone
export const getConePoint = (height: number, radiusBase: number, yOffset: number = 0) => {
  const y = Math.random() * height;
  const rAtY = (1 - y / height) * radiusBase;
  const theta = Math.random() * Math.PI * 2;
  
  const x = rAtY * Math.cos(theta);
  const z = rAtY * Math.sin(theta);
  
  return [x, y - height / 2 + yOffset, z] as [number, number, number];
};

// Generate a point inside a sphere
export const getSpherePoint = (radius: number) => {
  const u = Math.random();
  const v = Math.random();
  const theta = 2 * Math.PI * u;
  const phi = Math.acos(2 * v - 1);
  const r = Math.cbrt(Math.random()) * radius;

  const x = r * Math.sin(phi) * Math.cos(theta);
  const y = r * Math.sin(phi) * Math.sin(theta);
  const z = r * Math.cos(phi);

  return [x, y, z] as [number, number, number];
};