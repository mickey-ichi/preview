export const upload = (file: File) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("https://picsum.photos/500/300"), 3000)
  });
}
