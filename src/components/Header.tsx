import { Breadcrumb, ConfigProvider } from 'antd';
import { GithubOutlined, HomeOutlined } from '@ant-design/icons';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC<{ name: string }> = props => {
  const location = useLocation();

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
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to="/">
                <HomeOutlined />
              </Link>
            </Breadcrumb.Item>
            {props.name === '' ? null : (
              <Breadcrumb.Item>
                <Link to={location}>{props.name}</Link>
              </Breadcrumb.Item>
            )}
          </Breadcrumb>
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
