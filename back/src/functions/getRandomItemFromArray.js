export function getRandomItemFromArray(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return undefined; // Return undefined for empty arrays or non-array inputs
  }

  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}
