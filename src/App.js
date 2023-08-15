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
    window.scroll(0, window.scrollY + 1)
    let scrollYamount = window.scrollY
    const myTimeout = setTimeout(() => {scrollDownSmooth(window.scrollY)}, 4)
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
    <div className="flex flex-col relative items-center py-4">
      <div className="flex py-12">
      <p1 className='text-white text-4xl'>Jocator</p1>
      </div>
      <div className='relative'>
      <button onClick={() => setCoffeePouring(true) }>
      <img id='cup' className={coffeePouring ? '-rotate-45 transition-all relative z-20' : 'opacity-0'} src={coffeeImage} alt='cup of coffee'></img>
      </button>
      {coffeePouring ? 
      <svg className='absolute top-[9.1rem] -left-[2.2rem] -scale-x-100 z-0' width="116" height="678" viewBox="0 0 116 678" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path id='coffee' d="M86.6808 11C94.7978 31.4175 103.276 49.5778 105.074 72.0015C108.401 113.502 102.81 156.544 87.5619 195.238C70.0514 239.673 44.2297 279.895 28.8591 325.315C11.8922 375.451 7.57152 427.877 11.1821 480.622C13.4825 514.226 19.8859 548.903 34.0906 579.581C41.5613 595.716 52.3342 610.792 58.651 627.407C63.2326 639.457 67.8475 654.966 67.8475 668" stroke="#A16207" stroke-width="20" stroke-linecap="round"/>
      </svg>      
       : null}
      </div>
      <div id='blockingbox' className='w-full absolute -bottom-[50rem] z-20'></div>
      {error}
      {coffeePouring ? <div id='coffeedata' className='flex flex-col w-full md:w-[40rem] bg-lime-700 rounded-lg absolute -bottom-[50rem] opacity-0 z-20'>
        <CoffeeShopFinder latitude={latitude} longitude={longitude}/>
      </div> : null}
      </div>
  );
}

export default App;
