/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */

const threeScroll2 = (length, parameters) => {
  const { dt, x, y, z, a, b, c, d, e, f } = parameters;
  const positions = [];
  const vec = new THREE.Vector3(x, y, z);

  const [updateSums, getCenter] = minMaxVectors();

  for (let i = 0; i < length; i++) {
    const { x, y, z } = vec;
    updateSums(x, y, z);
    positions.push(vec.clone());
    vec.x += (a * (y - x) + d * x * z) * dt;
    vec.y += (b * x - x * z + f * y) * dt;
    vec.z += (c * z + x * y - e * x * x) * dt;
  }
  const center = getCenter();

  positions.forEach((vec) => vec.sub(center));
  positions.forEach((vec) => vec.multiplyScalar(0.01));
  return positions;
};
