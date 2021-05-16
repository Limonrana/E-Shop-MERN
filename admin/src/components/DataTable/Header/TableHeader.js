import Filter from './Filter';
import Search from './Search';

const TableHeader = ({ search, handleSearch, items, handleFilter, placeHolder }) => (
    <div className="card-header">
        <div className="row justify-content-between align-items-center flex-grow-1">
            <Search placeHolder={placeHolder} search={search} handleSearch={handleSearch} />
            <Filter items={items} handleFilter={handleFilter} />
        </div>
    </div>
);

export default TableHeader;
