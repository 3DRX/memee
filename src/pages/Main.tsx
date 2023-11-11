import { Card } from 'antd';
import thumb_threebuttons from '../assets/switches.png';
import thumb_AD from '../assets/AD.jpg';
import { AD, THREE_BUTTONS } from '../consts';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

const { Meta } = Card;
function Main() {
  const navigate = useNavigate();

  return (
    <>
      <Header name="" />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h1 style={{ marginTop: '0em' }} className="title">
          memee
        </h1>
        <h2 style={{ marginTop: '0em' }}>An animation & meme generator.</h2>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 15,
          }}
        >
          <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt={THREE_BUTTONS} src={thumb_threebuttons} />}
            onClick={() => {
              navigate('/threebuttons');
            }}
          >
            <Meta
              title={THREE_BUTTONS}
              description="Ordinary 3 switch-buttons."
            />
          </Card>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt={AD} src={thumb_AD} />}
            onClick={() => {
              navigate('/ad');
            }}
          >
            <Meta title={AD} description="Anthony Davis in the corner." />
          </Card>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Main;
