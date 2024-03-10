import React, { useState } from "react";
import { useEffect } from "react";
import { dataMenuAll } from "../utils/mockDataMenu";

const useRestaurantMenu = (resId) => {
  //  fetchData
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const arrr = [
      "80226",
      "166944",
      "332194",
      "80418",
      "238136",
      "437010",
      "253769",
      "420431",
      "80320",
      "301701",
      "80703",
      "80701",
      "201545",
      "442050",
      "240249",
      "327406",
      "80376",
      "82234",
      "392164",
      "126894",
    ];
    setResInfo(dataMenuAll[resId]);
  };
  return resInfo;
};
export default useRestaurantMenu;
