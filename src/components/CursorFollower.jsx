import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function CursorFollower() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const setX = gsap.quickTo(cursorRef.current, 'x', { duration: 0.2 });
    const setY = gsap.quickTo(cursorRef.current, 'y', { duration: 0.2 });
    const setFX = gsap.quickTo(followerRef.current, 'x', { duration: 0.4 });
    const setFY = gsap.quickTo(followerRef.current, 'y', { duration: 0.4 });

    const onMouse = (e) => {
      const { clientX: x, clientY: y } = e;
      setX(x); setY(y);
      setFX(x); setFY(y);
    };
    window.addEventListener('mousemove', onMouse);
    return () => window.removeEventListener('mousemove', onMouse);
  }, []);

  return (
    <>
      <span
        ref={cursorRef}
        className="fixed h-2 w-2 bg-blueish rounded-full pointer-events-none z-[9999] transform -translate-x-1/2 -translate-y-1/2"
      />
      <span
        ref={followerRef}
        className="fixed h-8 w-8 border-2 border-purplish rounded-full pointer-events-none opacity-50 z-[9998] transform -translate-x-1/2 -translate-y-1/2"
      />
    </>
  );
}
