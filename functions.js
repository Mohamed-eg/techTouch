const commonColors = [
  { name: "red", hex: "#ff0000" },
  { name: "green", hex: "#00ff00" },
  { name: "blue", hex: "#0000ff" },
  { name: "black", hex: "#000000" },
  { name: "white", hex: "#ffffff" },
  { name: "orange", hex: "#ffa500" },
  { name: "yellow", hex: "#ffff00" },
  { name: "cyan", hex: "#00ffff" },
  { name: "dark blue", hex: "#00008b" },
  { name: "dark green", hex: "#006400" },
  { name: "magenta", hex: "#ff00ff" },
  { name: "maroon", hex: "#800000" },
  { name: "dark green", hex: "#008000" },
  { name: "navy", hex: "#000080" },
  { name: "purple", hex: "#800080" },
  { name: "teal", hex: "#008080" },
  { name: "olive", hex: "#808000" },
  { name: "dark red", hex: "#8b0000" },
  { name: "dark cyan", hex: "#008b8b" },
  { name: "dark magenta", hex: "#8b008b" },
  { name: "olive drab", hex: "#6b8e23" },
  { name: "transparent", hex: "#00000000" },
];

function toColor(num) {
    num >>>= 0;
    var b = num & 0xFF,
      g = (num & 0xFF00) >>> 8,
      r = (num & 0xFF0000) >>> 16,
      a = ((num & 0xFF000000) >>> 24) / 255;
    return "rgba(" + [r, g, b, a].join(",") + ")";
  }

function hexToRgb(hex) {
  if (hex.length === 4 || hex.length === 7) {
    const [r, g, b] = hex
      .slice(1)
      .match(/.{1,2}/g)
      .map((val) => parseInt(val, 16));
    return { r, g, b };
  }

  if (hex.length === 9) {
    const [r, g, b, a] = hex
      .slice(1)
      .match(/../g)
      .map((val) => parseInt(val, 16));
    return { r, g, b, a };
  }
}
function hexToClosestCommonColor(hex) {
  const color = hexToRgb(hex);

  let smallestDistance = Infinity;
  let closestColor = null;

  for (const commonColor of commonColors) {
    const commonColorRgb = hexToRgb(commonColor.hex);

    const rDistance = Math.abs(commonColorRgb.r - color.r);
    const gDistance = Math.abs(commonColorRgb.g - color.g);
    const bDistance = Math.abs(commonColorRgb.b - color.b);

    const distance = Math.sqrt(
      rDistance ** 2 + gDistance ** 2 + bDistance ** 2
    );

    if (distance < smallestDistance) {
      smallestDistance = distance;
      closestColor = commonColor.name.replace(/\s+/g, ""); // remove spaces
    }
  }

  if (closestColor) {
    return closestColor;
  }

  throw new Error("Invalid HEX color code");
}
function generateUniqueId() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let randomString = '';
  for (let i = 0; i < 16; i++) {
      randomString += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  const timestamp = Date.now();
  return `${randomString}-${timestamp}`;
}
export {toColor,generateUniqueId}
export default hexToClosestCommonColor;

