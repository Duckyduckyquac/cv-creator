import { NAME_CONSTANTS } from "../constants";
function AppNav({ buttonType, onCurrentPageChange, onResetAll }) {
    return (
        <nav className="app-nav">
            <button
                className="button app-nav__button"
                type={buttonType}
                onClick={() => {
                    onCurrentPageChange(NAME_CONSTANTS.PAGE_NAMES.EDIT_PAGE);
                }}
            >
                Edit CV
            </button>

            <button
                className="button app-nav__button"
                type={buttonType}
                onClick={() => {
                    onCurrentPageChange(NAME_CONSTANTS.PAGE_NAMES.CV_VIEW_PAGE);
                }}
            >
                See CV
            </button>

            <button
                className="button app-nav__button"
                type={buttonType}
                onClick={() => {
                    onResetAll(NAME_CONSTANTS.GLOBAL_STATUS_ACTIONS.RESET);
                }}
            >
                Reset All
            </button>
        </nav>
    );
}

export default AppNav;
