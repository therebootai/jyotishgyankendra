export default async function parseImage(image) {
  const fileBuffer = await image.arrayBuffer();
  const mimeType = image.type;
  const encoding = "base64";
  const base64Data = Buffer.from(fileBuffer).toString("base64");

  const fileUri = "data:" + mimeType + ";" + encoding + "," + base64Data;

  return fileUri;
}
