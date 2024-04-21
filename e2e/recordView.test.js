const mockData = require('../mockData/emptyScreen.json')
console.log(mockData)

describe('recordView', () => {
  beforeEach(async () => {
    await device.launchApp({newInstance: true});
  });

    it('should be tappable', async () => {
      await element(by.id('coffeeCard')).atIndex(0).tap();
    });

  //   it('back button should work as intended', async () => {
  //     await element(by.id('coffeeCard')).atIndex(0).tap();
  //     await element(by.id('backButton')).tap();
  //     await expect(element(by.id('coffeeCard')).atIndex(0)).toBeVisible();
  //   });

  //   it('size should be tappable', async () => {
  //     await element(by.id('coffeeCard')).atIndex(0).tap();
  //     for (i = 0; i <= 2; i++) {
  //       await element(by.id('sizeBox')).atIndex(i).tap();
  //     }
  //   });

  // it ('price should change according to size', async() => {
  //   await element(by.id('coffeeCard')).atIndex(0).tap()
  //   await expect(element(by.id('priceChange'))).toBeVisible()
  //   console.log( await element(by.id('priceChange')))
  //   for (i = 0; i <= 2; i++) {
  //       await element(by.id('sizeBox')).atIndex(i).tap();
  //       // if (i===0)
  //       // await expect(element(by.label('Price'))).toBeVisible()
  //       // else if (i===1)
  //       // await expect(element(by.id('price'))).toHaveText('3.15')
  //       // else
  //       // await expect(element(by.id('price'))).toHaveText('4.29')
  //     }
  // })

  // it('should add to cart', async() => {
  //   await element(by.id('coffeeCard')).atIndex(0).tap();
  //   await element(by.id('sizeBox')).atIndex(0).tap();
  //   await element(by.id('addToCart')).tap()
  //   await expect(element(by.id('cartScreen'))).toBeVisible()
  // })

  // it('coffee cards should scroll horizontally', async() => {
  //   await expect(element(by.id('coffeeCardScroll'))).toBeVisible();
  //   await element(by.id('coffeeCardScroll')).scrollTo('right');
  // })

  // it('should add to cart through coffee card only', async () => {
  //   await element(by.id('plusButton')).atIndex(0).tap()
  //   await expect(element(by.id('cartTabIcon')).atIndex(1)).toBeVisible()
  //   await element(by.id('cartTabIcon')).atIndex(1).tap()
  //   await expect(element(by.id('cartScreen'))).toBeVisible();
  //   await expect(element(by.id('cartItem')).atIndex(0)).toExist();
  // });
  
  // it('should display empty screen gif on cart, favourite and order history screen too', async() => {
  //   for (const testID in mockData) {
  //   await element(by.id(testID)).atIndex(1).tap()
  //   // await expect(element(by.id('cartScreen'))).toBeVisible()
  //   await expect(element(by.text(mockData[testID]))).toBeVisible()
  //   await expect(element(by.id('emptyCartGIF'))).toBeVisible()}
  // })  

  // it('should display Cart is Empty with gif when there is no order on cart screen', async() => {
  //   await element(by.id('cartTabIcon')).atIndex(1).tap()
  //   await expect(element(by.id('cartScreen'))).toBeVisible()
  //   await expect(element(by.text('Cart is Empty'))).toBeVisible()
  //   await expect(element(by.id('emptyCartGIF'))).toBeVisible()
  // })

//   it ('should add to cart through coffee card with default size and price', async() => {
//     await element(by.id('plusButton')).atIndex(0).tap()
//     await element(by.id('cartTabIcon')).atIndex(1).tap()
//     await expect(element(by.id('cartScreen'))).toBeVisible();
//     await expect(element(by.id('cartItem')).atIndex(0)).toExist();
//     await expect(element(by.text('L')).atIndex(0)).toBeVisible()
//     await expect(element(by.text('$ 4.29')).atIndex(0)).toBeVisible()
//   })
})
