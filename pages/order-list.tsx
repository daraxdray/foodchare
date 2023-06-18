import React from 'react';
import Footer from "../components/partials/footer/Footer";
import Navbar from "../components/partials/header/NavBar/index";
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';



const {Header, Content, Sider } = Layout;

export default function Home() {

    const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
      (icon, index) => {
        const key = String(index + 1);
    
        return {
          key: `sub${key}`,
          icon: React.createElement(icon),
          label: `subnav ${key}`,
          children: new Array(4).fill(null).map((_, j) => {
            const subKey = index * 4 + j + 1;
            return {
              key: subKey,
              label: `option${subKey}`,
            };
          }),
        };
      },
    );
    

  return (
    <>
    
      <Navbar />{" "}

      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Layout style={{ padding: '24px 0', background: 'white' }}>
          <Sider style={{ background: 'white' }} width={200}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%' }}
              items={items2}
            />
          </Sider>
          <Content style={{ padding: '0 24px', minHeight: 280 }}>Content</Content>
        </Layout>
      </Content>
      <div className="flex flex-col items-center justify-between bg-secondary-grey">
        <Footer />
      </div>
    </>
  );
}
