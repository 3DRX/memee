import { Card } from 'antd';
import thumb_threebuttons from '../assets/three_buttons.png';
import { THREE_BUTTONS } from '../consts';

const { Meta } = Card;
function Main() {
  return (
    <>
      <h1 className="title">memee</h1>
      <h2>A meme generator.</h2>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src={thumb_threebuttons} />}
        onClick={() => {
          window.location.href = '/threebuttons';
        }}
      >
        <Meta title={THREE_BUTTONS} description="Ordinary 3 switch-buttons." />
      </Card>
    </>
  );
}

export default Main;
