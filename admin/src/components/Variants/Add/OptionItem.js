import { Input } from 'reactstrap';

const OptionItem = () => (
    <div className="form-group">
        <div className="row">
            <div className="col-4">
                <div className="input-group-prepend">
                    <Input type="select" className="js-select2-custom custom-select">
                        <option value="Size">Size</option>
                        <option value="Color">Color</option>
                        <option value="Material">Material</option>
                        <option value="Style">Style</option>
                        <option value="Title">Title</option>
                    </Input>
                </div>
            </div>

            <div className="col-8">
                <Input type="select" className="js-select2-custom custom-select">
                    <option label="empty" />
                </Input>
            </div>
        </div>
    </div>
);

export default OptionItem;
