import moment from 'moment';

export function defaultDate(offset) {
  return moment()
    .hour(19)
    .minutes(0)
    .seconds(0)
    .add(offset, 'h')
    .format('YYYY-MM-DDTHH:mm:ss');
}

export function convertUtc(localDateTime) {
  return moment(localDateTime)
    .utc()
    .format();
}

export function convertLocal(utcDateTime) {
  return moment
    .utc(utcDateTime)
    .local()
    .format('YYYY-MM-DDTHH:mm');
}

export function convertLocalDisplay(utcDateTime) {
  return moment
    .utc(utcDateTime)
    .local()
    .format('MMM Do YYYY, h:mm a');
}

export function dayOfWeek(utcDateTime) {
  return moment
    .utc(utcDateTime)
    .local()
    .format('dddd');
}

export function dateAndYear(utcDateTime) {
  return moment
    .utc(utcDateTime)
    .local()
    .format('MMM Do YYYY');
}

export function setlistDate(date) {
  return moment(date, 'DD-MM-YYYY').format('MMM Do, YYYY');
}

export function time(utcDateTime) {
  return moment
    .utc(utcDateTime)
    .local()
    .format('h:mm a');
}

// 2019-06-21T05:23:19.559Z
