{
  interface Developer<X, Y = null> {
    name: string;
    post: string;
    age: number;
    home: {
      presentAddress: string;
      permanentAddress?: string;
    };
    smartPhone: X;
    smartWatch?: Y;
  }

  interface smartPhone {
    brand: string;
    model: string;
  }
  interface smartWatch extends smartPhone {
    heartbitSensor: boolean;
    SPO2Meter: boolean;
  }

  // developer initialization
  const lowClassDev: Developer<smartPhone> = {
    name: "Rafi",
    post: "Frontend Developer",
    age: 22,
    home: {
      presentAddress: "Dhaka",
    },
    smartPhone: {
      brand: "xiaomi",
      model: "k50i",
    },
  };

  const middleClassDev: Developer<smartPhone, smartWatch> = {
    name: "Ferdos",
    post: "MERN-Stack Developer",
    age: 21,
    home: {
      presentAddress: "Dhaka",
      permanentAddress: "Chapai Nawabganj",
    },
    smartPhone: {
      brand: "Samsung",
      model: "s24",
    },
    smartWatch: {
      brand: "Amazefit",
      model: "gtr mini 7",
      heartbitSensor: true,
      SPO2Meter: false,
    },
  };
}
