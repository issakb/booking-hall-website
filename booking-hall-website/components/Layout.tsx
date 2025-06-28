import React from 'react';
import Link from 'next/link';
import { Layout as AntLayout, Menu } from 'antd';

const { Header, Content, Footer } = AntLayout;

const menuItems = [
  { key: 'home', label: <Link href="/">Home</Link> },
  { key: 'about', label: <Link href="/about">Who We Are?</Link> },
  { key: 'contact', label: <Link href="/contact">Contact Us</Link> },
];

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <AntLayout style={{ minHeight: '100vh' }}>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['home']}
          items={menuItems}
        />
      </Header>

      <Content style={{ marginTop: 64, padding: '2rem' }}>
        <div
          style={{
            background: '#fff',
            padding: '2rem',
            borderRadius: '8px',
            maxWidth: 1200,
            margin: 'auto',
          }}
        >
          {children}
        </div>
      </Content>

      <Footer style={{ textAlign: 'center' }}>
        © {new Date().getFullYear()} Booking Hall Website by Your Agency
      </Footer>
    </AntLayout>
  );
};

export default Layout;