import { NAME_CONSTANTS } from "../constants";
import SectionInput from "./SectionInput";
import SubmitAndEditButtonsGroup from "./SubmitAndEditButtonsGroup";

function EducationalExperienceSection({
    sectionSubmissionStatuses,
    educationalExperience,
    onSectionSubmissionStatusesChange,
    onEducationalExperienceChange,
    onManipulateEducationalExperienceEntry,
}) {
    const educationalExperienceFieldNames =
        NAME_CONSTANTS.EDUCATIONAL_EXPERIENCE_SECTION.FIELD_NAMES;
    const entryActions = NAME_CONSTANTS.ENTRY_ACTIONS;

    const statuses = NAME_CONSTANTS.STATUSES;

    function _deriveIsSubmitted() {
        const currentStatus =
            sectionSubmissionStatuses[
                NAME_CONSTANTS.EDUCATIONAL_EXPERIENCE_SECTION.SECTION_NAME
            ].status;

        if (currentStatus !== statuses.SUBMITTING) {
            return false;
        }

        return true;
    }

    const isSubmitted = _deriveIsSubmitted();

    function _generateEntryFields() {
        const uuidsAndEntries = Object.entries(educationalExperience);

        let entryFields = uuidsAndEntries.map(function (uuidAndEntry) {
            const [uuid, entry] = uuidAndEntry;

            return (
                <div key={uuid} className="entry entries__entry">
                    <SectionInput
                        value={
                            entry[educationalExperienceFieldNames.SCHOOL_NAME]
                        }
                        isSubmitted={isSubmitted}
                        labelMsg="School Name"
                        inputType="text"
                        onValueChange={function (event) {
                            onEducationalExperienceChange(
                                uuid,
                                educationalExperienceFieldNames.SCHOOL_NAME,
                                event.target.value,
                            );
                        }}
                    />

                    <SectionInput
                        value={
                            entry[
                                educationalExperienceFieldNames.TITLE_OF_STUDY
                            ]
                        }
                        isSubmitted={isSubmitted}
                        labelMsg="Title of Study"
                        inputType="text"
                        onValueChange={function (event) {
                            onEducationalExperienceChange(
                                uuid,
                                educationalExperienceFieldNames.TITLE_OF_STUDY,
                                event.target.value,
                            );
                        }}
                    />

                    <SectionInput
                        value={
                            entry[educationalExperienceFieldNames.DATE_OF_STUDY]
                        }
                        isSubmitted={isSubmitted}
                        labelMsg="Date of Study"
                        inputType="date"
                        onValueChange={function (event) {
                            onEducationalExperienceChange(
                                uuid,
                                educationalExperienceFieldNames.DATE_OF_STUDY,
                                event.target.value,
                            );
                        }}
                    />

                    <button
                        className="button delete-button entry__delete-button"
                        disabled={isSubmitted}
                        onClick={function () {
                            onManipulateEducationalExperienceEntry(
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
        <section className="section educational-experience-section">
            <header className="header educational-experience-section__header">
                <h2 className="h2 header__h2">
                    Educational Experience Section
                </h2>
            </header>
            <div className="entries educational-experience-section__entries">
                {_generateEntryFields()}

                <button
                    className="button add-button entries__add-button"
                    disabled={isSubmitted}
                    onClick={function () {
                        onManipulateEducationalExperienceEntry(
                            entryActions.ADD,
                        );
                    }}

                    type="button"
                >
                    Add New Entry
                </button>
            </div>

            <SubmitAndEditButtonsGroup
                section={
                    NAME_CONSTANTS.EDUCATIONAL_EXPERIENCE_SECTION.SECTION_NAME
                }
                buttonType="button"
                onSectionSubmissionStatusesChange={
                    onSectionSubmissionStatusesChange
                }
            />
        </section>
    );
}

export default EducationalExperienceSection;
