export const decodeGetParams = str =>
  decodeURIComponent(str)
    .slice(1)
    .split("&")
    .reduce((acc, item) => {
      const [key, value] = item.split("=");

      return { ...acc, [key]: value };
    }, {});

export const encodeGetParams = arr =>
  `?${arr.map(([key, value]) => `${key}=${value}`).join("&")}`;
