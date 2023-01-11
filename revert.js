const items = [1, 2, 3, 4, 5, 6]

const revert = (items) => {
  
  for(let i = 0; i < items.length / 2; i++){
    const itemsI = items[i]
    items[i] = items[items.length - (i + 1)]
    items[items.length - (i + 1)] = itemsI
  } 
  
  return items
}

console.log(revert(items))
