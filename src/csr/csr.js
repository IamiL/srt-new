'use client';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Manufacturing from "@/pages/manufacturing/manufacturing";
import Header from "@/components/header/header";
// import {useEffect} from "react";
import Cases from "@/pages/cases/cases";
import RotaryCrusher from "@/pages/rotaryСrusher/rotaryСrusher";
import DryingCabinetsPage from "@/pages/dryingCabinets/dryingCabinets";
import Isolators from "@/pages/isolators/isolators";
import Footer from "@/components/footer/footer";
import dynamic from "next/dynamic";

// const router = createBrowserRouter([
//     // {
//     //     path: "/",
//     //     element: <HomePage />,
//     // },
//     {
//         path: "/",
//         element: <main><div >главная</div></main>,
//     },    {
//         path: "/pro",
//         element: <main><div >производство</div></main>,
//     }
// ]);


const HomeNoSSR = dynamic(() => import('@/pages/home/homePageCsr'), {ssr: false})
const CatalogNoSSR = dynamic(() => import('@/pages/catalog/catalog'), {ssr: false})


export default function Csr() {
    return (
        typeof document !== 'undefined' && <><BrowserRouter>
            <Header enLan={false}/>
            <main>
                <Routes>
                    <Route exact path="/" element={<HomeNoSSR/>}/>
                    <Route exact path="/cases" element={<Cases/>}/>
                    <Route exact path="/manufacturing" element={<Manufacturing/>}/>
                    <Route exact path="/catalog" element={<CatalogNoSSR/>}/>
                    <Route exact path="/catalog/rotary-crusher" element={<RotaryCrusher/>}/>
                    <Route exact path="/catalog/isolators" element={<Isolators/>}/>
                    <Route exact path="/catalog/drying-cabinets" element={<DryingCabinetsPage/>}/>
                </Routes>
            </main>
            <Footer/>
            {/*<RouterProvider router={router} />*/}
        </BrowserRouter>
        </>
    );
}