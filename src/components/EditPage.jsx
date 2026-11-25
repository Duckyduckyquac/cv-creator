import GeneralInformationSection from "./GeneralInformationSection";
import EducationalExperienceSection from "./EducationalExperienceSection";
import PracticalExperienceSection from "./PracticalExperienceSection";

function EditPage({
    sectionSubmissionStatuses,
    onSectionSubmissionStatusesChange,
    generalInformation,
    onGeneralInformationChange,
    educationalExperience,
    onEducationalExperienceChange,
    onManipulateEducationalExperienceEntry,
    practicalExperience,
    onPracticalExperienceChange,
    onManipulatePracticalExperienceEntry,
}) {
    return (
        <main className="edit-page">
            <GeneralInformationSection
                sectionSubmissionStatuses={sectionSubmissionStatuses}
                onSectionSubmissionStatusesChange={
                    onSectionSubmissionStatusesChange
                }
                generalInformation={generalInformation}
                onGeneralInformationChange={onGeneralInformationChange}
            />
            <EducationalExperienceSection
                sectionSubmissionStatuses={sectionSubmissionStatuses}
                onSectionSubmissionStatusesChange={
                    onSectionSubmissionStatusesChange
                }
                educationalExperience={educationalExperience}
                onEducationalExperienceChange={onEducationalExperienceChange}
                onManipulateEducationalExperienceEntry={
                    onManipulateEducationalExperienceEntry
                }
            />
            <PracticalExperienceSection
                sectionSubmissionStatuses={sectionSubmissionStatuses}
                onSectionSubmissionStatusesChange={
                    onSectionSubmissionStatusesChange
                }
                practicalExperience={practicalExperience}
                onPracticalExperienceChange={onPracticalExperienceChange}
                onManipulatePracticalExperienceEntry={
                    onManipulatePracticalExperienceEntry
                }
            />
        </main>
    );
}

export default EditPage;
