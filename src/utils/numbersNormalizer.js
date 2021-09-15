const numbersNormalizer = (value, type = null) => {
  if (!value) {
    return;
  }

  const onlyNums = value.replace(/[^\d]/g, "");

  if (type === "spiciness") {
    return Number(onlyNums) > 10 ? 10 : Number(onlyNums.slice(0, 2));
  }

  if (type === "diameter" && onlyNums.length > 2) {
    return Number(`${onlyNums.slice(0, 2)}.${onlyNums.slice(2)}`);
  }

  return Number(onlyNums);
};

export default numbersNormalizer;
