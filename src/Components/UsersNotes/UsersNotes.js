"use client";

import { useZustandStore } from "@/Store/useZustandStore";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Table } from "antd";

// User data - serial, name, email, location, notes
const columns = [
  { title: "Serial", dataIndex: "serial", key: "serial" },
  { title: "Name", dataIndex: "name", key: "name" },
  { title: "Email", dataIndex: "email", key: "email" },
  { title: "Location", dataIndex: "location", key: "location" },
  {
    title: "Action",
    dataIndex: "",
    key: "x",
    render: () => (
      <div className="flex items-center justify-center gap-5">
        <Button type="primary" icon={<EditOutlined />} />
        <Button type="primary" icon={<DeleteOutlined />} />
      </div>
    ),
  },
];

export default function UsersNotes() {
  const { notes } = useZustandStore();

  console.log("notes ", notes);

  return (
    <div className="userNotes py-7">
      <Table
        columns={columns}
        expandable={{
          expandedRowRender: (record) => (
            <p style={{ margin: 0 }}>{record.note}</p>
          ),
          rowExpandable: (record) => record.name !== "Not Expandable",
        }}
        dataSource={notes}
      />
    </div>
  );
}
