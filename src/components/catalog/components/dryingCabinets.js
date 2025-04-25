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
                        надежность
                        и многолетнюю эксплуатацию.

                        Основная задача — удаление влаги из различных материалов, будь то сырье, полуфабрикаты или
                        готовая продукция. Также их использование может быть необходимо перед покраской, нанесением
                        покрытий, склейкой материалов или другими технологическими операциями. Наша продукция
                        позволяет интеллектуально управлять процессом
                        в течение неограниченного времени, и вы можете быть спокойны: вы избежите коррозии, гниения,
                        плесени
                        и других негативных последствий, связанных
                        с влажностью.

                        Наши специалисты помогут подобрать сушильный шкаф, который идеально соответствует нуждам вашего
                        производства, а в случае необходимости — доработать его по вашему техническому заданию.

                        Мы можем оснастить шкаф программируемым логическим контроллером (ПЛК) с сенсорным управлением и
                        возможностью удаленного контроля
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
                    <li className='catalog_gal_item1'><img src='/catalog/drying/gal1.png'/></li>
                    <li className='catalog_gal_item2'><img src='/catalog/drying/gal2.png'/></li>
                    <li className='catalog_gal_item3'><img src='/catalog/drying/gal3.png'/></li>
                    <li className='catalog_gal_item4'><img src='/catalog/drying/gal4.png'/></li>
                    <li className='catalog_gal_item5'><img src='/catalog/drying/gal5.png'/></li>
                    <li className='catalog_gal_item6'><img src='/catalog/drying/gal6.png'/></li>
                </ul>
            </section>
            <GalleryPortal catalogNumber={1} item={modal2Item} isOpen={modal2Open} setIsOpen={setModal2Open}/>
            <Portal item={modalItem} isOpen={modal1Open} setIsOpen={(value) => setModal1Open(value)}/>
        </>
    );
}