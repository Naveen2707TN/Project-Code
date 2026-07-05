import { NormalTab } from "./Tab/NormalTab"
import { TabShell } from "./Tab/TabShell"

export const LandingPage = () => {
    return(
        <div className='container-fluid'>
            <TabShell />
            <NormalTab />
        </div>
    )
}