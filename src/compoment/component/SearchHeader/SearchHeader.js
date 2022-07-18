import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useEffect, useState, memo } from 'react';
import TippyHeadless from '@tippyjs/react/headless';
import { Link } from 'react-router-dom';
import productApi from '~/api/productApi';

import SearchItem from './SearchItem';
import styles from './SearchHeader.module.scss';
import useDebounce from '~/compoment/component/hooks/useDebounce';
const sx = classNames.bind(styles);
function SearchHeader() {
    const [datas, setDatas] = useState([]);
    const [newdatas, setNewDatas] = useState([]);
    const [searchResult, setSearchResult] = useState('');
    const debounce = useDebounce(searchResult, 500);
    useEffect(() => {
        const getProduct = async () => {
            try {
                const response = await productApi.getAll();
                setDatas(response);
            } catch (error) {
                console.log(error);
            }
        };
        getProduct();
    }, []);
    useEffect(() => {
        const datarender = datas.filter((item) => item.title.includes(debounce));
        setNewDatas(datarender);
    }, [debounce]);
    const handleInput = (e) => {
        const values = e.target.value;
        if (!values.startsWith(' ')) {
            setSearchResult(values);
        }
    };
    const hanldLink = () => {
        setSearchResult('');
    };
    const renderSearchItem = () => {
        return newdatas.map((item) => {
            return (
                <Link key={item.id} onClick={() => hanldLink(item)} to={`/products/${item.id}`}>
                    <SearchItem data={item} />
                </Link>
            );
        });
    };
    return (
        //tippy

        <div className={sx('wrapper')}>
            <TippyHeadless
                visible={newdatas.length > 0 && debounce.length > 0}
                interactive
                render={(attrs) => (
                    <div className={sx('search-result')} tabIndex="-1" {...attrs}>
                        <div className={sx('header-content')}>{renderSearchItem()}</div>
                    </div>
                )}
            >

                <div className={sx('inner')}>
                    <input className={sx('search-header')} value={searchResult} onChange={handleInput} />
                    <button className={sx('search-icon')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>

            </TippyHeadless>
        </div>
    );
}
export default memo(SearchHeader);
