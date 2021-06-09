import React from 'react';
import { Input } from 'antd';
import { Button, Checkbox, Row, Col } from 'antd';

const SearchBox = ({
    onSearch,
    desc,
    setDesc,
    loc,
    setLoc,
    setFullTime,
    isFullTime,
}) => {
    const handleDescChange = (event) => {
        setDesc(event.target.value);
    };

    const handleLocChange = (event) => {
        setLoc(event.target.value);
    };

    const handleEnter = (event) => {
        if (event.key === 'Enter') {
            onSearch();
        }
    };

    return (
        <Row gutter={[24, 12]} style={{ padding: '16px 20px' }}>
            <Col xs={24} sm={12} md={8} className="searchbox-div">
                <div style={{ marginLeft: '30px' }}>Job Description</div>
                <Input
                    className="search-input"
                    value={desc}
                    onChange={handleDescChange}
                    onKeyDown={handleEnter}
                    placeholder="Filter by title, benefits, companies, expertise"
                />
            </Col>
            <Col xs={24} sm={12} md={8} className="searchbox-div">
                <div style={{ marginLeft: '30px' }}>Location</div>
                <Input
                    className="search-input"
                    value={loc}
                    onChange={handleLocChange}
                    onKeyDown={handleEnter}
                    placeholder="Filter by city, state, zip code, or country"
                />
            </Col>
            <Col xs={16} sm={12} md={3} className="checkbox">
                <Checkbox
                    style={{ fontSize: '11px' }}
                    checked={isFullTime}
                    onChange={(event) => {
                        setFullTime(event.target.checked);
                    }}
                >
                    Full Time Only
                </Checkbox>
            </Col>
            <Col xs={8} sm={12} md={5} className="search-button">
                <Button type="primary" onClick={onSearch}>
                    Search
                </Button>
            </Col>
        </Row>
    );
};

export default SearchBox;
