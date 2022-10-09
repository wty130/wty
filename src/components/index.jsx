import {
  ContainerOutlined,
  DesktopOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import { Button, Menu } from 'antd';
import React, { useState } from 'react';
import Input from './a'
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}



const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [state, setState] = useState("123")
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  const items = [
    getItem(`${state}`, '1', <PieChartOutlined />),
    getItem('Option 2', '2', <DesktopOutlined />),
    getItem('Option 3', '3', <ContainerOutlined />)
  ];
  const click = () => {
    console.log('====================================');
    console.log("哈哈哈");
    console.log('====================================');
  }
  const changeState = (value) => {
    console.log('====================================');
    console.log(value);
    console.log('====================================');
    setState(value)
  }
  return (
    <div
      style={{
        width: 256,
      }}
    >
      <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{
          marginBottom: 16,
        }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        items={items}
        onClick={click}
      />
      <Input changeState={changeState} />
    </div>
  );
};

export default App;