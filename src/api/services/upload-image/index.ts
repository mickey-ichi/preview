const upload = (file: File): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("https://picsum.photos/500/300"), 3000)
  });
}

export default {
  upload,
}
