const getIsDom = () => {
  try {
    return !!window;
  } catch (error) {
    return false;
  }
};

const isDom = getIsDom();

export default isDom;
