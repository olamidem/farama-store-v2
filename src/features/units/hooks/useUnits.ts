import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../../../lib/queryKey";
import { getUnits } from "../services/unit.service";

export const useUnits = () => {
  return useQuery({
    queryKey: QUERY_KEYS.units,
    queryFn: getUnits,
  });
};
