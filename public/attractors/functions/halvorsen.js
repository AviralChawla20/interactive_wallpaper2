/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */

const halvorsen = (length, parameters) => {
  const { dt, x, y, z, a } = parameters;
  const positions = [];
  const vec = new THREE.Vector3(x, y, z);

  const [updateSums, getCenter] = minMaxVectors();

  for (let i = 0; i < length; i++) {
    const { x, y, z } = vec;
    updateSums(x, y, z);
    positions.push(vec.clone());
    vec.x += (-a * x - 4 * y - 4 * z - y * y) * dt;
    vec.y += (-a * y - 4 * z - 4 * x - z * z) * dt;
    vec.z += (-a * z - 4 * x - 4 * y - x * x) * dt;
  }

  const center = getCenter();

  positions.forEach((vec) => vec.sub(center));
  positions.forEach((vec) => vec.multiplyScalar(0.15));
  return positions;
};
