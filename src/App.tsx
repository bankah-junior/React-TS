import logo from '../src/assets/logo.png';
import LeftImgRightText from './components/LeftImgRightText';
import RightImgLeftText from './components/RightImgLeftText';
import { useState } from 'react';
import { data } from './database/data';

function App() {
  let [contentId, setContentId] = useState(0);

  const handleNext = () => {
    if (contentId >= 0 && contentId <= (data.length - 2)) {
      setContentId((previousContent) => previousContent + 1);
    } else if (contentId === (data.length-1)) {
      setContentId(0);
    }
  }
  
  const handlePrevious = () => {
    if (contentId > 0) {
      setContentId((previousContent) => previousContent - 1);
    } else if (contentId === 0) {
      setContentId((data.length-1))
    }
  }
  
  return (
    <div className="w-screen overflow-hidden h-screen border-[6px] border-[#ec5755] bg-[#15304d]">
      {/* Navigation Bar */}
      <nav className='absolute flex items-center justify-between w-[97%] px-6'>
        <div className="hidden left-nav-menu md:block">
          <img src={logo} alt="logo" width={100} height={100} />
        </div>
        <div className="middle-nav-menu grid place-content-center rounded-b-lg md:h-20 p-4 md:w-96 bg-[#ec5755] text-white absolute top-0 left-[20%] md:left-[40%]">
            <h3 className="text-3xl font-bold">
              Fashion World
            </h3>
        </div>
        <div className="hidden space-x-4 text-xl text-white md:flex right-nav-menu">
          <span>Search</span>
          <span>Cart</span>
        </div>
      </nav>
      {/* End of Navigation Bar */}

      {/* Main Contents */}
      {data[contentId].direction === "left"
      ?<LeftImgRightText image={data[contentId].image} text1={data[contentId].text1} text2={data[contentId].text2} />
      :<RightImgLeftText image={data[contentId].image} text1={data[contentId].text1} text2={data[contentId].text2} />
      }
      {/* End of Main Contents */}
      
      {/* Control Buttons */}
      <div className="absolute left-[25%] md:left-[40%] text-4xl flex items-center font-bold rounded-t text-black bottom-[6px] w-48 bg-white">
        <button className='w-1/2' onClick={handlePrevious}>&lt;</button>
        <button className='w-1/2' onClick={handleNext}>&gt;</button>
      </div>
      {/* End of Control Buttons */}
      
      {/* Additional Text */}
      <div className="bg-[#ec5755] flex items-center py-4 flex-col justify-around absolute md:text-base text-sm right-0 w-12 md:w-24 bottom-[6px] text-white h-60 md:h-72">
        <span>F</span>
        <span>A</span>
        <span>S</span>
        <span>H</span>
        <span>I</span>
        <span>O</span>
        <span>N</span>
        <span>A</span>
        <span>B</span>
        <span>L</span>
        <span>E</span>
      </div>
      {/* End of Additional Text */}
    </div>
  );
}

export default App;
