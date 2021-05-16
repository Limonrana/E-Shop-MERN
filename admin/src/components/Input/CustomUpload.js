/* eslint-disable react/jsx-props-no-spreading */
import { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import browse from '../../assets/svg/illustrations/browse.svg';
import FancyGrid from '../Images/FancyGrid';

const CustomUpload = () => {
    const [files, setFiles] = useState([]);
    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*',
        onDrop: (acceptedFiles) => {
            setFiles(
                acceptedFiles.map((file) =>
                    Object.assign(file, {
                        preview: URL.createObjectURL(file),
                    })
                )
            );
        },
    });

    const thumbs = files.map((file) => (
        <FancyGrid key={file.name} imagePath={file.preview} handleDelete={() => 'okay'} />
    ));

    useEffect(
        () => () => {
            // Make sure to revoke the data uris to avoid memory leaks
            files.forEach((file) => URL.revokeObjectURL(file.preview));
        },
        [files]
    );

    return (
        <div>
            <div className="js-dropzone dropzone-custom custom-file-boxed">
                <div
                    {...getRootProps({ className: 'dropzone dz-message custom-file-boxed-label' })}
                >
                    <input {...getInputProps()} />
                    <img className="avatar avatar-xl avatar-4by3 mb-3" src={browse} alt="browse" />
                    <h5 className="mb-1">Choose files to upload</h5>
                    <p className="mb-2">or</p>
                    <span className="btn btn-sm btn-eshop">Browse files</span>
                </div>
            </div>
            <div className="js-fancybox row gx-2 mt-5">{thumbs}</div>
        </div>
    );
};

export default CustomUpload;
