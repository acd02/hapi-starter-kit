module.exports = function<T>(arr: T[], opts: { fn: (item: T) => string }) {
  return arr
    .map(item => `<li>${opts.fn(item).length > 1 ? opts.fn(item) : item}</li>`)
    .join('')
}
