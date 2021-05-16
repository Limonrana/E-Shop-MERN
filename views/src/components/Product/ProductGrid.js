/* eslint-disable no-underscore-dangle */
// import Beauty1 from '../../assets/images/Beauty1.jpg';
import Bkash from '../../assets/images/bkash10.png';
// import man1 from '../../assets/images/man1.png';
// import man3 from '../../assets/images/man3.jpg';
import MasterCard from '../../assets/images/mastercard.svg';
// import pc from '../../assets/images/pc.png';
// import phone2 from '../../assets/images/phone2(1).jpg';
// import women from '../../assets/images/women.png';
import SingleGridItem from './SingleGridItem';

const ProductGrid = ({ products, sectionTitle = null, isMore = null }) => {
    let MORESECTION = null;
    let SECTIONCSS = 'section-box';
    if (isMore !== null) {
        SECTIONCSS = 'section-box border-top mt-20';
        MORESECTION = (
            <div className="title-box">
                <a href="#test">
                    <p>
                        More
                        <span>
                            <i className="fas fa-chevron-right" />
                        </span>
                    </p>
                </a>
            </div>
        );
    }

    const productArray = products.map((product) => {
        let emi = null;
        if (product.emi) {
            emi = product.emi;
        }
        return (
            <SingleGridItem
                title={product.name}
                model={product.model}
                price={product.price}
                discountPrice={product.discountPrice}
                svgCard={MasterCard}
                svgBkash={Bkash}
                imagePath={product.image}
                emi={emi}
                id={product._id}
                key={product._id}
            />
        );
    });
    return (
        <div className={SECTIONCSS}>
            {sectionTitle !== null ? (
                <div className="title">
                    <h2>{sectionTitle}</h2>
                    {MORESECTION}
                </div>
            ) : null}
            <div className="section-box-inner">
                <div className="row">{productArray}</div>
            </div>
        </div>
    );
};

export default ProductGrid;
