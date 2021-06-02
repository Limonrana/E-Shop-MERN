import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { RiDeleteBin6Line, RiEdit2Line } from 'react-icons/ri';
import { Input, Label } from 'reactstrap';

const TableItem = ({ item }) => (
    <tr>
        <td className="table-column-pr-0">
            <div className="custom-control custom-checkbox">
                <Input
                    type="checkbox"
                    className="custom-control-input"
                    id="productVariationsCheck1"
                    onChange={() => 'okay'}
                />
                <Label className="custom-control-label" for="productVariationsCheck1" />
            </div>
        </td>
        <th>
            <img className="avatar" src={item.image} alt={item.title} />
        </th>
        <th className="table-column-pl-0">
            <Input
                type="text"
                className="form-control"
                value={item.title}
                onChange={() => 'okay'}
                readOnly
            />
        </th>
        <th className="table-column-pl-0">
            <Input type="text" className="form-control" value={item.sku} onChange={() => 'okay'} />
        </th>
        <th className="table-column-pl-0">
            <div className="input-group input-group-merge">
                <div className="input-group-prepend">
                    <div className="input-group-text">USD</div>
                </div>
                <Input
                    type="text"
                    className="form-control pl-8"
                    value={item.price.toFixed(2)}
                    onChange={() => 'okay'}
                />
            </div>
        </th>
        <th className="table-column-pl-0">
            <div className="js-quantity-counter input-group-quantity-counter">
                <Input
                    type="number"
                    className="js-result form-control input-group-quantity-counter-control"
                    value={item.qty}
                    onChange={() => 'okay'}
                />

                <div className="input-group-quantity-counter-toggle">
                    <a className="js-minus input-group-quantity-counter-btn" href="#javascript">
                        <AiOutlineMinus />
                    </a>
                    <a className="js-plus input-group-quantity-counter-btn" href="#javascript">
                        <AiOutlinePlus />
                    </a>
                </div>
            </div>
        </th>
        <th className="table-column-pl-0">
            <div className="btn-group" role="group" aria-label="Edit group">
                <button className="btn btn-white" type="button">
                    <RiEdit2Line /> Edit
                </button>
                <button className="btn btn-white" type="button">
                    <RiDeleteBin6Line />
                </button>
            </div>
        </th>
    </tr>
);

export default TableItem;
