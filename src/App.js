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
      <p1 id='jocator' className='text-white text-4xl'>The Jocator</p1>
      </div>
      <div className='relative'>
      <svg className='absolute -top-24 left-16' width="37" height="73" viewBox="0 0 37 73" fill="none" xmlns="http://www.w3.org/2000/svg">
<path id='steam1' d="M17 70C25.3356 59.2691 32.45 48.6318 33.5 34.6667C34.1024 26.6542 33.7567 14.6575 28.5556 7.88887C22.9745 0.625808 8.56593 0.614571 3.66667 8.88887C1.3775 12.755 2.53133 20.1642 6.94445 22.0555C9.48355 23.1437 17.4573 24.1916 19.7778 22C20.9964 20.8491 14.8499 17.0198 14 16" stroke="white" stroke-width="5" stroke-linecap="round"/>
</svg>
<svg className='absolute -top-24 left-36' width="32" height="83" viewBox="0 0 32 83" fill="none" xmlns="http://www.w3.org/2000/svg">
<path id='steam2' d="M3 80C7.1082 78.4784 11.0123 76.1697 12.3889 71.7222C15.1821 62.698 16.2039 49.7213 14.3889 40.4444C13.6944 36.8949 10.3703 32.6533 8 29.9444C4.29175 25.7064 5.22941 14.989 7.27778 10.2778C11.9022 -0.358488 30.9749 1.48718 29.1111 15C27.4888 26.7616 14.4389 21.1222 18 14" stroke="white" stroke-width="5" stroke-linecap="round"/>
</svg>
<svg className='absolute -top-24 left-52' width="32" height="76" viewBox="0 0 32 76" fill="none" xmlns="http://www.w3.org/2000/svg">
<path id='steam3' d="M17 73C-2.36732 71.924 0.166263 35.3987 16.3889 31.1667C19.7847 30.2808 24.2843 29.3603 26 25.5C27.3875 22.3781 30.8974 15.765 28.4445 12.6111C22.5689 5.05678 7.8442 19.6044 6.22223 16C1.87647 6.34276 10.9787 7.02129 15 3" stroke="white" stroke-width="5" stroke-linecap="round"/>
</svg>
      <button onClick={() => setCoffeePouring(true) }>
      <img id='cup' className={coffeePouring ? '-rotate-45 transition-all relative z-20' : null} src={coffeeImage} alt='cup of coffee'></img>
      </button>
      {coffeePouring ? 
      <svg className='absolute top-[9.1rem] -left-[2.0rem] -scale-x-100 z-0' width="116" height="678" viewBox="0 0 116 678" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path id='coffee' d="M86.6808 11C94.7978 31.4175 103.276 49.5778 105.074 72.0015C108.401 113.502 102.81 156.544 87.5619 195.238C70.0514 239.673 44.2297 279.895 28.8591 325.315C11.8922 375.451 7.57152 427.877 11.1821 480.622C13.4825 514.226 19.8859 548.903 34.0906 579.581C41.5613 595.716 52.3342 610.792 58.651 627.407C63.2326 639.457 67.8475 654.966 67.8475 668" stroke="#A16207" stroke-width="20" stroke-linecap="round"/>
      </svg>      
       : null}
      </div>
      {error}
      {coffeePouring ? <div id='coffeedata' className='flex flex-col w-full md:w-[40rem] bg-neutral-950 bg-opacity-80 rounded-lg overflow-hidden absolute -bottom-[54rem] opacity-0 z-20'>
        <CoffeeShopFinder latitude={latitude} longitude={longitude}/>
      </div> : null}
      <footer className='absolute -bottom-[110vh] text-white'>Github repo: github.com/blahlbahlbah</footer>
      </div>
  );
}

export default App;
