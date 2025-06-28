import React, { useState } from 'react';
import Link from 'next/link';
import { Layout as AntLayout, Menu } from 'antd';
import styles from './../styles/Layout.module.css';
import { useRouter } from 'next/router';
import { MenuOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = AntLayout;

const menuItems = [
  { key: 'home', label: <Link href="/">Home</Link> },
  { key: 'about', label: <Link href="/about">Who We Are?</Link> },
  { key: 'contact', label: <Link href="/contact">Contact Us</Link> },
];

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter();
  const [menuVisible, setMenuVisible] = useState(false);

  const selectedKey =
    menuItems.find(
      (item) =>
        (router.pathname === '/' && item.key === 'home') ||
        router.pathname.includes(item.key)
    )?.key || 'home';

  const toggleMenu = () => {
    setMenuVisible((prev) => !prev);
  };

  return (
    <AntLayout className={styles.layoutRoot}>
      <Header className={styles.fixedHeader}>
        <div className={styles.desktopMenu}>
          <Menu
            theme="dark"
            mode="horizontal"
            selectedKeys={[selectedKey]}
            items={menuItems}
          />
        </div>

        <button
          className={styles.hamburgerButton}
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <MenuOutlined className={styles.hamburgerIcon} />
        </button>

        {menuVisible && (
          <Menu
            theme="dark"
            mode="vertical"
            selectedKeys={[selectedKey]}
            items={menuItems}
            className={styles.mobileMenu}
            onClick={() => setMenuVisible(false)}
          />
        )}
      </Header>

      <Content className={styles.contentWrapper}>
        <div className={styles.contentContainer}>{children}</div>
      </Content>

      <Footer className={styles.footer}>
        © {new Date().getFullYear()} Website by Issa Kebe Web Developer.
      </Footer>
    </AntLayout>
  );
};

export default Layout;