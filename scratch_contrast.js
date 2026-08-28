function hexToRgb(hex) {
  let r = parseInt(hex.slice(1,3), 16);
  let g = parseInt(hex.slice(3,5), 16);
  let b = parseInt(hex.slice(5,7), 16);
  return [r, g, b];
}

function luminance(r, g, b) {
  let a = [r, g, b].map(function (v) {
      v /= 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow( (v + 0.055) / 1.055, 2.4 );
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

function contrast(hex1, hex2) {
  let rgb1 = hexToRgb(hex1);
  let rgb2 = hexToRgb(hex2);
  let lum1 = luminance(...rgb1);
  let lum2 = luminance(...rgb2);
  let brightest = Math.max(lum1, lum2);
  let darkest = Math.min(lum1, lum2);
  return (brightest + 0.05) / (darkest + 0.05);
}

console.log("on-teal-soft on teal-night", contrast("#b9ded4", "#083f38").toFixed(2));
console.log("amber on teal-night", contrast("#e8a13d", "#083f38").toFixed(2));
console.log("amber-ink on day", contrast("#7a4b06", "#fbfdfc").toFixed(2));
console.log("teal on day", contrast("#0d7a6b", "#fbfdfc").toFixed(2)); // Missing check?
console.log("ink-soft on day", contrast("#3d524d", "#fbfdfc").toFixed(2)); // Missing check?
