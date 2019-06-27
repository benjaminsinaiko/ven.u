import moment from 'moment';

export function defaultDate(offset) {
  return moment()
    .hour(19)
    .minutes(0)
    .seconds(0)
    .add(offset, 'h')
    .format('YYYY-MM-DDTHH:mm:ss');
}

export function convertUtc(dateTime) {
  return moment(dateTime)
    .utc()
    .format();
}

// 2019-06-21T05:23:19.559Z
