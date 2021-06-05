const SingleUpload = ({ sizeText, name, value }) => (
    <div>
        <label className="custom-file-boxed" htmlFor="customFileInputBoxedEg">
            <span id="customFileBoxedEg">{value || 'Browse your device and upload documents'}</span>
            <small className="d-block text-muted">Maximum file size {sizeText || '2'}MB</small>
            <input
                id="customFileInputBoxedEg"
                name={name}
                type="file"
                value={value}
                className="js-file-attach custom-file-boxed-input"
            />
        </label>
    </div>
);

export default SingleUpload;
