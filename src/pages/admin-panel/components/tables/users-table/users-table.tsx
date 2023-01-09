import { Button, Table } from "antd";
import cls from "./users-table.module.scss"
import { ColumnsType } from "antd/lib/table";
import { SearchOutlined, SwitcherOutlined, UserAddOutlined } from "@ant-design/icons";

interface DataType {
    id: number, 
    key: React.Key;
    users: string;
}

interface UsersTableProps {}

const columns: ColumnsType<DataType> = [
    {    
        title: 'ID',
        dataIndex: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'users',
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
        users: 'John Brown',
    },
    {
        id: 2,
        key: '2',
        users: 'Jim Green',
    },
    {
        id: 4,
        key: '4',
        users: 'Joe Black',
    },
    {
        id: 5,
        key: '5',
        users: 'Joe Black',
    },
    {
        id: 6,
        key: '6',
        users: 'Joe Black',
    },
    {
        id: 7,
        key: '7',
        users: 'Joe Black',
    },
    {
        id: 8,
        key: '8',
        users: 'Joe Black',
    },
    {
        id: 9,
        key: '9',
        users: 'Joe Black',
    },
    {
        id: 10,
        key: '10',
        users: 'Joe Black',
    },
    {
        id: 11,
        key: '11',
        users: 'Joe Black',
    },
    {
        id: 12,
        key: '12',
        users: 'Joe Black',
    },
]; 

const UsersTable: React.FC<UsersTableProps> = () => {
    return ( 
        <div className={cls["wrapper"]}>
            <div className={cls['companies-table_wrapper']}>
                <div className={cls['table-header']}>
                    <h1 className={cls['table-h1']}>Users</h1>
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
 
export default UsersTable;
