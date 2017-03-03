/**
 * Fit number in closest range
 * @param  {number} num - target number to find
 * @param  {number[]} ranges - range to find in
 * @returns {number} matched range
 */
const fitInRange = (num, ranges) => {
  // eliminate the obvious case when under the smallest range
  if (num <= ranges[0]) {
    return ranges[0];
  }

  // start with the largest range we can fit
  for (let i = ranges.length - 1; i > 0; i--) {
    const range = ranges[i];

    if (num + ranges[0] > range) {
      return range;
    }
  }

  // default to smallest range
  return ranges[0];
};


/**
 * Returns optimal widget packs for given order
 * @param  {number} order - order number
 * @param  {number[]} packs - available widget packs
 * @returns {Object} result - object containing packs
 */
const wallysWidget = (order, packs) => {
  if (typeof order !== 'number' || order <= 0) {
    throw new Error('First argument must be a positive number');
  }
  if (!Array.isArray(packs)) {
    throw new Error('Second argument must be of type array');
  }

  const result = {};

  while (order > 0) {
    const pack = fitInRange(order, packs);

    result[pack] = (result[pack] || 0) + 1;
    order -= pack;
  }

  return result;
};

module.exports = wallysWidget;
