const computeIsDom = () => {
  try {
    return !!window;
  } catch (error) {
    return false;
  }
};

const isDom = computeIsDom();

export default isDom;
