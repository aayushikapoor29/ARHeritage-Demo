export const getModelPath = (slug: string, ext: 'glb' | 'usdz' = 'glb') => {
  return `/models/${slug}/model.${ext}`;
};

export const getPosterPath = (slug: string) => {
  return `/posters/${slug}.webp`;
};
