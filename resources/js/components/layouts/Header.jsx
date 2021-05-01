import { Link } from "react-router-dom"
import styled from "styled-components"

export const Header =()=>{
    return(

        <SHeader>
            ヘッダーです
            <SLink to ="/">HOME</SLink>
            <SLink to ="/condition">病名</SLink>
            <SLink to ="/symptom">症状</SLink>
            <SLink to ="/treatment">対処法</SLink>
        </SHeader>

    )
}

const SHeader = styled.header`
    background-color:#11999e;
    color:#fff;
    text-align:center;
    padding:8px 0;
`
const SLink = styled(Link)`
    margin:0 8px;
`