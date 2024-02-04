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

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) {
    throw new Error("Invalid HEX color code");
  }

  return {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
  };
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
export default hexToClosestCommonColor;
