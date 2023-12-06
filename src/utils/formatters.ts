
import format from 'date-fns/format';

export const formattedDate = (date: string) => (
	format(new Date(date), 'dd/MM/yyyy')
);
