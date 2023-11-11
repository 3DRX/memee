import Header from '../components/Header';
import Footer from '../components/Footer';
import img_AD from '../assets/AD.jpg';
import { AD as AD_ } from '../consts';
import { useState } from 'react';
import { Button, ConfigProvider } from 'antd';
import TextArea from 'antd/es/input/TextArea';

function AD() {
  const [confirmed, setconfirmed] = useState<boolean>(false);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Header name={AD_} />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '3em',
          justifyContent: 'center',
          maxWidth: 'calc(100vw - 4em)',
        }}
      >
        <img
          src={img_AD}
          alt="AD"
          style={{
            width: 'auto',
            height: 'auto',
            maxWidth: '100%',
          }}
        />
        <ConfigProvider
          theme={{
            token: {
              colorTextDisabled: '#000',
            },
          }}
        >
          <TextArea
            style={{
              position: 'relative',
              width: '40%',
              marginLeft: '50%',
              resize: 'none',
              marginTop: '-50%',
              marginBottom: '20%',
            }}
            size="large"
            autoSize={{ minRows: 5, maxRows: 5 }}
            placeholder="Lorem ipsum"
            bordered={!confirmed}
            disabled={confirmed}
          />
        </ConfigProvider>
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

export default AD;
