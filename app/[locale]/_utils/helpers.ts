export const calculateNumberOfRows = (
  screenWidth: number,
  stringLength: number
): number => {
  if (stringLength !== 0) {
    if (screenWidth < 640) {
      return Math.ceil(stringLength / 41); // 41 letters per row
    } else if (screenWidth >= 640 && screenWidth < 768) {
      return Math.ceil(stringLength / 52); // 52 letters per row
    } else if (screenWidth >= 768 && screenWidth < 1024) {
      return Math.ceil(stringLength / 72); // 72 letters per row
    } else if (screenWidth >= 1024 && screenWidth < 1280) {
      return Math.ceil(stringLength / 93); // 93 letters per row
    } else if (screenWidth >= 1280) {
      return Math.ceil(stringLength / 1754); // 124 letters per row
    }
    // Default value
    return 5;
  } else {
    return 1;
  }
};
