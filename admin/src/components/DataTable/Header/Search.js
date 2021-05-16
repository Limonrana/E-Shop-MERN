import { RiSearchEyeFill } from 'react-icons/ri';
import { Form, Input } from 'reactstrap';

const Search = ({ placeHolder, search, handleSearch }) => (
    <div className="col-lg-4 mb-3 mb-lg-0">
        <Form>
            <div className="input-group input-group-merge input-group-flush">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <RiSearchEyeFill />
                    </div>
                </div>
                <Input
                    id="datatableSearch"
                    type="search"
                    className="form-control"
                    placeholder={placeHolder}
                    value={search}
                    onChange={handleSearch}
                />
            </div>
        </Form>
    </div>
);

export default Search;
