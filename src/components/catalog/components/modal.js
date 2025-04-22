import "./../catalog.css"
import {useEffect, useRef} from "react";

const items = [
    {
        name: '',
        photo: '',
        table: ''
    },
    {
        name: 'Р-180L-380',
        photo: '/catalog/crusher/Р-180L-380.png',
        table: '/catalog/crusher/Р-180L-380.svg'
    },
    {
        name: 'Р-180L-220',
        photo: '/catalog/crusher/Р-180L-220.png',
        table: '/catalog/crusher/P-180L-220.svg'
    },
    {
        name: 'Р-250Р',
        photo: '/catalog/crusher/Р-250Р.png',
        table: '/catalog/crusher/Р-250Р.svg'
    },
    {
        name: 'Р-250C',
        photo: '/catalog/crusher/Р-250C.png',
        table: '/catalog/crusher/Р-250С.svg'
    },
    {
        name: 'Р-300L',
        photo: '/catalog/crusher/Р-300L.png',
        table: '/catalog/crusher/p-300L.svg'
    },
    {
        name: 'Р-300P',
        photo: '/catalog/crusher/Р-300P.png',
        table: '/catalog/crusher/p-300P.svg'
    },
    {
        name: 'Р-300C',
        photo: '/catalog/crusher/Р-300C.png',
        table: '/catalog/crusher/p-300C.svg'
    },
    {
        name: 'Р-400L',
        photo: '/catalog/crusher/Р-400L.png',
        table: '/catalog/crusher/p-400L.svg'
    },
    {
        name: 'Р-400P',
        photo: '/catalog/crusher/Р-400P.png',
        table: '/catalog/crusher/p-400P.svg'
    },
    {
        name: 'Р-400C',
        photo: '/catalog/crusher/Р-400C.png',
        table: '/catalog/crusher/p-400C.svg'
    },
    {
        name: 'Р-500L',
        photo: '/catalog/crusher/Р-500L.png',
        table: '/catalog/crusher/p-500L.svg'
    },
    {
        name: 'Р-500P',
        photo: '/catalog/crusher/Р-500P.png',
        table: '/catalog/crusher/p-500P.svg'
    },
    {
        name: 'Р-500C',
        photo: '/catalog/crusher/P-500C.png',
        table: '/catalog/crusher/p-500C.svg'
    },
    {
        name: 'Р-600L',
        photo: '/catalog/crusher/P-600L.png',
        table: '/catalog/crusher/p-600L.svg'
    },
    {
        name: 'Р-600P',
        photo: '/catalog/crusher/P-600P.png',
        table: '/catalog/crusher/p-600P.svg'
    },
    {
        name: 'Р-600C',
        photo: '/catalog/crusher/P-600C.png',
        table: '/catalog/crusher/p-600C.svg'
    },
    {
        name: 'Р-700L',
        photo: '/catalog/crusher/P-700L.png',
        table: '/catalog/crusher/p-700L.svg'
    },
    {
        name: 'Р-700P',
        photo: '/catalog/crusher/P-700P.png',
        table: '/catalog/crusher/p-700P.svg'
    },
    {
        name: 'Р-700C',
        photo: '/catalog/crusher/P-700C.png',
        table: '/catalog/crusher/p-700C.svg'
    },
    {
        name: 'Р-800L',
        photo: '/catalog/crusher/P-800L.png',
        table: '/catalog/crusher/p-800L.svg'
    },
    {
        name: 'Р-800P',
        photo: '/catalog/crusher/P-800P.png',
        table: '/catalog/crusher/p-800P.svg'
    },
    {
        name: 'Р-800C',
        photo: '/catalog/crusher/P-800C.png',
        table: '/catalog/crusher/p-800C.svg'
    },
    {
        name: 'Р-1000L',
        photo: '/catalog/crusher/P-1000L.png',
        table: '/catalog/crusher/p-1000L.svg'
    },
    {
        name: 'Р-1000P',
        photo: '/catalog/crusher/P-1000P.png',
        table: '/catalog/crusher/p-1000P.svg'
    },
    {
        name: '',
        photo: '/catalog/drying/360.png',
        table: '/catalog/drying/360.svg'
    },
    {
        name: '',
        photo: '/catalog/drying/480.png',
        table: '/catalog/drying/480.svg'
    },
    {
        name: '',
        photo: '/catalog/drying/576.png',
        table: '/catalog/drying/576.svg'
    },
    {
        name: '',
        photo: '/catalog/drying/960.png',
        table: '/catalog/drying/960.svg'
    },
    {
        name: '',
        photo: '/catalog/isolators/isolator.png',
        table: '/catalog/isolators/isolators.svg'
    }
]

export default function Modal({item, onClose}) {

    // if (item !== 0) {
    //     document.body.style.overflow = "hidden";
    // }

    const ref = useRef()
    useEffect(() => {
        document.body.style.overflow = "hidden";
        // document.body.style.backdropFilter = "blur(10px)";
        const checkIfClickedOutside = e => {
            if (ref.current && !ref.current.contains(e.target)) {
                onClose()
            }
        }
        document.addEventListener("click", checkIfClickedOutside)
        return () => {
            document.removeEventListener("click", checkIfClickedOutside)
            document.body.style.overflow = "visible";
        }
    }, [onClose])

    return (
        <div className='catalog-modal-wrapper'>
            <div className='catalog-modal-container' ref={ref}>
                <div className='catalog-modal'>
                    <h2 className='heading2'>{items[item].name}</h2>
                    <section className='catalog-modal-content'>
                        <div className='catalog-modal-sec11'>
                            <div className='catalog-model-img'>
                                <img src={items[item].photo}/>
                            </div>
                            <p>
                                {/*Описание*/}
                            </p>
                        </div>
                        <div className='catalog-modal-content-table-wrapper'>
                            <h3 className='head1 catalog-modal-sec21-heading'>Основные технические характеристики</h3>
                            <img src={items[item].table} className='catalog-modal-wrapper-table'/>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}
