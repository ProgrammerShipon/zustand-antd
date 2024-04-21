"use client";
import { useState } from "react";
// import { AppstoreOutlined, MailOutlined, SettingOutlined } from "icons";
import Container from "@/Components/Container";
import { Menu } from "antd";
import Link from "next/link";

const items = [
  {
    label: <a href="/">Home</a>,
    key: "Home",
  },
  {
    label: <a href="#t20">Counter</a>,
    key: "Counter",
  },
];

export default function Header() {
  const [current, setCurrent] = useState("Home");

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <header>
      <Container>
        <div className="flex items-center justify-between py-4">
          {/* Logo Links */}
          <Link href="#" className="text-3xl font-bold">
            A<span className="text-primary">Z</span>
          </Link>

          {/* Menu Items */}
          <div className="min-w-52 flex items-center justify-end">
            <Menu
              onClick={onClick}
              selectedKeys={[current]}
              mode="horizontal"
              className="text-xl"
              items={items}
            />
          </div>
        </div>
      </Container>
    </header>
  );
}
