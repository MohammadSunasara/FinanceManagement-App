import {useUser} from '@clerk/clerk-react'
import { FinancialRecordForm } from './financialform'
import { FinancialRecordList } from './financiallist'


export default function DashBoard(){
    const {user}=useUser()
    return(
       <div className="dashboard-container">
        <h2>Welcome {user?.firstName} This Is Your Finance Board</h2>
       <FinancialRecordForm/>
       <FinancialRecordList/>
       </div>
       
    )
}