import React, { useState, useEffect, useRef } from 'react';
import { SquareCode, Bot, CodeXml } from 'lucide-react';

function ServicesPage() {
  const phrases = ['Web Development.', 'Back-End Developer.', 'App Developing'];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isAdding, setIsAdding] = useState(true);
  const [cursor, setCursor] = useState(true);
  const [visibleElements, setVisibleElements] = useState({});

  const elementRefs = useRef([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayedText((prev) => {
        const fullText = phrases[currentPhraseIndex];
        if (isAdding) {
          if (prev.length === fullText.length) {
            setIsAdding(false);
            return prev;
          }
          return fullText.slice(0, prev.length + 1);
        } else {
          if (prev === '') {
            setIsAdding(true);
            setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
            return '';
          }
          return prev.slice(0, -1);
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isAdding, currentPhraseIndex]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setVisibleElements((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1 }
    );

    elementRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      elementRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !elementRefs.current.includes(el)) {
      elementRefs.current.push(el);
    }
  };

  const [timercChange, setTimerChange] = useState(false);
  const [timerAwal, setTimerAwal] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimerAwal(false);
      setTimeout(() => {
        setTimerChange((prev) => !prev);
        setTimerAwal(true);
      }, 500);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="w-full h-[100vh] flex flex-col"
      style={{
        backgroundImage: `url(/profile-danny/bg/bg-services.png)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: '50%, 50%',
      }}
    >
      <div className="mt-12 ml-[10%]">
        <h1
          ref={addToRefs}
          id="serviceTitle"
          className={`font-arial font-semibold text-gray-500 transition-all duration-1000 ${
            visibleElements.serviceTitle ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
          }`}
        >
          My Services
        </h1>
        <h1
          ref={addToRefs}
          id="skillsTitle"
          className={`font-serif font-bold text-2xl mt-2 transition-all duration-1000 ${
            visibleElements.skillsTitle ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
          }`}
        >
          Here Are Some of My Skills
        </h1>
      </div>
      <div className="mr-[10%] grid grid-cols-3 max-sm:grid-cols-2 grid-row-2 grid-flow-row-dense gap-5 ml-[10%] mt-32">
        <div
          ref={addToRefs}
          id="webDev"
          className={`border-2 rounded transition-all duration-1000 hover:scale-110 hover:bg-black hover:text-white border-purple-700 h-44 max-sm:h-auto col-span-2 bg-purple-300 flex flex-col ${
            visibleElements.webDev ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
          }`}
        >
          <div className="animate-pulse hover:animate-none">
            <SquareCode className="mt-3 ml-3" />
            <h1 className="ml-3 mt-1">Web Development</h1>
            <p className="ml-3 mr-3 mt-2">
              Modern and mobile-ready website that will help you reach all your marketing.
            </p>
          </div>
        </div>
        <div
          ref={addToRefs}
          id="appDev"
          className={`border-2 rounded transition-all duration-1000 hover:scale-110 hover:bg-black hover:text-white border-purple-700 h-44 max-sm:h-auto col-span-2 bg-purple-300 ${
            visibleElements.appDev ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
          }`}
        >
          <div className="animate-pulse hover:animate-none">
            <Bot className="mt-3 ml-3" />
            <h1 className="ml-3 mt-1">App Developing</h1>
            <p className="ml-3 mr-3 mt-2">
              Crafting sleek and scalable mobile applications to amplify your digital presence and engage your audience on-the-go.
            </p>
          </div>
        </div>
        <div
          ref={addToRefs}
          id="skillsIntro"
          className={`max-sm:hidden flex flex-col transition-all duration-1000 ${
            visibleElements.skillsIntro ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
          }`}
        >
          <div className="self-end flex absolute">
            <h1 className="text-purple-700 font-bold text-xl mr-2 font-serif">I'm</h1>
            <h1 className="text-xl underline font-serif">
              {displayedText}
              <span className="cursor">{cursor ? '|' : ' '}</span>
            </h1>
          </div>
        </div>
        <div
          ref={addToRefs}
          id="skillsList"
          className={`max-sm:hidden md:hidden lg:flex  flex flex-col text-center transition-all duration-1000 ${
            visibleElements.skillsList ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
          }`}
        >
          <h1
            className={`text-2xl font-serif transition-all duration-700 ${
              timercChange ? 'text-purple-700' : 'text-gray-700'
            }`}
          >
            Skill
          </h1>
          <div className="flex gap-5 mt-2">
            <ul className="text-start ml-[20%]">
              <li className="flex">
                <CodeXml className="mr-2" />
                Python
              </li>
              <li className="flex">
                <CodeXml className="mr-2" />
                React.js
              </li>
              <li className="flex">
                <CodeXml className="mr-2" />
                MySql
              </li>
              <li className="flex">
                <CodeXml className="mr-2" />
                Golang
              </li>
            </ul>
            <ul className="text-start">
              <li className="flex">
                <CodeXml className="mr-2" />
                Tailwind
              </li>
              <li className="flex">
                <CodeXml className="mr-2" />
                Scss
              </li>
              <li className="flex">
                <CodeXml className="mr-2" />
                HTML
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;
