import { HeartTwoTone } from '@ant-design/icons';

function Footer() {
  return (
    <div
      style={{
        justifyContent: 'center',
        marginTop: '10em',
      }}
    >
      <h4>
        made with <HeartTwoTone twoToneColor="#eb2f96" /> by{' '}
        <a
          href="https://3drx.top"
          style={{
            fontWeight: 'bold',
          }}
        >
          3DRX
        </a>
      </h4>
    </div>
  );
}

export default Footer;
