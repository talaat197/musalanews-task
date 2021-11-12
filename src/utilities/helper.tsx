import moment from 'moment';

export const getPublishedDate = (date: string) => {
  return moment(date).format('MMMM DD');
};

export const getDetailedDate = (date: string) => {
  return moment(date).format('YYYY MMMM DD');
};
