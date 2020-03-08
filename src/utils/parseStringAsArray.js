export default function parseArrayAsString(arrayAsString) {
  return arrayAsString.split(",").map(tech => tech.trim());
}
