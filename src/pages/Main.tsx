import { Card } from 'antd';
import thumb_threebuttons from '../assets/three_buttons.png';

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
        <Meta title="Three Button" description="www.instagram.com" />
      </Card>
    </>
  );
}

export default Main;
