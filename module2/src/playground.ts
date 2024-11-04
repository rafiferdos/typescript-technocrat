{
  let anything: any;

  anything = 5;
  anything = "string re baba";
  (anything as string).toLowerCase();
  console.log(anything);

  const kgToGm = (value: string | number): string | number => {
    if (typeof value === "string") {
      const numberedValue = parseFloat(value) * 1000;
      return `From ${value}KG to ${numberedValue}GM`;
    } else {
      const numberedValue = value * 1000;
      return `From ${value}KG to ${numberedValue}GM`;
    }
  };

  console.log(kgToGm(100) as string);
  console.log(kgToGm(10) as number);

  type ErrorMsg = {
    msg: string;
  };

  try {
    throw { msg: "ha ha ha An error occurred ha ha ha" };
  } catch (error) {
    console.log((error as ErrorMsg).msg);
  }
}
