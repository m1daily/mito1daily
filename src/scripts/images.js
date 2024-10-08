const files = await Astro.glob("../assets/profile/**/*.{png,jpg,jpeg}");
async function getImages(files) {
  const images = files.reduce((acc, file) => {
    const image = file.default;
    const fileName = image.src.split('/').pop().split('.')[0]; // ファイル名を抽出
    const fileName2 = image.src.split('/').pop().split('?')[0]; // 拡張子を含めてファイル名を抽出
    acc[fileName] = image;
    return acc;
  }, {});
  return images;
}
