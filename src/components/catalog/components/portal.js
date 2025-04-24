import {createPortal} from "react-dom";
import Modal from "@/components/catalog/components/modal";
import {useRef} from "react";

export default function Portal({item, isOpen, close, setIsOpen}) {
    // const [mounted, setMounted] = useState(false)
    //
    // useEffect(() => {
    //     setMounted(true)
    //
    //     return () => setMounted(false)
    // }, [])


    // return mounted ?

    const ref = useRef()

    // useEffect(() => {
    //     // document.body.style.overflow = "hidden";
    //     // document.body.style.backdropFilter = "blur(10px)";
    //     const checkIfClickedOutside = e => {
    //         if (ref.current && !ref.current.contains(e.target)) {
    //             setIsOpen(false);
    //             document.body.style.overflow = "visible";
    //         }
    //     }
    //     if (isOpen) {
    //         document.addEventListener("click", checkIfClickedOutside)
    //     } else {
    //         document.removeEventListener("click", checkIfClickedOutside)
    //     }
    //
    //     // return () => {
    //     //     document.body.style.overflow = "visible";
    //     // }
    // }, [isOpen])

    return createPortal(
        <div className='catalog-modal-wrapper' style={isOpen ? {maxHeight: '100vh'} : {maxHeight: '0'}}
             onClick={(e) => {
                 if (ref.current && !ref.current.contains(e.target)) {
                     setIsOpen(false);
                     document.body.style.overflow = "visible";
                 }
             }}>
            <div className='catalog-modal-container' ref={ref}>
                <div className='catalog-modal'>
                    <Modal item={item}/>
                </div>
            </div>
        </div>,
        document.body)
}