export const getVolByDiameterAndHeight = (diameter, height) => {
  const volInMM = ((diameter/2)**2)*Math.PI*height;
  return volInMM;
};
