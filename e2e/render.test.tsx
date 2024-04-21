
import {render} from "@testing-library/react-native"
import CoffeeCard from "../src/components/CoffeeCard"
import {device} from "detox"
describe('render', () => {
  beforeEach(async () => {
    await device.launchApp({newInstance: true});
  });

  it('renders coffee card correctly', async () => {
      
   const {toJSON} = render(<CoffeeCard
    testID='coffeeCard' 
    id="1"
    index={1}
    type="Coffee"
    roasted={"123"}
    name={"amazing"}
    special_ingredient={"ooo"}
    average_rating={4}
    price={"12"}
    buttonPressHandler={() => {}}
  />)
   console.log(toJSON())
  });
});
