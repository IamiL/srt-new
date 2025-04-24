import {useEffect, useState} from "react";
import {createPortal} from "react-dom";

export default function GalleryPortal({item, Close}) {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)

        return () => setMounted(false)
    }, [])


    return mounted
        ? createPortal(<div className='catalog-modal-wrapper'>
                <div className='catalog-modal-container' ref={ref}>
                    <div className='fullscreen-img'>
                        <img className='fullscreen-img-image' src={item} alt=''/>
                    </div>
                </div>
            </div>,
            document.body)
        : null
}