import {
  FileOutlined,
  PieChartOutlined,
  UserOutlined,
  DesktopOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { useState } from "react";
import HeaderDashboard from "../Header/index";
import React from 'react';
import { useNavigate } from 'react-router-dom'

import { useSelector } from 'react-redux';



const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem("Dashboard", "1", <PieChartOutlined />),
  getItem("User", "2", <UserOutlined />),
  getItem("Customers", "3", <DesktopOutlined />),
  getItem("Product", "4", <DesktopOutlined />),
  getItem("Orders", "5", <DesktopOutlined />),
  getItem("Coupon", "6", <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
];
const PrimaryLayout = ({ children }) => {

  //lay data tu store Rematch
  const usersStore = useSelector((state) => state.users);
  console.log(usersStore.listUser)

  
  let navigate = useNavigate()
  const [selectMenu, setSelectMenu] = useState("1");
  const pathh = (e) => {
    if (e.key === "1") {
      setSelectMenu("1")
      navigate("/")
    } if (e.key === "2") {
      setSelectMenu("2")
      navigate("/user")
    }
  }
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={[selectMenu]}
          mode="inline"
          items={items}
          onClick={pathh}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            xs: 24,
            sm: 32,
            md: 40,
            lg: 64,
            xl: 80,
            xxl: 100,
          }}
          children={<HeaderDashboard />}
        />
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",

            }}
          >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,

            }}
          >
            {children}
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default PrimaryLayout;
