import { useState } from "react";
import { Button, Flex, Layout } from "antd";
import Sidebar from "./components/Sidebar";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import "./App.css";
import CustomHeader from "./components/Header";
import MainContent from "./components/MainContent";
import SideContent from "./components/SideContent";

const { Sider, Header, Content } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout>
      <Sider theme="light" collapsible collapsed={collapsed} className="sider">
        <div className="sidebar-content">
          <Sidebar />
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            className="trigger-btn"
          />
        </div>
      </Sider>
      <Layout>
        <Header className="header">
          <CustomHeader />
        </Header>

        <Content className="content">
          <Flex gap='large'>
            <MainContent />
            <SideContent />
          </Flex>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
