export const basketInit = () => {
    if (!sessionStorage.getItem("basket")) {
      const basket = {
  
      }
      sessionStorage.setItem("basket", JSON.stringify(basket))
    }
  }
  const getBasket = () => {
    let basket = JSON.parse(sessionStorage.getItem("basket"))
  
    return (
      basket
    )
  
  }
  
  const updateBasket = (basket) => {
    sessionStorage.removeItem("basket")
    sessionStorage.setItem("basket", JSON.stringify(basket))
  }
  
  const add = (key, value) => {
    let basket
    basket = getBasket()
    Reflect.defineProperty(basket, key, {
      value: value,
      enumerable: true
    })
    updateBasket(basket)
  }
  
  const remove = (key) => {
  
    let basket = getBasket()
    if (!basket[key]) {
      return
    }
    Reflect.deleteProperty(basket, key)
    updateBasket(basket)
  }
  
  const count = () => {
    var basket = getBasket()
    return Reflect.ownKeys(basket).length
  
  }
  const removeAll = () => {
  
    var basket = getBasket();
  
    for (const [key, val] of Object.entries(basket)) {
  
  
      Reflect.deleteProperty(basket, key)
  
    }
    updateBasket(basket)
  
  
  }
  const iterator = () => {
    var basket = getBasket()
    var length = Reflect.ownKeys(basket).length
    let index = 0;
    const generator = function*() {
  
      for (const [key, val] of Object.entries(basket)) {
        yield {
          key,
          val
        }
      }
    }
    return generator()
  
  }
  
 export default controler = {
    addItem: add,
    removeItem: remove,
    countItems: count,
    removeAllItems: removeAll,
    getIterator: iterator
  }

  