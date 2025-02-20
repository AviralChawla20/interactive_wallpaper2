/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */

const fourwing = (length, parameters) => {
  const { dt, x, y, z, a, b, c } = parameters;
  const positions = [];
  const vec = new THREE.Vector3(x, y, z);

  const [updateSums, getCenter] = minMaxVectors();

  for (let i = 0; i < length; i++) {
    const { x, y, z } = vec;
    updateSums(x, y, z);
    positions.push(vec.clone());
    vec.x += (a * x + y * z) * dt;
    vec.y += (b * x + c * y - x * z) * dt;
    vec.z += (-z - x * y) * dt;
  }

  const center = getCenter();

  positions.forEach((vec) => vec.sub(center));
  positions.forEach((vec) => vec.multiplyScalar(0.8));
  return positions;
};
