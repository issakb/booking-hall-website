import { Menu } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter();

  return (
    <Menu
      theme="dark"
      mode="horizontal"
      selectedKeys={[router.pathname]}
      style={{ lineHeight: '64px' }}
    >
      <Menu.Item key="/">
        <Link href="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="/about">
        <Link href="/about">Who We Are?</Link>
      </Menu.Item>
      <Menu.Item key="/contact">
        <Link href="/contact">Contact Us</Link>
      </Menu.Item>
    </Menu>
  );
}
