import { Header } from "../layouts/Header"
import { Footer } from "../layouts/Footer"

export const DefaultLayout = (props) =>{
    const{children}=props;
    return(
        <>
        <Header />
        {children}
        <Footer />
        </>
    )
}