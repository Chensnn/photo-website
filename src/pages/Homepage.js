import React, { useState, useEffect } from "react";
import Search from "../components/Search";
import Picture from "../components/Picture";

const Homepage = () => {
    const [input, setInput] = useState("");
    let [data, setData] = useState(null);
    let [page, setPage] = useState(1);
    let [currentSearch, setCurrentSearch] = useState(""); //追蹤目前input的甚麼
    let pageNum = Math.floor((Math.random() * 20).toFixed(1));
    console.log(pageNum);
    const auth = "563492ad6f91700001000001cbc52e816e014a0bb8e3f7cb2e4800ee";
    const initialURL = `https://api.pexels.com/v1/curated?page=${pageNum}&per_page=15`;
    const searchURL = `https://api.pexels.com/v1/search?query=${currentSearch}&per_page=15&page=1`;

    //- 串接 pexels api
    const search = async url => {
        setPage(2);
        const dataFetch = await fetch(url, {
            method: "GET",
            headers: { Accept: "application/json", Authorization: auth },
        });

        let parsedData = await dataFetch.json();
        setData(parsedData.photos);
    };

    //- 載入更多照片  (1)原本頁面載入相片 (2)搜尋後才載入相片
    const morePicture = async () => {
        let newURL;
        if (input === "") {
            newURL = `https://api.pexels.com/v1/curated?page=${page}&per_page=15`;
        } else {
            newURL = `https://api.pexels.com/v1/search?query=${currentSearch}&per_page=15&page=${page}`;
        }

        setPage(page + 1);
        const dataFetch = await fetch(newURL, {
            method: "GET",
            headers: { Accept: "application/json", Authorization: auth },
        });

        let parsedData = await dataFetch.json();
        setData(data.concat(parsedData.photos));
    };

    //- 頁面載入時就先跑一次資料，所以用useEffect
    useEffect(() => {
        search(initialURL);
    }, []);

    useEffect(() => {
        if (currentSearch === "") {
            search(initialURL);
        } else {
            search(searchURL);
        }
    }, [currentSearch]);
    return (
        <div style={{ minHeight: "100vh" }}>
            <Search
                search={() => {
                    setCurrentSearch(input);
                }}
                setInput={setInput}
            />
            <div className="pictures">
                {data &&
                    data.map(d => {
                        return <Picture data={d} />;
                    })}
            </div>
            <div className="morePicture">
                <button onClick={morePicture}>Load More</button>
            </div>
        </div>
    );
};

export default Homepage;
