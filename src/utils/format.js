export function percent(v) {
  const reg = /\d{1,3}(?=(\d{3})+(\.\d*)?$)/g
  return (v+ '').replace(reg,'$&,')
}