import productTshirts from '../../../assets/img/400x400/img3.jpg';
import productShoe from '../../../assets/img/400x400/img6.jpg';
import TableRow from './TableRow';

const OrderTable = () => (
    <div className="card-body-height">
        <div className="table-responsive">
            <table className="table table-borderless table-thead-bordered table-nowrap table-align-middle card-table">
                <thead className="thead-light">
                    <tr>
                        <th scope="col">Item</th>
                        <th scope="col">Change</th>
                        <th scope="col">Price</th>
                        <th scope="col">Sold</th>
                        <th scope="col">Sales</th>
                    </tr>
                </thead>

                <tbody>
                    <TableRow
                        url="/admin/products"
                        image={productShoe}
                        productName="Mango Womens shoe"
                        grow="52"
                        price="65"
                        sold="5,006"
                        sales="9,917.45"
                        key="1"
                    />

                    <TableRow
                        url="/admin/products"
                        image={productTshirts}
                        productName="Calvin Klein t-shirts"
                        isGrow={false}
                        grow="32"
                        price="89"
                        sold="4,714"
                        sales="8,466.02"
                        key="2"
                    />
                    <TableRow
                        url="/admin/products"
                        image={productShoe}
                        productName="Mango Womens shoe"
                        grow="52"
                        price="65"
                        sold="5,006"
                        sales="9,917.45"
                        key="3"
                    />

                    <TableRow
                        url="/admin/products"
                        image={productTshirts}
                        productName="Calvin Klein t-shirts"
                        isGrow={false}
                        grow="32"
                        price="89"
                        sold="4,714"
                        sales="8,466.02"
                        key="4"
                    />
                    <TableRow
                        url="/admin/products"
                        image={productShoe}
                        productName="Mango Womens shoe"
                        grow="52"
                        price="65"
                        sold="5,006"
                        sales="9,917.45"
                        key="5"
                    />

                    <TableRow
                        url="/admin/products"
                        image={productTshirts}
                        productName="Calvin Klein t-shirts"
                        isGrow={false}
                        grow="32"
                        price="89"
                        sold="4,714"
                        sales="8,466.02"
                        key="6"
                    />
                    <TableRow
                        url="/admin/products"
                        image={productShoe}
                        productName="Mango Womens shoe"
                        grow="52"
                        price="65"
                        sold="5,006"
                        sales="9,917.45"
                        key="7"
                    />

                    <TableRow
                        url="/admin/products"
                        image={productTshirts}
                        productName="Calvin Klein t-shirts"
                        isGrow={false}
                        grow="32"
                        price="89"
                        sold="4,714"
                        sales="8,466.02"
                        key="8"
                    />
                    <TableRow
                        url="/admin/products"
                        image={productShoe}
                        productName="Mango Womens shoe"
                        grow="52"
                        price="65"
                        sold="5,006"
                        sales="9,917.45"
                        key="9"
                    />

                    <TableRow
                        url="/admin/products"
                        image={productTshirts}
                        productName="Calvin Klein t-shirts"
                        isGrow={false}
                        grow="32"
                        price="89"
                        sold="4,714"
                        sales="8,466.02"
                        key="10"
                    />
                </tbody>
            </table>
        </div>
    </div>
);

export default OrderTable;
