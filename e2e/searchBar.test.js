// function generateRandomString(length) {
//   const characters =
//     'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//   let result = '';

//   for (let i = 0; i < length; i++) {
//     const randomIndex = Math.floor(Math.random() * characters.length);
//     result += characters.charAt(randomIndex);
//   }

//   return result;
// }

// function generateCorrectSearchString() {
//   const strings = [
//     'Americano',
//     'Black Coffee',
//     'Cappucchino',
//     'Espresso',
//     'Latte',
//     'Macchiato',
//     'americano',
//     'black coffee',
//     'cappucchino',
//     'espresso',
//     'latte',
//     'macchiato',
//   ];
//   let randomStringPickerIndex = Math.floor(Math.random() * strings.length);
//   let result = strings[randomStringPickerIndex];
//   let substringLength = Math.floor(Math.random() * result.length) + 3;
//   const generatedSubstring = result.substring(0, substringLength);
//   return generatedSubstring;
// }

// describe('Search Bar', () => {
//   beforeEach(async () => {
//     await device.launchApp({newInstance: true});
//   });

//   it('should search something random', async () => {
//     await element(by.id('searchBar')).tap();
//     let randomLength = Math.floor(Math.random() * 27)+3
//     let randomString = generateRandomString(randomLength)
//     await element(by.id('searchBar')).typeText(randomString);
//     await expect(element(by.text('No Coffee Available'))).toExist()
//   });

//   it('should show correct search results', async () => {
//     await element(by.id('searchBar')).tap()
//     await element(by.id('searchBar')).typeText(generateCorrectSearchString())
//     await expect(element(by.text('No Coffee Available'))).not.toExist();
//   })

//   it('should have a placeholder', async () => {
//     const placeholder = await element(by.id('searchBar')).getAttributes(
//       'placeholder'
//     );
//     if (placeholder.value !== 'Find Your Coffee...') throw new Error();
//   });

//   it('should have a cross button in typing state', async () => {
//     await element(by.id('searchBar')).typeText('asd')
//     await expect(element(by.id('crossButton'))).toExist()
//   })

//   it('cross button should work as intended', async () => {
//     await element(by.id('searchBar')).typeText('asd')
//     await expect(element(by.id('crossButton'))).toExist() 
//     await element(by.id('crossButton')).tap()
//     const text= await element(by.id('searchBar')).getAttributes('value')
//     if (text.text.length !== 0) throw new Error()
//   })
// });
