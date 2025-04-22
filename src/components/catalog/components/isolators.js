import "./../catalog.css"
import {useState} from "react";
import Portal from "@/components/catalog/components/portal";

export default function Isolators() {
    const [modalOpen, setModalOpen] = useState(0)
    return (
        <>
            <h1 className='heading1 catalogp-heading'>Изоляторы</h1>
            <section className='base_grid catalog-main-sec'>
                <div className='catalog_main_img2 adli'>
                    <img src='/catalog/isolators/isolators.png'/>
                </div>
                <div className='catalog_main_text2 text4'>
                    <p>
                        Керамические изоляционные бусины часто используются при производстве нагревательных элементов.
                        Они могут применяться как дополнительная изоляция проводов
                        в промышленных нагревателях со стальным корпусом,
                        а в керамических нагревателях (керамические ленточные
                        ТЭНы, инфракрасные керамические и кварцевые излучатели, плоские керамические ТЭНы) керамические
                        бусы являются элементом стандартного типа подключения нагревателей.

                        Изоляция проводов керамическими бусинами – это надежный способ дополнительной защиты
                        термостойких проводов при работе в условиях повышенных температур. Бусины надежно защищают
                        провода от изломов
                        и механических повреждений и при этом не мешают им изгибаться.
                    </p>
                </div>
            </section>
            <section className='catalog-sec23'>
                <ul className='base_grid catalog_items'>
                    <li className='catalog_item4 catalog_item_left adli' onClick={() => setModalOpen(29)}>
                        <h2 className='head1'>
                            Изоляторы
                        </h2>
                        <div className='catalog_item2_img2'>
                            <img src='/catalog/isolators/isolator.png'/>
                        </div>
                    </li>
                </ul>
            </section>
            {
                modalOpen !== 0 && <Portal item={modalOpen} Close={() => setModalOpen(0)}/>
            }
        </>
    );
}