function isEnoughCapacity(products, containerSize) {
  let totalValue = 0;
  const value = Object.values(products);
  for (let i = 0; i < value.length; i += 1) {
    totalValue += value[i];
  }
  const result = totalValue <= containerSize ? true : false;
  return result;
}

// ===== Task-1 =====

console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true
console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false
console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatos: 3 }, 14)); // true
console.log(isEnoughCapacity({ apples: 18, potatos: 5, oranges: 2 }, 7)); // false
