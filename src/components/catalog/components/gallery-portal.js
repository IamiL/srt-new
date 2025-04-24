import {useRef} from "react";
import {createPortal} from "react-dom";

const images = [
    ['', '/catalog/crusher/gal1.png', '/catalog/crusher/gal2.png', '/catalog/crusher/gal3.png', '/catalog/crusher/gal4.png']
]

export default function GalleryPortal({catalogNumber, item, isOpen, setIsOpen}) {

    const ref = useRef()

    return createPortal(
        <div
            className={`catalog-modal-wrapper ${isOpen === null ? '' : isOpen ? 'catalog-modal-wrapper-gallery-open catalog-modal-wrapper-open' : 'catalog-modal-wrapper-close'}`}
            // style={isOpen ? {maxHeight: '100vh'} : {maxHeight: '0'}}
            onClick={(e) => {
                if (ref.current && !ref.current.contains(e.target)) {
                    setIsOpen(false);
                    document.body.style.overflow = "visible";
                }
            }}>
            {/*<div className={`catalog-modal-container`}*/}
            {/*ref={ref}>*/}
            {/*<div className={`catalog-modal ${isOpen ? 'catalog-modal-open' : 'catalog-modal-close'}`} ref={ref}>*/}
            {(item !== 0) && <div ref={ref}>
                <button className='catalog-modal-close-button' onClick={() => {
                    setIsOpen(false);
                    document.body.style.overflow = "visible";
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="96" height="96"
                         color="#ffffff"
                         fill="none">
                        <path d="M19.0005 4.99988L5.00049 18.9999M5.00049 4.99988L19.0005 18.9999" stroke="#ffffff"
                              strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                </button>
                <div className='fullscreen-img'>
                    <img className='fullscreen-img-image' src={images[catalogNumber][item]} alt=''/>
                </div>
            </div>}
            {/*</div>*/}
        </div>,
        document.body)
}