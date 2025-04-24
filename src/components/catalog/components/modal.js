import "./../catalog.css"

const items = [
    {
        name: '',
        photo: '',
        table: ''
    },
    {
        name: 'P-180L-380',
        photo: '/catalog/crusher/P-180L-380.png',
        table: '/catalog/crusher/P-180L-380.svg'
    },
    {
        name: 'P-180L-220',
        photo: '/catalog/crusher/P-180L-220.png',
        table: '/catalog/crusher/P-180L-220.svg'
    },
    {
        name: 'P-250P',
        photo: '/catalog/crusher/P-250P.png',
        table: '/catalog/crusher/P-250P.svg'
    },
    {
        name: 'P-250C',
        photo: '/catalog/crusher/P-250C.png',
        table: '/catalog/crusher/P-250C.svg'
    },
    {
        name: 'P-300L',
        photo: '/catalog/crusher/P-300L.png',
        table: '/catalog/crusher/P-300L.svg'
    },
    {
        name: 'P-300P',
        photo: '/catalog/crusher/P-300P.png',
        table: '/catalog/crusher/P-300P.svg'
    },
    {
        name: 'P-300C',
        photo: '/catalog/crusher/P-300C.png',
        table: '/catalog/crusher/P-300C.svg'
    },
    {
        name: 'P-400L',
        photo: '/catalog/crusher/P-400L.png',
        table: '/catalog/crusher/P-400L.svg'
    },
    {
        name: 'P-400P',
        photo: '/catalog/crusher/P-400P.png',
        table: '/catalog/crusher/P-400P.svg'
    },
    {
        name: 'P-400C',
        photo: '/catalog/crusher/P-400C.png',
        table: '/catalog/crusher/P-400C.svg'
    },
    {
        name: 'P-500L',
        photo: '/catalog/crusher/P-500L.png',
        table: '/catalog/crusher/P-500L.svg'
    },
    {
        name: 'P-500P',
        photo: '/catalog/crusher/P-500P.png',
        table: '/catalog/crusher/P-500P.svg'
    },
    {
        name: 'P-500C',
        photo: '/catalog/crusher/P-500C.png',
        table: '/catalog/crusher/P-500C.svg'
    },
    {
        name: 'P-600L',
        photo: '/catalog/crusher/P-600L.png',
        table: '/catalog/crusher/P-600L.svg'
    },
    {
        name: 'P-600P',
        photo: '/catalog/crusher/P-600P.png',
        table: '/catalog/crusher/P-600P.svg'
    },
    {
        name: 'P-600C',
        photo: '/catalog/crusher/P-600C.png',
        table: '/catalog/crusher/P-600C.svg'
    },
    {
        name: 'P-700L',
        photo: '/catalog/crusher/P-700L.png',
        table: '/catalog/crusher/P-700L.svg'
    },
    {
        name: 'P-700P',
        photo: '/catalog/crusher/P-700P.png',
        table: '/catalog/crusher/P-700P.svg'
    },
    {
        name: 'P-700C',
        photo: '/catalog/crusher/P-700C.png',
        table: '/catalog/crusher/P-700C.svg'
    },
    {
        name: 'P-800L',
        photo: '/catalog/crusher/P-800L.png',
        table: '/catalog/crusher/P-800L.svg'
    },
    {
        name: 'P-800P',
        photo: '/catalog/crusher/P-800P.png',
        table: '/catalog/crusher/P-800P.svg'
    },
    {
        name: 'P-800C',
        photo: '/catalog/crusher/P-800C.png',
        table: '/catalog/crusher/P-800C.svg'
    },
    {
        name: 'P-1000L',
        photo: '/catalog/crusher/P-1000L.png',
        table: '/catalog/crusher/P-1000L.svg'
    },
    {
        name: 'P-1000P',
        photo: '/catalog/crusher/P-1000P.png',
        table: '/catalog/crusher/P-1000P.svg'
    },
    {
        name: 'Сушильный шкаф — 360',
        photo: '/catalog/drying/360.png',
        table: '/catalog/drying/360.svg'
    },
    {
        name: 'Сушильный шкаф — 480',
        photo: '/catalog/drying/480.png',
        table: '/catalog/drying/480.svg'
    },
    {
        name: 'Сушильный шкаф — 576',
        photo: '/catalog/drying/576.png',
        table: '/catalog/drying/576.svg'
    },
    {
        name: 'Сушильный шкаф — 960',
        photo: '/catalog/drying/960.png',
        table: '/catalog/drying/960.svg'
    },
    {
        name: 'Изоляторы',
        photo: '/catalog/isolators/isolator.png',
        table: '/catalog/isolators/isolators.svg'
    }
]

export default function Modal({item}) {

    // if (item !== 0) {
    //     document.body.style.overflow = "hidden";
    // }

    return (
        <>
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
                    <h3 className='head1 catalog-modal-sec21-heading'>Основные технические
                        характеристики</h3>
                    <img src={items[item].table} className='catalog-modal-wrapper-table'/>
                </div>
            </section>
        </>
    )
}