import { subDays, format } from 'date-fns';

export const getDateRange = (days) => {
  const date = subDays(new Date(), days);
  return format(date, 'yyyy-MM-dd');
};