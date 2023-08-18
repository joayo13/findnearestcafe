import { useEffect, useState } from 'react';
import CoffeeShopFinder from './CoffeeShopFinder';
import coffeeImage from './Frame 1 (5).png'

function App() {
  const [coffeePouring, setCoffeePouring] = useState(false)
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
          },
          (err) => {
            setError(err.message);
          }
        );
      } else {
        setError('Geolocation is not supported by this browser.');
      }
    };

    fetchLocation();
  }, []);

  function scrollDownSmooth(lastY) {
    window.scroll(0, window.scrollY + 2)
    let scrollYamount = window.scrollY
    const myTimeout = setTimeout(() => {scrollDownSmooth(window.scrollY)}, 2)
    if(scrollYamount === lastY) {
      clearTimeout(myTimeout)
    }
    
  }
  
  useEffect(() => {
    if(!coffeePouring) {
      return
    }
    scrollDownSmooth()
  },[coffeePouring])
  return (
    <div id='beans' className="flex flex-col relative items-center py-4">
      <div className="flex py-32">
      </div>
      <div className='relative'>
        {!coffeePouring ? <div>
      <svg className='absolute -top-24 left-16' width="37" height="73" viewBox="0 0 37 73" fill="none" xmlns="http://www.w3.org/2000/svg">
<path id='steam1' d="M17 70C25.3356 59.2691 32.45 48.6318 33.5 34.6667C34.1024 26.6542 33.7567 14.6575 28.5556 7.88887C22.9745 0.625808 8.56593 0.614571 3.66667 8.88887C1.3775 12.755 2.53133 20.1642 6.94445 22.0555C9.48355 23.1437 17.4573 24.1916 19.7778 22C20.9964 20.8491 14.8499 17.0198 14 16" stroke="white" stroke-width="5" stroke-linecap="round"/>
</svg>
<svg className='absolute -top-24 left-36' width="32" height="83" viewBox="0 0 32 83" fill="none" xmlns="http://www.w3.org/2000/svg">
<path id='steam2' d="M3 80C7.1082 78.4784 11.0123 76.1697 12.3889 71.7222C15.1821 62.698 16.2039 49.7213 14.3889 40.4444C13.6944 36.8949 10.3703 32.6533 8 29.9444C4.29175 25.7064 5.22941 14.989 7.27778 10.2778C11.9022 -0.358488 30.9749 1.48718 29.1111 15C27.4888 26.7616 14.4389 21.1222 18 14" stroke="white" stroke-width="5" stroke-linecap="round"/>
</svg>
<svg className='absolute -top-24 left-52' width="32" height="76" viewBox="0 0 32 76" fill="none" xmlns="http://www.w3.org/2000/svg">
<path id='steam3' d="M17 73C-2.36732 71.924 0.166263 35.3987 16.3889 31.1667C19.7847 30.2808 24.2843 29.3603 26 25.5C27.3875 22.3781 30.8974 15.765 28.4445 12.6111C22.5689 5.05678 7.8442 19.6044 6.22223 16C1.87647 6.34276 10.9787 7.02129 15 3" stroke="white" stroke-width="5" stroke-linecap="round"/>
</svg>
</div> : null}
      <button onClick={() => setCoffeePouring(true) }>
      <img id='cup' className={coffeePouring ? '-rotate-45 transition-all relative z-20' : null} src={coffeeImage} alt='cup of coffee'></img>
      </button>
      {coffeePouring ? 
      <svg className='absolute top-[9.4rem] -left-[2.1rem] -scale-x-100 z-0' width="106" height="668" viewBox="0 0 106 668" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path id='coffee' d="M81.6808 6C89.7978 26.4175 98.2758 44.5778 100.074 67.0015C103.401 108.502 97.8102 151.544 82.5619 190.238C65.0514 234.673 39.2297 274.895 23.8591 320.315C6.89221 370.451 2.57152 422.877 6.18215 475.622C8.48249 509.226 14.8859 543.903 29.0906 574.581C36.5613 590.716 47.3342 605.792 53.651 622.407C58.2326 634.457 62.8475 649.966 62.8475 663" stroke="#A16207" stroke-width="10" stroke-linecap="round"/>
      </svg>
            
       : null}
      </div>
      {error}
      {coffeePouring ? <div id='coffeedata' className='flex flex-col w-full md:w-[40rem] border border-neutral-800 bg-neutral-950 bg-opacity-80 rounded-lg overflow-hidden absolute -bottom-[35rem] opacity-0 z-20'>
        <CoffeeShopFinder latitude={latitude} longitude={longitude}/>
      </div> : null}
      <footer className='absolute -bottom-[40rem] text-white'>Github repo: <a className='underline text-blue-500' href='https://github.com/joayo13/findnearestcafe'>https://github.com/joayo13/findnearestcafe</a></footer>
      </div>
  );
}

export default App;
