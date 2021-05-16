import { useState } from 'react';
import { IconContext } from 'react-icons';
import { AiOutlineDelete } from 'react-icons/ai';
import { RiTableFill } from 'react-icons/ri';
import FilterToggle from './FilterToggle';

const Filter = ({ items, handleFilter }) => {
    const [showFilter, setShowFilter] = useState(false);

    const handleShowFilter = () => {
        setShowFilter(!showFilter);
    };

    return (
        <div className="col-lg-6">
            <div className="d-sm-flex justify-content-sm-end align-items-sm-center">
                <div className="mr-2 mb-2 mb-sm-0" style={{ display: 'none' }}>
                    <div className="d-flex align-items-center">
                        <span className="font-size-sm mr-3">
                            <span id="datatableCounter">0</span>
                            Selected
                        </span>
                        <a className="btn btn-sm btn-outline-danger" href="#javascript">
                            <AiOutlineDelete /> Delete
                        </a>
                    </div>
                </div>

                <div className="hs-unfold">
                    <button
                        className="js-hs-unfold-invoker btn btn-sm btn-white"
                        type="button"
                        onClick={handleShowFilter}
                    >
                        <IconContext.Provider value={{ className: 'mr-1' }}>
                            <RiTableFill />
                        </IconContext.Provider>{' '}
                        Columns{' '}
                        <span className="badge badge-soft-dark rounded-circle ml-1">
                            {items.length}
                        </span>
                    </button>

                    <div
                        className={
                            showFilter
                                ? 'hs-unfold-content dropdown-unfold dropdown-menu dropdown-menu-right dropdown-card hs-unfold-content-initialized hs-unfold-css-animation animated slideInUp'
                                : 'hs-unfold-content dropdown-unfold dropdown-menu dropdown-menu-right dropdown-card hs-unfold-hidden'
                        }
                        style={{ width: '15rem' }}
                    >
                        <div className="card card-sm">
                            <div className="card-body">
                                {items.map((item) => (
                                    <FilterToggle
                                        item={item}
                                        handleFilter={handleFilter}
                                        key={item.id}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Filter;
