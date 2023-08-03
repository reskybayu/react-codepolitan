import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function SinglePage(){
    const post = useLoaderData();
    return (
        <>
            <div>Halaman Single</div>
            { post?.title }
        </>
    )

}
export default SinglePage;
