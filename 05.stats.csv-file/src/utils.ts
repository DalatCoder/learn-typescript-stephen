export const dateStringToDate = (dateString: string): Date => {
  // 20/10/2000 => ['20', '10', '2000'] => [20, 10, 2000]
  const dateParts = dateString
    .split('/')
    .map((part: string): number => parseInt(part));

  // new Date(yy, mm, dd)
  // month is zero-base index, so we must subtract 1
  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
