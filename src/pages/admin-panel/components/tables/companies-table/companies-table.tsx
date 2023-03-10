import { SearchOutlined, SwitcherOutlined, UserAddOutlined } from "@ant-design/icons";
import { Button, Table } from "antd";
import { ColumnsType } from "antd/lib/table";
import cls from "./companies-table.module.scss"
import React from "react";

interface DataType {
    id: number, 
    key: React.Key;
    companies: string;
}

interface CompaniesTableProps {}

const columns: ColumnsType<DataType> = [
    {    
        title: 'ID',
        dataIndex: 'id',
    },
    {
      title: 'Companies',
      dataIndex: 'companies',
    },
    {
      title: 'Action ',
      dataIndex: 'action',
      render: () => (
          <div className={cls["table-btn"]}>
            <Button type="primary" shape="round" icon={<SwitcherOutlined />}  size="small">
                switch
            </Button>
            <Button type="primary" shape="round" icon={<UserAddOutlined />}  size="small">
                add user
            </Button>
          </div>
      ) 
    },
  ];
  
  const data: DataType[] = [
    {
        id: 1,
        key: '1',
        companies: 'John Brown',
    },
    {
        id: 2,
        key: '2',
        companies: 'Jim Green',
    },
    {
        id: 4,
        key: '4',
        companies: 'Joe Black',
    },
    {
        id: 5,
        key: '5',
        companies: 'Joe Black',
    },
    {
        id: 6,
        key: '6',
        companies: 'Joe Black',
    },
    {
        id: 7,
        key: '7',
        companies: 'Joe Black',
    },
    {
        id: 8,
        key: '8',
        companies: 'Joe Black',
    },
    {
        id: 9,
        key: '9',
        companies: 'Joe Black',
    },
    {
        id: 10,
        key: '10',
        companies: 'Joe Black',
    },
    {
        id: 11,
        key: '11',
        companies: 'Joe Black',
    },
    {
        id: 12,
        key: '12',
        companies: 'Joe Black',
    },
]; 

const CompaniesTable: React.FC<CompaniesTableProps> = () => {
    return ( 
        <div className={cls["wrapper"]}>
            <div className={cls['companies-table_wrapper']}>
                <div className={cls['table-header']}>
                    <h1 className={cls['table-h1']}>Companies</h1>
                    <div className={cls["search-companies"]}>
                        <form>
                            <input type="text" placeholder="Search Companies here"/>
                        </form>
                        <div className={cls['search-icon']} >
                            <SearchOutlined />
                        </div>
                    </div>
                </div>
                <Table className={cls['companies-table-container']} columns={columns} dataSource={data}></Table>
            </div>
        </div>
    );
}
 
export default CompaniesTable;
