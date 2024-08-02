// import PublicIcon from '@mui/icons-material/Public';
// import { PublicOutlined } from '@mui/icons-material';
import PublicIcon from '@mui/icons-material/Public';
import About from './About';
import './App.css';
import MenuItem from './MenuItem';
import { Margin } from '@mui/icons-material';
import { FormControl, InputLabel, NativeSelect, Select } from '@mui/material';
// import ''

function App() {
  let lang = "ENGLISH"
  const langChange = () => {

  }
  return (
    <div className="App">
      <div id='home' className='homePage'>
        <div className='navBar'>
          <div>{/* logo */}</div>
          <a className='buttonN home' href='#home'>HOME</a>
          <a className='buttonN menu' href='#menu'>MENU</a>
          <a className='buttonN contactUs' href='#about'>ABOUT</a>
          <div className='langMain'>
            <PublicIcon sx={{margin:2}} />
            {/* <PublicIcon/> */}
            {/* <select>
              <option>ENGLISH</option>
              <option>ARABIC</option>
              <option></option>
            </select> */}
            <FormControl fullWidth>
             <InputLabel variant="standard" htmlFor="uncontrolled-native">
               Language
             </InputLabel>
             <NativeSelect
               defaultValue={"English"}
               inputProps={{
                 name: 'age',
                 id: 'uncontrolled-native',
               }}
             >
               <option value={"English"}>English</option>
               <option value={"Arabic"}>Arabic</option>
             </NativeSelect>
           </FormControl>
          </div>

          {/* <PublicIcon></PublicIcon> */}
        </div>
          <img className='homePic home' src='https://arktura.com/wp-content/uploads/2015/06/Arktura-SoundStar-Los-Angeles-CA_WEB_1-scaled.jpg'/>
        {/* <div className='imgDiv'>
          <img className='dishPic homepic' src='https://media.istockphoto.com/id/1457979959/photo/snack-junk-fast-food-on-table-in-restaurant-soup-sauce-ornament-grill-hamburger-french-fries.webp?b=1&s=170667a&w=0&k=20&c=A_MdmsSdkTspk9Mum_bDVB2ko0RKoyjB7ZXQUnSOHl0='/>
        </div> */}
      </div>
      <div id='menu' className='menuPage'>
        <div className='menuHeadDiv'>
          <h1 className='menuHeading'>MENU</h1>
        </ div>
        <ul>
          <li><MenuItem heading="Truffle French Fries" describtion="Garlic, Parmesan, Fresh Herbs, Truffle Oil, Lemon Aioli"/></li>
          <li><MenuItem heading="Roasted Garlic Hummus & Warm Pita" describtion="Olive Oil, Sumac, Carrot & Cucumber Spears"/></li>
          <li><MenuItem heading="Crispy Brussels Sprouts " describtion="Pancetta, Balsamic, Feta
"/></li>
          <li><MenuItem heading="Chips & Guac" describtion="Fresh Guacamole, Cilantro, Cotija, Corn Chips
with Pico de Gallo "/></li>
          <li><MenuItem heading="Baby Kale Caesar Salad" describtion="Shaved Parmesan, Croutons, Anchovy
+ Grilled Chicken Breast 6 + Seared Salmon 8 + Herbed Tofu 6"/></li>
        </ul>
      </div>
      <div id='about' className='about'>
        <About/>
      </div>
    </div>
  );
}

export default App;
