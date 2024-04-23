"use client";

import { useZustandStore } from "@/Store/useZustandStore";
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Table } from "antd";

// columns options
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
    <div className="userNotes py-7 relative">
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

      <div className="inline-block absolute bottom-10 left-0">
        <Button type="primary" icon={<PlusOutlined />}>
          Add New Notes
        </Button>
      </div>
    </div>
  );
}
