import { NAME_CONSTANTS } from "../Constants";
import SectionInput from "./SectionInput";
import SubmitAndEditButtonsGroup from "./SubmitAndEditButtonsGroup";

function GeneralInformationSection({
    generalInformation,
    sectionSubmissionStatuses,
    onGeneralInformationChange,
    onSectionSubmissionStatusesChange,
}) {
    const generalInformationFieldNames =
        NAME_CONSTANTS.GENERAL_INFORMATION_SECTION.FIELD_NAMES;
    const statuses = NAME_CONSTANTS.STATUSES;

    function _deriveIsSubmitted() {
        let currentStatus =
            sectionSubmissionStatuses[
                NAME_CONSTANTS.GENERAL_INFORMATION_SECTION.SECTION_NAME
            ].status;

        if (currentStatus !== statuses.SUBMITTING) {
            return false;
        }

        return true;
    }

    const isSubmitted = _deriveIsSubmitted();
    return (
        <section className="section general-information-section">
            <header className="header general-information-section__header">
                <h2 className="h2 header__h2">General Information Section</h2>
            </header>

            <div className="entries general-information-section__entries">
                <div className="entry entries__entry">
                    <SectionInput
                        labelMsg="Name"
                        inputType="text"
                        value={
                            generalInformation[
                                generalInformationFieldNames.NAME
                            ]
                        }
                        isSubmitted={isSubmitted}
                        onValueChange={function (event) {
                            onGeneralInformationChange(
                                generalInformationFieldNames.NAME,
                                event.target.value,
                            );
                        }}
                    />

                    <SectionInput
                        labelMsg="Email"
                        inputType="email"
                        value={
                            generalInformation[
                                generalInformationFieldNames.EMAIL
                            ]
                        }
                        isSubmitted={isSubmitted}
                        onValueChange={function (event) {
                            onGeneralInformationChange(
                                generalInformationFieldNames.EMAIL,
                                event.target.value,
                            );
                        }}
                    />

                    <SectionInput
                        labelMsg="Phone"
                        inputType="tel"
                        value={
                            generalInformation[
                                generalInformationFieldNames.PHONE
                            ]
                        }
                        isSubmitted={isSubmitted}
                        onValueChange={function (event) {
                            onGeneralInformationChange(
                                generalInformationFieldNames.PHONE,
                                event.target.value,
                            );
                        }}
                    />
                </div>
            </div>

            <SubmitAndEditButtonsGroup
                section={
                    NAME_CONSTANTS.GENERAL_INFORMATION_SECTION.SECTION_NAME
                }
                buttonType="button"
                onSectionSubmissionStatusesChange={
                    onSectionSubmissionStatusesChange
                }
            />
        </section>
    );
}

export default GeneralInformationSection;
