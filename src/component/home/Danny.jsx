import React from 'react';
import { useState, useEffect } from 'react';
import Navbar from './Navbar'

function Danny() {
  const [isOpen, setIsOpen] = useState(false);

  const [timercChange, setTimerChange] = useState(false);
  const [timerAwal, setTimerAwal] = useState(true)

  useEffect(() => {
    // Start the blink effect after the first image is displayed
    const interval = setInterval(() => {
      setTimerAwal(false); // Start the blink transition by setting the image to invisible
      setTimeout(() => {
        setTimerChange(prev => !prev); // Change the image source after the blink transition
        setTimerAwal(true); // Make the image visible again
      }, 500); // 0.5 second delay to create the blink effect
    }, 10000); // Change image every 10 seconds

    return () => clearInterval(interval);
  }, []);


  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsOpen(true);
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  const fotodanny = ['/profile-danny/danny_photo/danny_nobg.png','/profile-danny/danny_photo/danny_nobg1.png']

  return (
    <div className={`w-full h-[100vh] bg-slate-300 flex flex-col max-sm:h-auto sm:h-auto md:h-[100vh]`} style={
      {backgroundImage: `url(/profile-danny/bg/bg_profile.png)`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: '50%, 50%'}
    }>
      <Navbar />
      <div className=' mt-32'>
        <div className='flex justify-evenly max-sm:flex-col max-sm:items-center sm:flex-col sm:items-center md:flex-row md:items-start'> {/* gambar danny */}
          <div className={`shadow-lg rounded-lg max-sm:h-auto max-sm:w-[100%] sm:w-1/2 md:w-1/3 lg:w-1/4 transition-all duration-[3000ms] ${isOpen 
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-x-full'}`}>
          <img 
          src={`${timercChange ? fotodanny[1] : fotodanny[0]}`} 
          className={`select-none w-full h-[420px] object-center object-cover rounded-lg transition-opacity duration-500 ${timerAwal ? 'opacity-100' : 'opacity-0'}`}
          alt='danny photo'/>
          </div>
          <div className='mt-16 w-[50%] max-sm:w-[80%]'> {/* card danny */ }
            <div className={`shadow-lg rounded-lg transition-all duration-[3000ms] ${isOpen 
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-x-full'}`}>
              <h1 className={`font-serif text-5xl select-none transition-all duration-500 ${timerAwal ? 'opacity-100' : 'opacity-0 '}`}>
                {
                  timercChange
                  ? "Saya"
                  : "Danny"
                }
              </h1>
              <h2 className={`font-serif text-2xl select-none ml-6 transition-all duration-500 ${timerAwal ? 'opacity-100' : 'opacity-0'}`}>
                {
                  timercChange
                ? "Adalah Programer"
                  : "Darmawan Putra"
                }
              </h2>
            </div>
            <div className='mt-10 justify-around gap-16 flex'>
              <div className='flex flex-col items-center max-sm:hidden'>
                <h1 className='[writing-mode:vertical-lr] tracking-[.4em] font-bold text-2xl text-gray-500 cursor-default select-none'>ABOUT</h1>
                <div className='h-[30px] bg-gray-500 w-[2px]'></div>
              </div>
              <div className='text-gray-500'>
                <div className='flex flex-col'>
                  <div className={`transition-all duration-[3000ms] ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-x-full'}`}>
                  <p className='w-auto text-justify'>
                    Di celah waktu yang sunyi Di antara derap langkah hari Aku mencari cahaya Yang dinamakan kebahagiaan sejati. Ketika satu pintu kebahagiaan tertutup, pintu lain terbuka; tetapi seringkali kita terpaku pada pintu yang tertutup sehingga kita tidak melihat pintu yang telah dibukakan untuk kita.
                  </p>
                  </div>
                </div>
                {/*Icon Icon*/}
                <div className={`flex flex-row gap-3 transition-all duration-[2000ms] ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-60'}`}>
                <a href="mailto:dannydarmawan359@gmail.com" className='mt-4 inline-block'>
                <svg width="30px" height="30px" viewBox="0 0 192 192" fill='none' xmlns="http://www.w3.org/2000/svg">
                      <path stroke="#000000" strokeLinejoin="round" strokeWidth="12" d="M22 57.265V142c0 5.523 4.477 10 10 10h24V95.056l40 30.278 40-30.278V152h24c5.523 0 10-4.477 10-10V57.265c0-13.233-15.15-20.746-25.684-12.736L96 81.265 47.684 44.53C37.15 36.519 22 44.032 22 57.265Z"/>
                </svg></a>
                <a href="https://www.linkedin.com/in/danny-darmawan-putra/" className='mt-4 inline-block'>
                <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.5 8C7.32843 8 8 7.32843 8 6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8Z" fill="#0F0F0F"/>
                      <path d="M5 10C5 9.44772 5.44772 9 6 9H7C7.55228 9 8 9.44771 8 10V18C8 18.5523 7.55228 19 7 19H6C5.44772 19 5 18.5523 5 18V10Z" fill="#0F0F0F"/>
                      <path d="M11 19H12C12.5523 19 13 18.5523 13 18V13.5C13 12 16 11 16 13V18.0004C16 18.5527 16.4477 19 17 19H18C18.5523 19 19 18.5523 19 18V12C19 10 17.5 9 15.5 9C13.5 9 13 10.5 13 10.5V10C13 9.44771 12.5523 9 12 9H11C10.4477 9 10 9.44772 10 10V18C10 18.5523 10.4477 19 11 19Z" fill="#0F0F0F"/>
                      <path fillRule="evenodd" clipRule="evenodd" d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z" fill="#0F0F0F"/>
                      </svg></a>
                <a href="https://www.youtube.com/channel/UCLK1Q14iFCKjhIreZ0BJTjQ" className='mt-4 inline-block'>
                <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M9.49614 7.13176C9.18664 6.9549 8.80639 6.95617 8.49807 7.13509C8.18976 7.31401 8 7.64353 8 8V16C8 16.3565 8.18976 16.686 8.49807 16.8649C8.80639 17.0438 9.18664 17.0451 9.49614 16.8682L16.4961 12.8682C16.8077 12.6902 17 12.3589 17 12C17 11.6411 16.8077 11.3098 16.4961 11.1318L9.49614 7.13176ZM13.9844 12L10 14.2768V9.72318L13.9844 12Z" fill="#0F0F0F"/>
                      <path fillRule="evenodd" clipRule="evenodd" d="M0 12C0 8.25027 0 6.3754 0.954915 5.06107C1.26331 4.6366 1.6366 4.26331 2.06107 3.95491C3.3754 3 5.25027 3 9 3H15C18.7497 3 20.6246 3 21.9389 3.95491C22.3634 4.26331 22.7367 4.6366 23.0451 5.06107C24 6.3754 24 8.25027 24 12C24 15.7497 24 17.6246 23.0451 18.9389C22.7367 19.3634 22.3634 19.7367 21.9389 20.0451C20.6246 21 18.7497 21 15 21H9C5.25027 21 3.3754 21 2.06107 20.0451C1.6366 19.7367 1.26331 19.3634 0.954915 18.9389C0 17.6246 0 15.7497 0 12ZM9 5H15C16.9194 5 18.1983 5.00275 19.1673 5.10773C20.0989 5.20866 20.504 5.38448 20.7634 5.57295C21.018 5.75799 21.242 5.98196 21.4271 6.23664C21.6155 6.49605 21.7913 6.90113 21.8923 7.83269C21.9973 8.80167 22 10.0806 22 12C22 13.9194 21.9973 15.1983 21.8923 16.1673C21.7913 17.0989 21.6155 17.504 21.4271 17.7634C21.242 18.018 21.018 18.242 20.7634 18.4271C20.504 18.6155 20.0989 18.7913 19.1673 18.8923C18.1983 18.9973 16.9194 19 15 19H9C7.08058 19 5.80167 18.9973 4.83269 18.8923C3.90113 18.7913 3.49605 18.6155 3.23664 18.4271C2.98196 18.242 2.75799 18.018 2.57295 17.7634C2.38448 17.504 2.20866 17.0989 2.10773 16.1673C2.00275 15.1983 2 13.9194 2 12C2 10.0806 2.00275 8.80167 2.10773 7.83269C2.20866 6.90113 2.38448 6.49605 2.57295 6.23664C2.75799 5.98196 2.98196 5.75799 3.23664 5.57295C3.49605 5.38448 3.90113 5.20866 4.83269 5.10773C5.80167 5.00275 7.08058 5 9 5Z" fill="#0F0F0F"/>
                      </svg></a>
                      </div>
              </div>
            </div>
            <div className={`mt-10 rounded-full bg-gray-500 transition-all duration-[4000ms] ${isOpen ? 'w-full' : 'w-2'} h-1`}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Danny;
