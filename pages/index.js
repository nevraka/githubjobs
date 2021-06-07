import React, { useState, useEffect } from 'react';
import Result from '../src/components/Result';
import SearchBox from '../src/components/SearchBox';
import 'github-fork-ribbon-css/gh-fork-ribbon.css';
import axios from 'axios';

const MainPage = () => {
    const [desc, setDesc] = useState('');
    const [loc, setLoc] = useState('');
    const [jobs, setJobs] = useState([]);
    const [fullTime, setFullTime] = useState(false);
    const [title, setTitle] = useState('Featured Jobs');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const loadFeatured = async () => {
            const result = await axios.get(`/api/positions?search=github`);
            setJobs(result.data.slice(0, 3));
        };
        loadFeatured();
    }, []);

    const onSearch = async () => {
        setLoading(true);
        const result = await axios.get(
            `/api/positions?search=${desc}&location=${loc}&full_time=${fullTime}`
        );
        setLoading(false);
        setJobs(result.data);
        setTitle('Search Results');
    };

    return (
        <>
            <SearchBox
                className="search-div"
                setFullTime={setFullTime}
                onSearch={onSearch}
                desc={desc}
                setDesc={setDesc}
                loc={loc}
                setLoc={setLoc}
                jobs={jobs}
                setJobs={setJobs}
            />
            {loading ? 'Loading...' : <Result jobs={jobs} title={title} />}
            <a
                class="github-fork-ribbon right-bottom fixed"
                href="https://github.com/nevraka/githubjobs"
                data-ribbon="Fork me on GitHub"
                title="Fork me on GitHub"
            >
                Fork me on GitHub
            </a>
        </>
    );
};

export default MainPage;
