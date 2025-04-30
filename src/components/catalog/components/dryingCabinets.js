import "./../catalog.css"
import {useState} from "react";
import Portal from "@/components/catalog/components/portal";
import GalleryPortal from "@/components/catalog/components/gallery-portal";

export default function DryingCabinets() {
    const [modalItem, setModalItem] = useState(1)

    const [modal1Open, setModal1Open] = useState(null)


    const [modal2Item, setModal2Item] = useState(0)

    const [modal2Open, setModal2Open] = useState(null)

    return (
        typeof document !== 'undefined' && <>
            <h1 className='heading1 catalogp-heading'>Сушильные шкафы</h1>
            <section className='base_grid catalog-main-sec'>
                <div className='catalog_main_img2 adli'><img src='/catalog/drying/drying2.png'/></div>
                <div className='catalog_main_text2 text4'>
                    <p>
                        Шкафы изготовлены из высококачественных материалов и нержавеющей стали, что гарантирует
                        надежность <br className='brt2'/>и многолетнюю эксплуатацию.<br/><br/>
                        Основная задача — удаление влаги из различных <br/>материалов, будь то сырье, полуфабрикаты или
                        готовая продукция. Также их использование может быть <br className='brt2'/>необходимо перед
                        покраской, нанесением <br/>покрытий, склейкой материалов или другими технологическими
                        операциями. Наша продукция <br/>позволяет интеллектуально управлять процессом <br/>в течение
                        неограниченного времени, и вы можете быть спокойны: вы избежите коррозии, гниения,
                        плесени <br className='brt2'/>и других негативных последствий, связанных <br className='brt2'/>с
                        влажностью.<br/><br/>
                        Наши специалисты помогут подобрать сушильный шкаф, который идеально соответствует нуждам
                        вашего <br className='brt2'/>производства, а в случае необходимости — доработать его <br
                        className='brt1'/>по вашему
                        техническому
                        заданию.<br/><br/>
                        <span className='DryingCabinets-text-span'>
                        Мы можем оснастить шкаф <br/>программируемым логическим <br/>контроллером (ПЛК) с сенсорным <br/>управлением и
                        возможностью удаленного контроля
                        </span>
                    </p>
                </div>
            </section>
            <section className='catalog-sec22'>
                <ul className='base_grid catalog_items'>
                    <li className='catalog_item2 catalog_item_left adli' onClick={() => {
                        setModal1Open(true);
                        document.body.style.overflow = "hidden";
                    }}
                        onMouseEnter={() => {
                            console.log('навели на первого');
                            setModalItem(25)
                        }}>
                        <h2 className='head1'>
                            Сушильный шкаф — 360
                        </h2>
                        <div className='catalog_item2_img'>
                            <img src='/catalog/drying/360.png'/>
                        </div>
                    </li>
                    <li className='catalog_item2 catalog_item_center adli' onClick={() => {
                        setModal1Open(true);
                        document.body.style.overflow = "hidden";
                    }}
                        onMouseEnter={() => {
                            console.log('навели на первого');
                            setModalItem(26)
                        }}>
                        <h2 className='head1'>
                            Сушильный шкаф — 480
                        </h2>
                        <div className='catalog_item2_img'>
                            <img src='/catalog/drying/480.png'/>
                        </div>
                    </li>
                    <li className='catalog_item3 catalog_item_right adli' onClick={() => {
                        setModal1Open(true);
                        document.body.style.overflow = "hidden";
                    }}
                        onMouseEnter={() => {
                            console.log('навели на первого');
                            setModalItem(27)
                        }}>
                        <h2 className='head1'>
                            Сушильный шкаф — 576
                        </h2>
                        <div className='catalog_item2_img'>
                            <img src='/catalog/drying/576.png'/>
                        </div>
                    </li>
                    <li className='catalog_item2 catalog_item_left adli' onClick={() => {
                        setModal1Open(true);
                        document.body.style.overflow = "hidden";
                    }}
                        onMouseEnter={() => {
                            console.log('навели на первого');
                            setModalItem(28)
                        }}>
                        <h2 className='head1'>
                            Сушильный шкаф — 960
                        </h2>
                        <div className='catalog_item2_img'>
                            <img src='/catalog/drying/960.png'/>
                        </div>
                    </li>
                </ul>
            </section>
            <section>
                <h2 className='head1 catalog_gal_heading'>Галерея</h2>
                <ul className='base_grid'>
                    <li className='gallery-item catalog_gal_item1'
                        onClick={() => {
                            // setModalItem(1);
                            setModal2Open(true);
                            document.body.style.overflow = "hidden";
                        }}
                        onMouseEnter={() => {
                            ////console.log('навели на первую фотку');
                            setModal2Item(1)
                        }}><img src='/catalog/drying/gal1.png'/></li>
                    <li className='gallery-item catalog_gal_item2' onClick={() => {
                        // setModalItem(1);
                        setModal2Open(true);
                        document.body.style.overflow = "hidden";
                    }}
                        onMouseEnter={() => {
                            ////console.log('навели на первую фотку');
                            setModal2Item(2)
                        }}><img src='/catalog/drying/gal2.png'/></li>
                    <li className='gallery-item catalog_gal_item3' onClick={() => {
                        // setModalItem(1);
                        setModal2Open(true);
                        document.body.style.overflow = "hidden";
                    }}
                        onMouseEnter={() => {
                            ////console.log('навели на первую фотку');
                            setModal2Item(3)
                        }}><img src='/catalog/drying/gal3.png'/></li>
                    <li className='gallery-item catalog_gal_item4' onClick={() => {
                        // setModalItem(1);
                        setModal2Open(true);
                        document.body.style.overflow = "hidden";
                    }}
                        onMouseEnter={() => {
                            ////console.log('навели на первую фотку');
                            setModal2Item(4)
                        }}><img src='/catalog/drying/gal4.png'/></li>
                    <li className='gallery-item catalog_gal_item5' onClick={() => {
                        // setModalItem(1);
                        setModal2Open(true);
                        document.body.style.overflow = "hidden";
                    }}
                        onMouseEnter={() => {
                            ////console.log('навели на первую фотку');
                            setModal2Item(5)
                        }}><img src='/catalog/drying/gal5.png'/></li>
                    <li className='gallery-item catalog_gal_item6' onClick={() => {
                        // setModalItem(1);
                        setModal2Open(true);
                        document.body.style.overflow = "hidden";
                    }}
                        onMouseEnter={() => {
                            ////console.log('навели на первую фотку');
                            setModal2Item(6)
                        }}><img src='/catalog/drying/gal6.png'/></li>
                </ul>
            </section>
            <GalleryPortal catalogNumber={1} item={modal2Item} isOpen={modal2Open} setIsOpen={setModal2Open}/>
            <Portal heightType={2} item={modalItem} isOpen={modal1Open} setIsOpen={(value) => setModal1Open(value)}/>
        </>
    );
}