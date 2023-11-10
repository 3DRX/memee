import { Card } from 'antd';
import thumb_threebuttons from '../assets/switches.png';
import { THREE_BUTTONS } from '../consts';
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
        <h1 className="title">memee</h1>
        <h2>An animation & meme generator.</h2>
        <Card
          hoverable
          style={{ width: 240 }}
          cover={<img alt="example" src={thumb_threebuttons} />}
          onClick={() => {
            navigate('/threebuttons');
          }}
        >
          <Meta
            title={THREE_BUTTONS}
            description="Ordinary 3 switch-buttons."
          />
        </Card>
        <Footer />
      </div>
    </>
  );
}

export default Main;
