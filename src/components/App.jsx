import { useState } from "react";
import { NAME_CONSTANTS } from "../constants";

function App({ }) {
    let pageNames = NAME_CONSTANTS.PAGE_NAMES;
    let statuses = NAME_CONSTANTS.STATUSES;
    let generalInformationFieldNames = NAME_CONSTANTS.GENERAL_INFORMATION_SECTION.FIELD_NAMES;
    let educationalExperienceFieldNames = NAME_CONSTANTS.EDUCATIONAL_EXPERIENCE_SECTION.FIELD_NAMES;
    let practicalExperienceFieldNames = NAME_CONSTANTS.PRACTICAL_EXPERIENCE_SECTION.FIELD_NAMES;
    let globalStatusActions = NAME_CONSTANTS.GLOBAL_STATUS_ACTIONS;
    let sectionStatusActions = NAME_CONSTANTS.SECTION_STATUS_ACTIONS;
    let entryActions = NAME_CONSTANTS.ENTRY_ACTIONS;

    // ----- hooks -----
    const [currentPage, setCurrentPage] = useState(pageNames.EDIT_PAGE);
    const [sectionSubmissionStatuses, setSectionSubmissionStatuses] = useState({
        "generalInformationSection": { "status": statuses.EDITING },
        "educationalExperienceSection": { "status": statuses.EDITING },
        "practicalExperienceSection": { "status": statuses.EDITING }
    });

    const [generalInformation, setGeneralInformation] = useState({
        [generalInformationFieldNames.NAME]: "",
        [generalInformationFieldNames.EMAIL]: "",
        [generalInformationFieldNames.PHONE]: "",
    });

    const [educationalExperience, setEducationalExperience] = useState({});

    const [practicalExperience, setPracticalExperience] = useState({});

    // ----- handlers ------
    function handleCurrentPageChange(newPageToShow) {
        setCurrentPage(newPageToShow);
    }

    function _computeCurrentPageToShow() {
        let jsxOfPageToShow = <></>;
        if(currentPage === pageNames.EDIT_PAGE){
            jsxOfPageToShow = <EditPage></EditPage>;
        }
        else if(currentPage === pageNames.CV_VIEW_PAGE){
            jsxOfPageToShow = <CvViewPage></CvViewPage>;
        }
        return jsxOfPageToShow;
    }

    function handleSectionSubmissionStatusesChange(actionType, section) {
        let copyOfSectionSubmissionStatuses = structuredClone(sectionSubmissionStatuses);
        let updatedValue = "";

        switch (actionType) {
            case sectionStatusActions.CHANGE_TO_SUBMITTING: {
                updatedValue = statuses.SUBMITTING;
                break;
            }
            case sectionStatusActions.CHANGE_TO_EDITING: {
                updatedValue = statuses.EDITING;
                break;
            }
        }
        copyOfSectionSubmissionStatuses[section].status = updatedValue;
        setSectionSubmissionStatuses(copyOfSectionSubmissionStatuses);
    };

    function handleGeneralInformationChange(field, value) {
        let copyOfGeneralInformation = structuredClone(generalInformation);

        copyOfGeneralInformation[field] = value;
        setGeneralInformation(copyOfGeneralInformation);
    }

    function handleEducationalExperienceChange(uuid, field, value) {
        let copyOfEducationalExperience = structuredClone(educationalExperience);
        copyOfEducationalExperience[`${uuid}`][field] = value;
        setEducationalExperience(copyOfEducationalExperience);
    }

    function manipulateEducationalExperienceEntry(actionType, uuidToDelete = "") {
        let copyOfEducationalExperience = structuredClone(educationalExperience);

        switch (actionType) {
            case entryActions.ADD: {
                let newEntryId = crypto.randomUUID();
                copyOfEducationalExperience[newEntryId] = {
                    [educationalExperienceFieldNames.SCHOOL_NAME]: "",
                    [educationalExperienceFieldNames.TITLE_OF_STUDY]: "",
                    [educationalExperienceFieldNames.DATE_OF_STUDY]: ""
                };
                break;
            }
            case entryActions.DELETE: {
                if (uuidToDelete === "") {
                    break;
                }

                delete copyOfEducationalExperience[uuidToDelete];
                break;
            }
        }

        setEducationalExperience(copyOfEducationalExperience);
    }


    function handlePracticalExperienceChange(uuid, field, value) {
        let copyOfPracticalExperience = structuredClone(practicalExperience);
        copyOfPracticalExperience[`${uuid}`][field] = value;
        setPracticalExperience(copyOfPracticalExperience);
    }

    function manipulatePracticalExperienceEntry(actionType, uuidToDelete = "") {
        let copyOfPracticalExperience = structuredClone(practicalExperience);

        switch (actionType) {
            case entryActions.ADD: {
                let newEntryId = crypto.randomUUID();
                copyOfPracticalExperience[newEntryId] = {
                    [practicalExperienceFieldNames.COMPANY_NAME]: "",
                    [practicalExperienceFieldNames.POSITION_TITLE]: "",
                    [practicalExperienceFieldNames.MAIN_RESPONSIBILITIES]: ""
                };
                break;
            }
            case entryActions.DELETE: {
                if (uuidToDelete === "") {
                    break;
                }
                delete copyOfPracticalExperience[uuidToDelete];
                break;
            }
        }
        setPracticalExperience(copyOfPracticalExperience);
    }

    return (
        <></>
    );
}

export default App;