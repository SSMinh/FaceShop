import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import TippyHeadless from '@tippyjs/react/headless';
import { Link, useSearchParams } from 'react-router-dom';

import SearchItem from './SearchItem';
import styles from './SearchHeader.module.scss';
const sx = classNames.bind(styles);
function SearchHeader() {
    const [datas, setDatas] = useState([]);
    const [newdatas, setNewDatas] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchResult, setSearchResult] = useState('');
    useEffect(() => {
        const getProduct = async () => {
            const response = await axios.get('https://fakestoreapi.com/products');
            setDatas(response.data);
        };
        getProduct();
    }, []);
    useEffect(() => {
        const datarender = datas.filter((item) => item.title.includes(searchResult));
        setNewDatas(datarender);
    }, [searchResult]);
    const handleInput = (e) => {
        const values = e.target.value;
        if (!values.startsWith(' ')) {
            setSearchResult(values);
        }
    };
    const hanldLink = (data) => {
        let params = searchParams.get(data.id);
        setSearchParams(params);
        setSearchResult('');
    };
    const renderSearchItem = () => {
        return newdatas.map((item) => {
            return (
                <Link key={item.id} onClick={() => hanldLink(item)} to={`/products/${item.id}`}>
                    <SearchItem data={item} />;
                </Link>
            );
        });
    };
    return (
        <div>
            <TippyHeadless
                visible={newdatas.length > 0 && searchResult.length > 0}
                interactive
                render={(attrs) => (
                    <div className={sx('search-result')} tabIndex="-1" {...attrs}>
                        <div className={sx('header-content')}>{renderSearchItem()}</div>
                    </div>
                )}
            >
                <div className={sx('wrapper')}>
                    <input className={sx('search-header')} value={searchResult} onChange={handleInput} />
                    <button className={sx('search-icon')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </TippyHeadless>
        </div>
    );
}
export default SearchHeader;
