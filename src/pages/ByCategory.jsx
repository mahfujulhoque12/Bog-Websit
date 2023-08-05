import { useParams } from "react-router-dom";
import Layout from "../Layout/Layout";
import { useEffect, useState } from "react";
import { postByCategory } from "../ApiRequest/APIrequest";
import Loader from "../component/Loader";
import BlogList from "../component/BlogList";

const ByCategory = () => {

    const {categoryID}=useParams();
    const [list,setList]=useState(null);

    useEffect(()=>{
        (async()=>{
          let res=  await postByCategory(categoryID)
          setList(res);
        })()
    },[categoryID])


    return (
        <Layout>
          {list===null?<Loader></Loader>:<BlogList list={list}></BlogList>}
        </Layout>
    );
};

export default ByCategory;