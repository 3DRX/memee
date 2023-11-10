import { Breadcrumb, ConfigProvider } from 'antd';
import { GithubOutlined, HomeOutlined } from '@ant-design/icons';
import React from 'react';
import { THREE_BUTTONS } from '../consts';

const menuItems = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="/threebuttons">
        {THREE_BUTTONS}
      </a>
    ),
  },
];

const Header: React.FC<{ name: string }> = props => {
  return (
    <div
      style={{
        position: 'fixed',
        top: '2em',
        left: '2em',
        width: 'calc(100% - 4em)',
        display: 'flex',
      }}
    >
      <ConfigProvider
        theme={{
          token: {
            fontSize: 20,
          },
          components: {
            Breadcrumb: {
              iconFontSize: 20,
            },
          },
        }}
      >
        <Breadcrumb
          items={
            props.name !== ''
              ? [
                  {
                    href: '/',
                    title: <HomeOutlined />,
                  },
                  {
                    title: <a href="">{props.name}</a>,
                    menu: { items: menuItems },
                  },
                ]
              : [
                  {
                    href: '/',
                    title: <HomeOutlined />,
                  },
                ]
          }
        />
        <div
          style={{
            marginLeft: 'auto',
          }}
        >
          <Breadcrumb
            items={[
              {
                href: 'https://github.com/3DRX',
                title: <GithubOutlined />,
              },
            ]}
          />
        </div>
      </ConfigProvider>
    </div>
  );
};

export default Header;
