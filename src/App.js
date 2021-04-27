import './App.css';
import Header from './components/Header';
import Items from './components/Items';

// import SolarPanels from '../public/assets/Desktop-Accessories.jpg';


function App() {
  return (
    <div className="App">
      <Header />
      <Items
        title="Model S"
        desc="$69,420"
        backgroundImg={process.env.PUBLIC_URL + './assets/Desktop-ModelS.jpeg'}
        leftBtnTxt="Custom Order"
        rigthBtnTxt="Buy Now"
        twoButton="true"
        first
      />
      <Items
        title="Model Y"
        desc="$75939"
        backgroundImg={process.env.PUBLIC_URL + './assets/Desktop-ModelY.jpeg'}
        leftBtnTxt="Custom Order"
        leftBtnLink=""
        rightBtnTxt="Buy Now"
        rightBtnLink=""
        twoButton="true"
      />
      <Items
        title="Model 3"
        desc="$55939"
        backgroundImg={process.env.PUBLIC_URL + './assets/Desktop-Model3.jpeg'}
        leftBtnTxt="Custom Order"
        leftBtnLink=""
        rightBtnTxt="Buy Now"
        rightBtnLink=""
        twoButton="true"
      />
      <Items
        title="Model X"
        desc="$45939"
        backgroundImg={process.env.PUBLIC_URL + './assets/Desktop-ModelX.jpeg'}
        leftBtnTxt="Custom Order"
        leftBtnLink=""
        rightBtnTxt="Buy Now"
        rightBtnLink=""
        twoButton="true"
      />
      <Items
        title="Lowest Cost Solar Panels in America"
        desc="Money-back guarantee"
        backgroundImg={process.env.PUBLIC_URL + './assets/Desktop-SolarPanels.jpeg'}
        leftBtnTxt="ORDER NOW"
        leftBtnLink=""
        rightBtnTxt="LEARN MORE"
        rightBtnLink=""
        twoButton="true"
      />
      <Items
        title="Solar For New Roofs"
        desc="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
        backgroundImg={process.env.PUBLIC_URL + './assets/Desktop-SolarRoof.jpeg'}
        leftBtnTxt="Custom Order"
        leftBtnLink=""
        rightBtnTxt="Buy Now"
        rightBtnLink=""
        twoButton="true"
      />
      <Items
        title="Accessories"
        desc=""
        backgroundImg={process.env.PUBLIC_URL + './assets/Desktop-Accessories.jpg'}
        leftBtnTxt="Custom Order"
        leftBtnLink=""
        rightBtnTxt="Buy Now"
        rightBtnLink=""
        twoButton="true"
      />

    </div>
  );
}

export default App;
