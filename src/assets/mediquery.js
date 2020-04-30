const bpw = {
  small: 375,
  medium: 980,
  large: 1200,
};

const bph = {
  tall: 730,
};

export const mqw = (n) => {
  const bpArray = Object.keys(bpw).map((key) => [key, bpw[key]]);

  const [result] = bpArray.reduce((acc, [name, size]) => {
    if (n === name) return [...acc, `@media (min-width: ${size}px)`];
    return acc;
  }, []);

  return result;
};

export const mqh = (n) => {
  const bpArray = Object.keys(bph).map((key) => [key, bph[key]]);

  const [result] = bpArray.reduce((acc, [name, size]) => {
    if (n === name) return [...acc, `@media (min-height: ${size}px)`];
    return acc;
  }, []);

  return result;
};
