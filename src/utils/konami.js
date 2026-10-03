import { useEffect, useState } from 'react';

const KONAMI_SEQUENCE = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a'
];

export function useKonamiCode(onSuccess) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key;
      const expectedKey = KONAMI_SEQUENCE[index];

      if (key.toLowerCase() === expectedKey.toLowerCase()) {
        const nextIndex = index + 1;
        if (nextIndex === KONAMI_SEQUENCE.length) {
          onSuccess();
          setIndex(0);
        } else {
          setIndex(nextIndex);
        }
      } else {
        // Reset or restart if the first key was pressed
        setIndex(key.toLowerCase() === KONAMI_SEQUENCE[0].toLowerCase() ? 1 : 0);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [index, onSuccess]);
}
