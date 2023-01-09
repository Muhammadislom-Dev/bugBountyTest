import UsersTable from "../tables/users-table";
import cls from "./users.module.scss"
import React from "react";
import TopBar from "../top-bar";
import LeftBar from "../left-bar";

interface UsersProps {}
 
const Users: React.FC<UsersProps> = () => {
    return ( 
        <>
            <div className={cls['users_wrapper']}>
                <div className={cls['users-title-container']}>
                    <h2>USERS</h2>
                    <h4><span>Admin/</span>Users</h4>
                </div>
                <div>
                    <UsersTable />
                </div>
            </div>
        </>
    );
}
 
export default Users;