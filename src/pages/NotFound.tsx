import { useEffect, useState } from 'react';
import img_404 from '../assets/404.png';

function NotFound() {
  const [seconds, setseconds] = useState<number>(5);

  useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => {
        setseconds(seconds - 1);
      }, 1000);
    } else {
      window.location.href = '/';
    }
  }, [seconds]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <h2>oops...</h2>
      <img src={img_404} alt="404" />
      <h3>Redirect back to home page in {seconds} seconds.</h3>
    </div>
  );
}

export default NotFound;
