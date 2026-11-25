import { NAME_CONSTANTS } from "../Constants";
function SubmitAndEditButtonsGroup({
    section,
    buttonType,
    onSectionSubmissionStatusesChange,
}) {
    return (
        <div className="submit-and-edit-buttons-group">
            <button
                className="button submit-and-edit-buttons-group__button"
                type={buttonType}
                onClick={() => {
                    onSectionSubmissionStatusesChange(
                        NAME_CONSTANTS.SECTION_STATUS_ACTIONS
                            .CHANGE_TO_SUBMITTING,
                        section,
                    );
                }}
            >
                Submit
            </button>

            <button
                className="button submit-and-edit-buttons-group__button"
                type={buttonType}
                onClick={() => {
                    onSectionSubmissionStatusesChange(
                        NAME_CONSTANTS.SECTION_STATUS_ACTIONS.CHANGE_TO_EDITING,
                        section,
                    );
                }}
            >
                Edit
            </button>
        </div>
    );
}

export default SubmitAndEditButtonsGroup;
