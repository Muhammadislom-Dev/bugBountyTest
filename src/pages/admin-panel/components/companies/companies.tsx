import cls from "./companies.module.scss"
import CompaniesTable from "../tables/companies-table/companies-table"

interface CompaniesProps {}
 
const Companies: React.FC<CompaniesProps> = () => {
    return ( 
        <>
            <div className={cls["panel_wrapper"]}>
                <div className={cls['title-container']}>
                    <h2>COMPANIES LISTING</h2>
                    <h4><span>Admin/</span>Organizations List</h4>
                </div>
                <div className={cls['table-wrapper']}>
                    <CompaniesTable />
                </div>
            </div>
        </> 
    );
}
 
export default Companies;