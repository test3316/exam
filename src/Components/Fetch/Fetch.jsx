import axios from "axios";
import { useEffect } from "react";
axios;

const Fetch = () => {
  useEffect(() => {
    axios
      .get(
        "https://api2.myauto.ge/ka/products?TypeID=0&ForRent=0&Mans=41&CurrencyID=3&MileageType=1&Page=1"
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

  return <div></div>;
};

export default Fetch;
