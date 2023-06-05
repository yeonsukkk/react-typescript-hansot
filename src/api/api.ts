export const changeDate = (getDate: number): string => {
  const d = new Date(getDate);
  const m = d.getMonth() + 1 < 10 ? `0${d.getMonth() + 1}` : d.getMonth() + 1;
  const dd = d.getDate() < 10 ? `0${d.getDate()}` : d.getDate();
  return `${d.getFullYear()}-${m}-${dd}`;
};
