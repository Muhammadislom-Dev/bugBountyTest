import React, {useEffect, useState} from "react";
import Navbar from "../../components/navbar";
import cls from "./program.module.scss";
import Footer from "../../components/footer";
import {useParams} from "react-router-dom";
import ErrorPage from "../error-page/ErrorPage";
import OrganizationInfo from "../../components/organization-info";
import PolicyInfo from "../../components/policy-info";
import Domains from "../../components/domains";
import {useQueryParams} from "use-query-params";
import SubmitReport from "../../components/submit-report";

interface ProgramProps {
}

const {REACT_APP_API_ENDPOINT} = process.env;


const Program: React.FC<ProgramProps> = () => {
    const [queryParams, setQueryParams] = useQueryParams();
    const {id} = useParams();
    const [organization, setOrganization] = useState<any>({});
    const [dataSource, setDataSource] = useState([]);
    const [clicked, setClicked] = useState(false);

    const policyEditDate = organization.policyEditDate;
    const lastUpdatedDate = new Date(policyEditDate);
    const lastUpdated = lastUpdatedDate.toLocaleDateString('en-US', {month: 'long', day: 'numeric', year: 'numeric'});
    const [error1, setError1] = useState('');


    useEffect(() => {
        fetch(`${REACT_APP_API_ENDPOINT}/organizations/${id}`)
            .then((response) => {
                if (response.status === 200) {
                    response.json().then(data => {
                        console.log(data)
                        const newData = data.domains.map((item: any, index: any) => {
                            return {...item, key: index}
                        });
                        setOrganization(data);
                        setDataSource(newData);
                    });
                } else {
                    response.text().then(value => {
                        setError1(value)
                    });
                }
            })

    }, []);

    const handleClick = () => {
        clicked ? setClicked(false) : setClicked(true);
        // clicked ? setQueryParams({type: 'policy'}) : setQueryParams({type: null});
    };

    return <>
        {error1 ? <ErrorPage error={error1}/> :
            <>
                <Navbar/>
                <section className={cls.wrapper}>
                    <OrganizationInfo organization={organization} id={id} clicked={clicked} handleClick={handleClick}/>
                    {clicked ?
                        <SubmitReport/> :
                        <>
                            <PolicyInfo organization={organization} lastUpdated={lastUpdated}/>
                            <Domains dataSource={dataSource}/>
                        </>
                    }

                </section>
                <Footer/>
            </>}
    </>
};

export default Program;
