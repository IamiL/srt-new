import {useEffect, useState} from "react";
import {createPortal} from "react-dom";
import Modal from "@/components/catalog/components/modal";

export default function Portal({item, Close}) {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)

        return () => setMounted(false)
    }, [])


    return mounted
        ? createPortal(<Modal onClose={Close} item={item}/>,
            document.body)
        : null
}