import SectionInput from "./SectionInput";
import SubmitAndEditButtonsGroup from "./SubmitAndEditButtonsGroup";
import { NAME_CONSTANTS } from "../Constants";
import SectionTextArea from "./SectionTextArea";

function PracticalExperienceSection({
    sectionSubmissionStatuses,
    practicalExperience,
    onSectionSubmissionStatusesChange,
    onPracticalExperienceChange,
    onManipulatePracticalExperienceEntry,
}) {
    const practicalExperienceFieldNames =
        NAME_CONSTANTS.PRACTICAL_EXPERIENCE_SECTION.FIELD_NAMES;

    const entryActions = NAME_CONSTANTS.ENTRY_ACTIONS;

    const statuses = NAME_CONSTANTS.STATUSES;

    function _deriveIsSubmitted() {
        const currentStatus =
            sectionSubmissionStatuses[
                NAME_CONSTANTS.PRACTICAL_EXPERIENCE_SECTION.SECTION_NAME
            ].status;

        if (currentStatus !== statuses.SUBMITTING) {
            return false;
        }

        return true;
    }

    const isSubmitted = _deriveIsSubmitted();

    function _generateEntryFields() {
        const uuidsAndEntries = Object.entries(practicalExperience);

        let entryFields = uuidsAndEntries.map(function (uuidAndEntry) {
            const [uuid, entry] = uuidAndEntry;

            return (
                <div key={uuid} className="entry entries__entry">
                    <SectionInput
                        value={
                            entry[practicalExperienceFieldNames.COMPANY_NAME]
                        }
                        isSubmitted={isSubmitted}
                        labelMsg="Company Name"
                        inputType="text"
                        onValueChange={function (event) {
                            onPracticalExperienceChange(
                                uuid,
                                practicalExperienceFieldNames.COMPANY_NAME,
                                event.target.value,
                            );
                        }}
                    />

                    <SectionInput
                        value={
                            entry[practicalExperienceFieldNames.POSITION_TITLE]
                        }
                        isSubmitted={isSubmitted}
                        labelMsg="Position Title"
                        inputType="text"
                        onValueChange={function (event) {
                            onPracticalExperienceChange(
                                uuid,
                                practicalExperienceFieldNames.POSITION_TITLE,
                                event.target.value,
                            );
                        }}
                    />

                    <SectionTextArea
                        value={
                            entry[
                                practicalExperienceFieldNames
                                    .MAIN_RESPONSIBILITIES
                            ]
                        }
                        isSubmitted={isSubmitted}
                        labelMsg="Main Responsibilities"
                        onValueChange={function (event) {
                            onPracticalExperienceChange(
                                uuid,
                                practicalExperienceFieldNames.MAIN_RESPONSIBILITIES,
                                event.target.value,
                            );
                        }}
                    />

                    <button
                        className="button delete-button entry__delete-button"
                        disabled={isSubmitted}
                        onClick={function () {
                            onManipulatePracticalExperienceEntry(
                                entryActions.DELETE,
                                uuid,
                            );
                        }}
                        type="button"
                    >
                        Delete
                    </button>
                </div>
            );
        });

        return entryFields;
    }
    return (
        <section className="section practical-experience-section">
            <header className="header practical-experience-section__header">
                <h2 className="h2 header__h2">Practical Experience Section</h2>
            </header>
            <div className="entries practical-experience-section__entries">
                {_generateEntryFields()}
                <button
                    className="button add-button entries__add-button"
                    disabled={isSubmitted}
                    onClick={function () {
                        onManipulatePracticalExperienceEntry(entryActions.ADD);
                    }}
                    type="button"
                >
                    Add New Entry
                </button>
            </div>

            <SubmitAndEditButtonsGroup
                section={
                    NAME_CONSTANTS.PRACTICAL_EXPERIENCE_SECTION.SECTION_NAME
                }
                buttonType="button"
                onSectionSubmissionStatusesChange={
                    onSectionSubmissionStatusesChange
                }
            />
        </section>
    );
}

export default PracticalExperienceSection;
