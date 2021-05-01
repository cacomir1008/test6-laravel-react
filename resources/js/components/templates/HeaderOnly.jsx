import { Header } from "../layouts/Header"

// コンテンツはchildrenでまとめて受け取る（どんな内容が入ってきてもいいように）
export const HeaderOnly = (props) =>{
    const{children}=props;
    return(
        <>
        <Header />
        {children}
        </>
    )
}