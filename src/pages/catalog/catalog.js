import dynamic from "next/dynamic";


const CatalogNoSSR = dynamic(() => import('@/components/catalog/catalog'), {ssr: false})

export default function CatalogPage({enLan}) {
    return <CatalogNoSSR enLan={enLan}/>
}