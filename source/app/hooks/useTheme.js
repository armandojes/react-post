import { useSelector } from "react-redux";

const useTheme = () => {
  const themeSelected = useSelector((state) => state.theme);

  /**
   * calculte color by theme
   * @param {Object} colors
   * @param {string} colors.dark
   * @param {string} colors.light
   * @returns {string} value selected by theme
   */
  const theme = (colors) => colors[themeSelected];

  return theme;
};

export default useTheme;
