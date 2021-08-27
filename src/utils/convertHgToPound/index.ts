/**
 * Convert hectorgram (1hg = 100g) to Pound
 * @param {number} hg
 * @returns {number} pound
 */
export default function convertHgToPound(hg: number, round = 1): number {
  const result = Number((hg * 0.2204622622).toFixed(round))
  return isNaN(result) ? 0 : result
}
