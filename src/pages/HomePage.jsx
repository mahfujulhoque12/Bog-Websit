import { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import BlogList from "../component/BlogList";
import { postLatest } from "../ApiRequest/APIrequest";
import Loader from "../component/Loader";

const HomePage = () => {

    const [list, setList]=useState(null);

    useEffect(()=>{
        (async()=>{
          let res=  await postLatest()
          setList(res);
        })()
    },[])

    return (
        <Layout>
          {list===null?<Loader></Loader>: <BlogList list={list}></BlogList>}
        </Layout>
    );
};

export default HomePage;