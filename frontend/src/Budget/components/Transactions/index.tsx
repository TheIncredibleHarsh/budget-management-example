import { useLocation } from "react-router-dom";
import { PageContainer, StyledContainer } from "../../../shared/StyledComponents/styles";
import Header from "../../../shared/components/Header";
import useCurrentLocation from "../../../shared/hooks/useCurrentLocation";
import { IndexListContainer } from "./Styles";

const Transactions = () => {
    console.log(useLocation().pathname.substring(1))
    return (
        <PageContainer>
            <StyledContainer>
                <Header title={useCurrentLocation()}/>
                <IndexListContainer>
                    
                </IndexListContainer>
            </StyledContainer>
        </PageContainer>
    )
}

export default Transactions;