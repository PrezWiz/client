/** 날짜(createdAt)를 기준으로 내림차순으로 정렬합니다. */
export const sortByDateDesc = <T extends { createdAt: string }>(items: T[]) => {
  return items.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
};

/** ISO 형식의 날짜를 파싱합니다. (formatted: YYYY-MM-DD) */
export const parseDateISO = (isoString: string) => {
  const date = new Date(isoString);

  if (isNaN(date.getTime())) {
    throw new Error('Invalid date format');
  }

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return {
    year,
    month,
    day,
    formatted: `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`,
  };
};
