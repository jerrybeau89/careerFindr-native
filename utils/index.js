export default function checkImageUrl(url ) {
  if (!url) {
    return false;
  } else {
    const pattern = new RegExp(
      "^https?:\\/\\/.+\\.(png|jp|jpeg|bmp|gif|webp)$",
      "i"
    );
    return pattern.test(url);
  }
}
