import { useEffect, useState } from 'react';

export function useTypewriter(text = '', speed = 80, delay = 600) {
  const [displayedText, setDisplayedText] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    let index = 0;
    let timer;

    const delayTimeout = setTimeout(() => {
      timer = setInterval(() => {
        if (index < text.length) {
          setDisplayedText(text.slice(0, index + 1));
          index++;
        } else {
          setIsCompleted(true);
          clearInterval(timer);
        }
      }, speed);
    }, delay);

    return () => {
      clearTimeout(delayTimeout);
      if (timer) clearInterval(timer);
    };
  }, [text, speed, delay]);

  return { displayedText, isCompleted };
}
