import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  HomeOutlined,
  CopyOutlined,
  UnorderedListOutlined,
  UserOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';
import "../styles/DefaultLayout.css";
const { Header, Sider, Content } = Layout;

const DefaultLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <h1 className="text-center text-light font-wight-bold mt-4">POS</h1>
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={[location.pathname]}>
          <Menu.Item key="/" icon={<HomeOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="/Bills" icon={<CopyOutlined />}>
            <Link to="/Bills">Bills</Link>
          </Menu.Item>
          <Menu.Item key="/Items" icon={<UnorderedListOutlined />}>
            <Link to="/Items">Items</Link>
          </Menu.Item>
          <Menu.Item key="/Customers" icon={<UserOutlined />}>
            <Link to="/Customers">Customers</Link>
          </Menu.Item>
          <Menu.Item key="/logout" icon={<LogoutOutlined />}>
            <Link to="/logout">Logout</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: toggle,
            }
          )}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 240,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default DefaultLayout;
