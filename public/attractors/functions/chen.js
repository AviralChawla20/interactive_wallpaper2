/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */

const chen = (length, parameters) => {
  const { dt, x, y, z, a, b, c } = parameters;
  const positions = [];
  const vec = new THREE.Vector3(x, y, z);

  const [updateSums, getCenter] = minMaxVectors();

  for (let i = 0; i < length; i++) {
    const { x, y, z } = vec;
    updateSums(x, y, z);
    positions.push(vec.clone());
    vec.x += (a * x - y * z) * dt;
    vec.y += (b * y + x * z) * dt;
    vec.z += (c * z + (x * y) / 3) * dt;
  }

  const center = getCenter();

  positions.forEach((vec) => vec.sub(center));
  positions.forEach((vec) => vec.multiplyScalar(0.1));
  return positions;
};
