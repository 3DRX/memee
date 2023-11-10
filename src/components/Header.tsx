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
        top: '0em',
        left: '0',
        height: '3em',
        width: '100%',
        display: 'flex',
        backgroundColor: '#fff',
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
        <div
          style={{
            marginTop: '1em',
            marginLeft: '2em',
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
        </div>
        <div
          style={{
            marginTop: '1em',
            marginLeft: 'auto',
            marginRight: '2em',
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
