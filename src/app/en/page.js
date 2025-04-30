import CsrSsrWrapper from "@/csr/csrSsrWrapper";
import Loading from "@/components/loading/loading";

export default function Home() {
    return (<body id='start'>
        <Loading/>
        <CsrSsrWrapper enLan={true}/>
        </body>
    );
}
