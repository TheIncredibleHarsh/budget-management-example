 import { TAccount, TCard } from "../../../../shared/types"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { AccountBalance, AccountBalanceInfo, AccountBank, AccountHolder, AccountItemContainer, AccountItemInfo, AccountNumber, BranchCode, ListContainer, SwiftCode } from "./Styles"

const AccountsList =  ({data}: {data: TAccount[]}) => {
    if(data.length == 0 || data == undefined){
        return (<>
            <ListContainer>
                <AccountItemContainer>
                    <AccountItemInfo>
                        <Skeleton />
                    </AccountItemInfo>
                </AccountItemContainer>
                <AccountItemContainer>
                    <AccountItemInfo>
                        <Skeleton />
                    </AccountItemInfo>
                </AccountItemContainer>
                <AccountItemContainer>
                    <AccountItemInfo>
                        <Skeleton />
                    </AccountItemInfo>
                </AccountItemContainer>
            </ListContainer>
        </>)
    } else {
        return (
            <ListContainer>
                {generateCardItems(data)}
            </ListContainer>
        )
    }
}

const generateCardItems:(accounts:TAccount[]) => JSX.Element[] = (accounts:TAccount[]) => {

    let accountItems = new Array
    accounts.forEach((account) => {
        accountItems.push(
        <AccountItemContainer>
            <AccountBalanceInfo>
                <AccountBalance>{account.currentBalance.toString().replace(/^/, '₹')}</AccountBalance>
            </AccountBalanceInfo>
            <AccountItemInfo>
                <AccountBank>   {account.bankName}</AccountBank>
                <AccountHolder> {account.accountHolder}</AccountHolder>
                <AccountNumber> {account.accountNumber.replace(/.(?=.{4})/g, "*")}</AccountNumber>
            </AccountItemInfo>
        </AccountItemContainer>
        )
    })

    return accountItems
}

export default AccountsList