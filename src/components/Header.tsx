import { Breadcrumb } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import React from 'react';

const menuItems = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="/threebuttons">
        Three Buttons
      </a>
    ),
  },
];

const Header: React.FC<{ name: string }> = props => {
  return (
    <div
      style={{
        position: 'fixed',
        top: '1em',
        left: '1em',
      }}
    >
      <Breadcrumb
        items={[
          {
            href: '/',
            title: <HomeOutlined />,
          },
          {
            title: <a href="">{props.name}</a>,
            menu: { items: menuItems },
          },
        ]}
      />
    </div>
  );
};

export default Header;
