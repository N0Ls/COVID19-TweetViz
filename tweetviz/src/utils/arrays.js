const fil = (fn, a) => {
  const f = [];
  for (let i = 0; i < a.length; i++) {
    if (fn(a[i])) {
      f.push(a[i]);
    }
  }
  return f;
};

const filterObjs = fn => a => fil(fn, a);

export { fil, filterObjs }