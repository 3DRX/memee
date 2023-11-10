import { HeartTwoTone } from '@ant-design/icons';

function Footer() {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: '2em',
        left: '2em',
        width: 'calc(100% - 4em)',
        display: 'flex',
        justifyContent: 'center',
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
