export function formatNumber(number) {
  const intlNumber = Intl.NumberFormat();
  return intlNumber.format(number);
}

export function formatPhone(phoneString) {
  const match = phoneString.match(/^(\d{3})(\d{3})(\d{4})$/);

  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  return phoneString;
}
