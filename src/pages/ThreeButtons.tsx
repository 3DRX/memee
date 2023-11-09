import { useState } from 'react';
import Switch from '@mui/material/Switch';
import Header from '../components/Header';

function ThreeButtons() {
  const [checked1, setchecked1] = useState<Boolean>(false);
  const [checked2, setchecked2] = useState<Boolean>(false);
  const [checked3, setchecked3] = useState<Boolean>(false);

  return (
    <>
      <Header name='Three Buttons' />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Switch checked={checked1} onChange={() => setchecked3(!checked3)} />
        <Switch checked={checked2} onChange={() => setchecked1(!checked1)} />
        <Switch checked={checked3} onChange={() => setchecked2(!checked2)} />
      </div>
    </>
  );
}

export default ThreeButtons;
