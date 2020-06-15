import { format, parseISO } from "date-fns";

export const convertTimezone = (tz) => format(parseISO(tz), "HH:mm yyyy/MM/dd");
