// choice(items): returns a randomly selected item from array of items
// remove(items, item): removes the first matching item from items, if item exists, and returns it. Otherwise returns undefined.

const choice = (items) => {
  const idx = Math.floor(Math.random() * items.length);
  return items[idx];
};

const remove = (items, item) => {
  for (let i = 0; i < items.length; i++) {
    if (items[i] === item) {
      console.log(items);
      return [...items.slice(0, 1), ...items.slice(i + 1)];
    }
  }
};

export { choice, remove };
