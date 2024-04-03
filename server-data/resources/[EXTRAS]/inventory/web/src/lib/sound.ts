export const playSound = (file: string, volume?: number) => {
  const audio = new Audio(`./assets/sounds/${file}`);
  audio.volume = volume ? volume : 0.3;
  audio.play();
};
