import { useEffect, useRef } from 'react';
import LoadingBar from 'react-top-loading-bar';

const PreLoader = ({ isLoading }) => {
    const ref = useRef(null);

    useEffect(() => {
        if (isLoading) {
            ref.current.continuousStart();
        } else if (!isLoading) {
            ref.current.complete();
        }
    }, [isLoading]);
    return (
        <div>
            <LoadingBar color="#003680" height={6} ref={ref} />
        </div>
    );
};

export default PreLoader;
