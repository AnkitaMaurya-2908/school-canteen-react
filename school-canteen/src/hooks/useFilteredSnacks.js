import { useMemo } from "react";
import { snacks } from "../assets/assests";

const useFilteredSnacks = (category) => {
  const filteredSnacks = useMemo(() => {
    if (!category || category === "All") return snacks;

    return snacks.filter(
      (item) => item.category.toLowerCase() === category.toLowerCase()
    );
  }, [category]);

  return filteredSnacks;
};

export default useFilteredSnacks;