import { useState } from 'react';
import Switch from '@mui/material/Switch';
import Header from '../components/Header';
import { THREE_BUTTONS } from '../consts';
import Footer from '../components/Footer';
import { Input, Button } from 'antd';

function ThreeButtons() {
  const [checked1, setchecked1] = useState<boolean>(false);
  const [checked2, setchecked2] = useState<boolean>(false);
  const [checked3, setchecked3] = useState<boolean>(false);
  const [queue, setqueue] = useState<number[]>([]);
  const [confirmed, setconfirmed] = useState<boolean>(false);

  function toogleSwitch(n: number) {
    if (n === 1) {
      setchecked1(!checked1);
    } else if (n === 2) {
      setchecked2(!checked2);
    } else {
      setchecked3(!checked3);
    }
  }

  function handleSwitchChange(n: number) {
    if (queue.find((item: number) => item === n)) {
      setqueue(queue.filter((item: number) => item !== n));
      toogleSwitch(n);
    } else {
      if (queue.length === 2) {
        const temp: number | undefined = queue.shift();
        if (temp !== undefined) {
          toogleSwitch(temp);
          toogleSwitch(n);
          queue.push(n);
        }
      } else {
        queue.push(n);
        toogleSwitch(n);
      }
    }
  }

  const itemStyle: any = {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '1em',
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Header name={THREE_BUTTONS} />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '1em',
          justifyContent: 'center',
        }}
      >
        <div style={itemStyle}>
          <Switch checked={checked1} onChange={() => handleSwitchChange(1)} />
          <Input placeholder="Use Arch" bordered={!confirmed} />
        </div>
        <div style={itemStyle}>
          <Switch checked={checked2} onChange={() => handleSwitchChange(2)} />
          <Input placeholder="In relationship" bordered={!confirmed} />
        </div>
        <div style={itemStyle}>
          <Switch checked={checked3} onChange={() => handleSwitchChange(3)} />
          <Input placeholder="As a guy" bordered={!confirmed} />
        </div>
      </div>
      <Button
        style={{
          marginTop: '5em',
          width: '7em',
        }}
        onClick={() => {
          setconfirmed(!confirmed);
        }}
      >
        {confirmed ? 'edit' : 'confirm'}
      </Button>
      <Footer />
    </div>
  );
}

export default ThreeButtons;
