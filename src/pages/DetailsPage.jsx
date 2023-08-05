import { useParams } from "react-router-dom";
import Layout from "../Layout/Layout";
import { useEffect, useState } from "react";
import { postDetails } from "../ApiRequest/APIrequest";
import Loader from "../component/Loader";
import BlogDatails from "../component/BlogDatails";

const DetailsPage = () => {
    const{postID}=useParams();
    const[list,setList]=useState(null)

    useEffect(()=>{
        (async()=>{
            let res =await postDetails(postID)
            console.log(res)
            setList(res)

        })()
    },[postID])

    return (
        <Layout>
            {list===null?<Loader></Loader>:<BlogDatails list={list}></BlogDatails>}
        </Layout>
    );
};

export default DetailsPage;