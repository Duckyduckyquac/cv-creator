import { NAME_CONSTANTS } from "../Constants";
import AppNav from "./AppNav";

function AppHeader({ onCurrentPageChange, onResetAll }) {
    return (
        <div className="app-header">
            <h1 className="h1 app-header__h1">CV Creator</h1>
            <p className="p app-header__p">A small react application</p>

            <AppNav
                onCurrentPageChange={onCurrentPageChange}
                onResetAll={onResetAll}
            />
        </div>
    );
}

export default AppHeader;
