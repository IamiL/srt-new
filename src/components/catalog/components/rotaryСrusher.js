import "./../catalog.css"
import {StrictMode, useEffect, useState} from "react";
import Portal from "@/components/catalog/components/portal";
import GalleryPortal from "@/components/catalog/components/gallery-portal";

export default function RotaryCrusher() {
    const [modalItem, setModalItem] = useState(1)

    const [modal1Open, setModal1Open] = useState(null)


    const [modal2Item, setModal2Item] = useState(0)

    const [modal2Open, setModal2Open] = useState(null)

    useEffect(() => {
        console.log("isOpen - ", modal1Open)
    }, [modal1Open])

    return (
        typeof document !== 'undefined' && <StrictMode>
            <h1 className='heading1 catalogp-heading'>Дробилка Роторная</h1>
            <section className='base_grid catalog-main-sec'>
                <div className='catalog_main_img1 adli'><img src='/catalog/crusher/crusher2.png'/></div>
                <div className='catalog_main_text1 text4'>
                    <p>
                        Мы предлагаем эффективное решение для измельчения материалов! В нашем ассортименте появились
                        современные и надежные роторные дробилки, способные справиться с широким спектром задач таких
                        как дробление:
                    </p>
                    <br/>
                    <ul>
                        <li>полимерного и резинового сырья.</li>
                        <li>легкого строительного мусора.</li>
                        <li>пластика, древесины, стекла для вторичного использования.</li>
                        <li>сельское хозяйство: измельчение кормов, зерна, соломы для нужд животноводства.</li>
                    </ul>
                    <br/>
                    <p>
                        Мы предлагаем роторные дробилки различных типов
                        и производительности, чтобы удовлетворить любые ваши потребности, а также обеспечиваем
                        необходимыми расходными запасными частями. Наши роторные дробилки проверены, протестированы,
                        зарекомендовали себя
                        как крайне надежное и безотказное дробильное оборудование, в настоящий момент находится
                        в эксплуатации в условиях действующего производства!
                    </p>
                </div>
            </section>
            <section className='catalog-sec2'>
                <div className='base_grid'>
                    <div className='adli catalogp_item_left catalog_input-wrapper'>
                        <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9.98577 18.7434C7.19488 18.7434 4.83312 17.836 2.90048 16.0213C0.967853 14.2065 0.00102499 11.99 8.12843e-07 9.37168C-0.00102337 6.75338 0.965804 4.53686 2.90048 2.72211C4.83516 0.907371 7.19693 0 9.98577 0C12.7746 0 15.1369 0.907371 17.0726 2.72211C19.0083 4.53686 19.9746 6.75338 19.9715 9.37168C19.9715 10.429 19.7923 11.4262 19.4339 12.3634C19.0754 13.3006 18.5889 14.1296 17.9744 14.8505L26.5775 22.9246C26.8592 23.1889 27 23.5253 27 23.9338C27 24.3423 26.8592 24.6788 26.5775 24.9431C26.2959 25.2074 25.9374 25.3396 25.5021 25.3396C25.0669 25.3396 24.7084 25.2074 24.4267 24.9431L15.8236 16.869C15.0555 17.4457 14.1721 17.9023 13.1735 18.2387C12.175 18.5752 11.1124 18.7434 9.98577 18.7434ZM9.98577 15.8598C11.9061 15.8598 13.5387 15.2292 14.8834 13.9681C16.2282 12.707 16.9 11.1749 16.899 9.37168C16.898 7.56847 16.2261 6.03681 14.8834 4.77667C13.5407 3.51654 11.9082 2.88552 9.98577 2.88359C8.06339 2.88167 6.43135 3.5127 5.08967 4.77667C3.748 6.04065 3.07562 7.57232 3.07255 9.37168C3.06947 11.171 3.74185 12.7032 5.08967 13.9681C6.4375 15.2331 8.06953 15.8636 9.98577 15.8598Z"
                                fill="white" fillOpacity="0.75"/>
                        </svg>
                        <input className='text4 catalog_input' type="text" placeholder='Название модели' maxLength="55"
                               onChange={e => console.log(e)}/>
                    </div>
                </div>
                <div className='catalog-items-sec'>
                    <h2 className='head1 catalog-item-heading'>Р — 180</h2>
                    <ul className='base_grid catalog_items'>
                        <li className='catalog_item1 catalog_item_left adli'
                            onClick={() => {
                                setModal1Open(true);
                                document.body.style.overflow = "hidden";
                            }}
                            onMouseEnter={() => {
                                console.log('навели на первого');
                                setModalItem(1)
                            }}>
                            <h3 className='head1'>
                                Р-180L-380
                            </h3>
                            <div style={{marginTop: '3.17708333333vw'}}>
                                <img src='/catalog/crusher/P-180L-380.png'/>
                            </div>
                        </li>
                        <li className='catalog_item1 catalog_item_center adli' onClick={() => {
                            setModal1Open(true);
                            document.body.style.overflow = "hidden";
                        }}
                            onMouseEnter={() => {
                                console.log('навели на первого');
                                setModalItem(2)
                            }}>
                            <h3 className='head1'>
                                Р-180L-220
                            </h3>
                            <div style={{marginTop: '3.17708333333vw'}}>
                                <img src='/catalog/crusher/P-180L-220.png'/>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='catalog-items-sec'>
                    <h2 className='head1 catalog-item-heading'>Р — 250</h2>
                    <ul className='base_grid catalog_items'>
                        <li className='catalog_item1 catalog_item_left adli' onClick={() => {
                            setModal1Open(true);
                            document.body.style.overflow = "hidden";
                        }}
                            onMouseEnter={() => {
                                console.log('навели на первого');
                                setModalItem(3)
                            }}>
                            <h3 className='head1'>
                                Р-250Р
                            </h3>
                            <div style={{marginTop: '2.13541666667vw'}}>
                                <img src='/catalog/crusher/P-250P.png'/>
                            </div>
                        </li>
                        <li className='catalog_item1 catalog_item_center adli' onClick={() => {
                            setModal1Open(true);
                            document.body.style.overflow = "hidden";
                        }}
                            onMouseEnter={() => {
                                console.log('навели на первого');
                                setModalItem(4)
                            }}>
                            <h3 className='head1'>
                                Р-250C
                            </h3>
                            <div style={{marginTop: '2.13541666667vw'}}>
                                <img src='/catalog/crusher/P-250C.png'/>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='catalog-items-sec'>
                    <h2 className='head1 catalog-item-heading'>Р — 300</h2>
                    <ul className='base_grid catalog_items'>
                        <li className='catalog_item1 catalog_item_left adli' onClick={() => {
                            setModal1Open(true);
                            document.body.style.overflow = "hidden";
                        }}
                            onMouseEnter={() => {
                                console.log('навели на первого');
                                setModalItem(5)
                            }}>
                            <h3 className='head1'>
                                Р-300L
                            </h3>
                            <div style={{marginTop: '2.23958333333vw'}}>
                                <img src='/catalog/crusher/P-300L.png'/>
                            </div>
                        </li>
                        <li className='catalog_item1 catalog_item_center adli' onClick={() => {
                            setModal1Open(true);
                            document.body.style.overflow = "hidden";
                        }}
                            onMouseEnter={() => {
                                console.log('навели на первого');
                                setModalItem(6)
                            }}>
                            <h3 className='head1'>
                                Р-300P
                            </h3>
                            <div style={{marginTop: '2.34375vw'}}>
                                <img src='/catalog/crusher/P-300P.png'/>
                            </div>
                        </li>
                        <li className='catalog_item1 catalog_item_right adli' onClick={() => {
                            setModal1Open(true);
                            document.body.style.overflow = "hidden";
                        }}
                            onMouseEnter={() => {
                                console.log('навели на первого');
                                setModalItem(7)
                            }}>
                            <h3 className='head1'>
                                Р-300C
                            </h3>
                            <div style={{marginTop: '2.44791666667vw'}}>
                                <img src='/catalog/crusher/P-300C.png'/>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='catalog-items-sec'>
                    <h2 className='head1 catalog-item-heading'>Р — 400</h2>
                    <ul className='base_grid catalog_items'>
                        <li className='catalog_item1 catalog_item_left adli' onClick={() => {
                            setModal1Open(true);
                            document.body.style.overflow = "hidden";
                        }}
                            onMouseEnter={() => {
                                console.log('навели на первого');
                                setModalItem(8)
                            }}>
                            <h3 className='head1'>
                                Р-400L
                            </h3>
                            <div style={{marginTop: '2.44791666667vw'}}>
                                <img src='/catalog/crusher/P-400L.png'/>
                            </div>
                        </li>
                        <li className='catalog_item1 catalog_item_center adli' onClick={() => {
                            setModal1Open(true);
                            document.body.style.overflow = "hidden";
                        }}
                            onMouseEnter={() => {
                                console.log('навели на первого');
                                setModalItem(9)
                            }}>
                            <h3 className='head1'>
                                Р-400P
                            </h3>
                            <div style={{marginTop: '1.92708333333vw'}}>
                                <img src='/catalog/crusher/P-400P.png'/>
                            </div>
                        </li>
                        <li className='catalog_item1 catalog_item_right adli' onClick={() => {
                            setModal1Open(true);
                            document.body.style.overflow = "hidden";
                        }}
                            onMouseEnter={() => {
                                console.log('навели на первого');
                                setModalItem(10)
                            }}>
                            <h3 className='head1'>
                                Р-400C
                            </h3>
                            <div style={{marginTop: '2.39583333333vw'}}>
                                <img src='/catalog/crusher/P-400C.png'/>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='catalog-items-sec'>
                    <h2 className='head1 catalog-item-heading'>Р — 500</h2>
                    <ul className='base_grid catalog_items'>
                        <li className='catalog_item1 catalog_item_left adli' onClick={() => {
                            setModal1Open(true);
                            document.body.style.overflow = "hidden";
                        }}
                            onMouseEnter={() => {
                                console.log('навели на первого');
                                setModalItem(11)
                            }}>
                            <h3 className='head1'>
                                Р-500L
                            </h3>
                            <div style={{marginTop: '2.76041666667vw'}}>
                                <img src='/catalog/crusher/P-500L.png'/>
                            </div>
                        </li>
                        <li className='catalog_item1 catalog_item_center adli' onClick={() => {
                            setModal1Open(true);
                            document.body.style.overflow = "hidden";
                        }}
                            onMouseEnter={() => {
                                console.log('навели на первого');
                                setModalItem(12)
                            }}>
                            <h3 className='head1'>
                                Р-500P
                            </h3>
                            <div style={{marginTop: '2.39583333333vw'}}>
                                <img src='/catalog/crusher/P-500P.png'/>
                            </div>
                        </li>
                        <li className='catalog_item1 catalog_item_right adli' onClick={() => {
                            setModal1Open(true);
                            document.body.style.overflow = "hidden";
                        }}
                            onMouseEnter={() => {
                                console.log('навели на первого');
                                setModalItem(13)
                            }}>
                            <h3 className='head1'>
                                Р-500C
                            </h3>
                            <div style={{marginTop: '2.39583333333vw'}}>
                                <img src='/catalog/crusher/P-500C.png'/>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='catalog-items-sec'>
                    <h2 className='head1 catalog-item-heading'>Р — 600</h2>
                    <ul className='base_grid catalog_items'>
                        <li className='catalog_item1 catalog_item_left adli' onClick={() => {
                            setModal1Open(true);
                            document.body.style.overflow = "hidden";
                        }}
                            onMouseEnter={() => {
                                console.log('навели на первого');
                                setModalItem(14)
                            }}>
                            <h3 className='head1'>
                                Р-600L
                            </h3>
                            <div style={{marginTop: '2.39583333333vw'}}>
                                <img src='/catalog/crusher/P-600L.png'/>
                            </div>
                        </li>
                        <li className='catalog_item1 catalog_item_center adli' onClick={() => {
                            setModal1Open(true);
                            document.body.style.overflow = "hidden";
                        }}
                            onMouseEnter={() => {
                                console.log('навели на первого');
                                setModalItem(15)
                            }}>
                            <h3 className='head1'>
                                Р-600P
                            </h3>
                            <div style={{marginTop: '2.39583333333vw'}}>
                                <img src='/catalog/crusher/P-600P.png'/>
                            </div>
                        </li>
                        <li className='catalog_item1 catalog_item_right adli' onClick={() => {
                            setModal1Open(true);
                            document.body.style.overflow = "hidden";
                        }}
                            onMouseEnter={() => {
                                console.log('навели на первого');
                                setModalItem(16)
                            }}>
                            <h3 className='head1'>
                                Р-600C
                            </h3>
                            <div style={{marginTop: '2.39583333333vw'}}>
                                <img src='/catalog/crusher/P-600C.png'/>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='catalog-items-sec'>
                    <h2 className='head1 catalog-item-heading'>Р — 700</h2>
                    <ul className='base_grid catalog_items'>
                        <li className='catalog_item1 catalog_item_left adli' onClick={() => {
                            setModal1Open(true);
                            document.body.style.overflow = "hidden";
                        }}
                            onMouseEnter={() => {
                                console.log('навели на первого');
                                setModalItem(17)
                            }}>
                            <h3 className='head1'>
                                Р-700L
                            </h3>
                            <div style={{marginTop: '2.34375vw'}}>
                                <img src='/catalog/crusher/P-700L.png'/>
                            </div>
                        </li>
                        <li className='catalog_item1 catalog_item_center adli' onClick={() => {
                            setModal1Open(true);
                            document.body.style.overflow = "hidden";
                        }}
                            onMouseEnter={() => {
                                console.log('навели на первого');
                                setModalItem(18)
                            }}>
                            <h3 className='head1'>
                                Р-700P
                            </h3>
                            <div style={{marginTop: '2.34375vw'}}>
                                <img src='/catalog/crusher/P-700P.png'/>
                            </div>
                        </li>
                        <li className='catalog_item1 catalog_item_right adli' onClick={() => {
                            setModal1Open(true);
                            document.body.style.overflow = "hidden";
                        }}
                            onMouseEnter={() => {
                                console.log('навели на первого');
                                setModalItem(19)
                            }}>
                            <h3 className='head1'>
                                Р-700C
                            </h3>
                            <div style={{marginTop: '2.34375vw'}}>
                                <img src='/catalog/crusher/P-700C.png'/>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='catalog-items-sec'>
                    <h2 className='head1 catalog-item-heading'>Р — 800</h2>
                    <ul className='base_grid catalog_items'>
                        <li className='catalog_item1 catalog_item_left adli' onClick={() => {
                            setModal1Open(true);
                            document.body.style.overflow = "hidden";
                        }}
                            onMouseEnter={() => {
                                console.log('навели на первого');
                                setModalItem(20)
                            }}>
                            <h3 className='head1'>
                                Р-800L
                            </h3>
                            <div style={{marginTop: '2.34375vw'}}>
                                <img src='/catalog/crusher/P-800L.png'/>
                            </div>
                        </li>
                        <li className='catalog_item1 catalog_item_center adli' onClick={() => {
                            setModal1Open(true);
                            document.body.style.overflow = "hidden";
                        }}
                            onMouseEnter={() => {
                                console.log('навели на первого');
                                setModalItem(21)
                            }}>
                            <h3 className='head1'>
                                Р-800P
                            </h3>
                            <div style={{marginTop: '2.34375vw'}}>
                                <img src='/catalog/crusher/P-800P.png'/>
                            </div>
                        </li>
                        <li className='catalog_item1 catalog_item_right adli' onClick={() => {
                            setModal1Open(true);
                            document.body.style.overflow = "hidden";
                        }}
                            onMouseEnter={() => {
                                console.log('навели на первого');
                                setModalItem(22)
                            }}>
                            <h3 className='head1'>
                                Р-800C
                            </h3>
                            <div style={{marginTop: '2.34375vw'}}>
                                <img src='/catalog/crusher/P-800C.png'/>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='catalog-items-sec'>
                    <h2 className='head1 catalog-item-heading'>Р — 1000</h2>
                    <ul className='base_grid catalog_items'>
                        <li className='catalog_item1 catalog_item_left adli' onClick={() => {
                            setModal1Open(true);
                            document.body.style.overflow = "hidden";
                        }}
                            onMouseEnter={() => {
                                console.log('навели на первого');
                                setModalItem(23)
                            }}>
                            <h3 className='head1'>
                                Р-1000L
                            </h3>
                            <div style={{marginTop: '2.34375vw'}}>
                                <img src='/catalog/crusher/P-1000L.png'/>
                            </div>
                        </li>
                        <li className='catalog_item1 catalog_item_center adli' onClick={() => {
                            setModal1Open(true);
                            document.body.style.overflow = "hidden";
                        }}
                            onMouseEnter={() => {
                                console.log('навели на первого');
                                setModalItem(24)
                            }}>
                            <h3 className='head1'>
                                Р-1000P
                            </h3>
                            <div style={{marginTop: '2.34375vw'}}>
                                <img src='/catalog/crusher/P-1000P.png'/>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
            <section>
                <h2 className='head1 catalog_gal_heading'>Галерея</h2>
                <ul className='base_grid'>
                    <li className='catalog_gal_item1 gallery-item'
                        onClick={() => {
                            // setModalItem(1);
                            setModal2Open(true);
                            document.body.style.overflow = "hidden";
                        }}
                        onMouseEnter={() => {
                            console.log('навели на первую фотку');
                            setModal2Item(1)
                        }}>
                        <img src='/catalog/crusher/gal1.png' alt='photo'/>
                    </li>
                    <li className='catalog_gal_item2 gallery-item'
                        onClick={() => {
                            // setModalItem(1);
                            setModal2Open(true);
                            document.body.style.overflow = "hidden";
                        }}
                        onMouseEnter={() => {
                            console.log('навели на первую фотку');
                            setModal2Item(2)
                        }}>
                        <img src='/catalog/crusher/gal2.png'/></li>
                    <li className='catalog_gal_item3 gallery-item' onClick={() => {
                        // setModalItem(1);
                        setModal2Open(true);
                        document.body.style.overflow = "hidden";
                    }}
                        onMouseEnter={() => {
                            console.log('навели на первую фотку');
                            setModal2Item(3)
                        }}>
                        <img src='/catalog/crusher/gal3.png'/></li>
                    <li className='catalog_gal_item4 gallery-item' onClick={() => {
                        // setModalItem(1);
                        setModal2Open(true);
                        document.body.style.overflow = "hidden";
                    }}
                        onMouseEnter={() => {
                            console.log('навели на первую фотку');
                            setModal2Item(4)
                        }}>
                        <img src='/catalog/crusher/gal4.png'/></li>
                </ul>
            </section>
            <GalleryPortal catalogNumber={0} item={modal2Item} isOpen={modal2Open} setIsOpen={setModal2Open}/>
            <Portal item={modalItem} isOpen={modal1Open} setIsOpen={(value) => setModal1Open(value)}/>
        </StrictMode>
    );
}
