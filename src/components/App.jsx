import { useState } from "react";
import { NAME_CONSTANTS } from "../Constants.js";
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter.jsx";
import EditPage from "./EditPage.jsx";
import CvViewPage from "./CvViewPage.jsx";

function App() {
    let pageNames = NAME_CONSTANTS.PAGE_NAMES;
    let statuses = NAME_CONSTANTS.STATUSES;
    let generalInformationFieldNames =
        NAME_CONSTANTS.GENERAL_INFORMATION_SECTION.FIELD_NAMES;
    let educationalExperienceFieldNames =
        NAME_CONSTANTS.EDUCATIONAL_EXPERIENCE_SECTION.FIELD_NAMES;
    let practicalExperienceFieldNames =
        NAME_CONSTANTS.PRACTICAL_EXPERIENCE_SECTION.FIELD_NAMES;
    let globalStatusActions = NAME_CONSTANTS.GLOBAL_STATUS_ACTIONS;
    let sectionStatusActions = NAME_CONSTANTS.SECTION_STATUS_ACTIONS;
    let entryActions = NAME_CONSTANTS.ENTRY_ACTIONS;

    // ----- hooks -----
    const [currentPage, setCurrentPage] = useState(pageNames.EDIT_PAGE);
    const [sectionSubmissionStatuses, setSectionSubmissionStatuses] = useState({
        [NAME_CONSTANTS.GENERAL_INFORMATION_SECTION.SECTION_NAME]: {
            status: statuses.EDITING,
        },
        [NAME_CONSTANTS.EDUCATIONAL_EXPERIENCE_SECTION.SECTION_NAME]: {
            status: statuses.EDITING,
        },
        [NAME_CONSTANTS.PRACTICAL_EXPERIENCE_SECTION.SECTION_NAME]: {
            status: statuses.EDITING,
        },
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
        if (currentPage === pageNames.EDIT_PAGE) {
            jsxOfPageToShow = (
                <EditPage
                    sectionSubmissionStatuses={sectionSubmissionStatuses}
                    onSectionSubmissionStatusesChange={
                        handleSectionSubmissionStatusesChange
                    }
                    generalInformation={generalInformation}
                    onGeneralInformationChange={handleGeneralInformationChange}
                    educationalExperience={educationalExperience}
                    onEducationalExperienceChange={
                        handleEducationalExperienceChange
                    }
                    onManipulateEducationalExperienceEntry={
                        handleManipulateEducationalExperienceEntry
                    }
                    practicalExperience={practicalExperience}
                    onPracticalExperienceChange={
                        handlePracticalExperienceChange
                    }
                    onManipulatePracticalExperienceEntry={
                        handleManipulatePracticalExperienceEntry
                    }
                />
            );
        } else if (currentPage === pageNames.CV_VIEW_PAGE) {
            jsxOfPageToShow = (
                <CvViewPage
                    sectionSubmissionStatuses={sectionSubmissionStatuses}
                    generalInformation={generalInformation}
                    educationalExperience={educationalExperience}
                    practicalExperience={practicalExperience}
                />
            );
        }
        return jsxOfPageToShow;
    }

    function handleResetAll(actionType) {
        if (!(actionType === globalStatusActions.RESET)) {
            return;
        }

        setCurrentPage(pageNames.EDIT_PAGE);
        setSectionSubmissionStatuses({
            [NAME_CONSTANTS.GENERAL_INFORMATION_SECTION.SECTION_NAME]: {
                status: statuses.EDITING,
            },
            [NAME_CONSTANTS.EDUCATIONAL_EXPERIENCE_SECTION.SECTION_NAME]: {
                status: statuses.EDITING,
            },
            [NAME_CONSTANTS.PRACTICAL_EXPERIENCE_SECTION.SECTION_NAME]: {
                status: statuses.EDITING,
            },
        });
        setGeneralInformation({
            [generalInformationFieldNames.NAME]: "",
            [generalInformationFieldNames.EMAIL]: "",
            [generalInformationFieldNames.PHONE]: "",
        });
        setEducationalExperience({});
        setPracticalExperience({});
    }

    // ----- subimt and edit handlers -----

    function handleSectionSubmissionStatusesChange(actionType, section) {
        let copyOfSectionSubmissionStatuses = structuredClone(
            sectionSubmissionStatuses,
        );
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
        if (updatedValue === "") {
            throw new Error(
                `actionType ${actionType} is not within the defined actionTypes`,
            );
        }

        copyOfSectionSubmissionStatuses[section].status = updatedValue;
        setSectionSubmissionStatuses(copyOfSectionSubmissionStatuses);
    }

    // ----- general information handlers -----

    function handleGeneralInformationChange(field, value) {
        let copyOfGeneralInformation = structuredClone(generalInformation);

        copyOfGeneralInformation[field] = value;
        setGeneralInformation(copyOfGeneralInformation);
    }

    // ----- educational experience handlers -----
    function handleEducationalExperienceChange(uuidOfEntry, field, value) {
        let copyOfEducationalExperience = structuredClone(
            educationalExperience,
        );
        copyOfEducationalExperience[`${uuidOfEntry}`][field] = value;
        setEducationalExperience(copyOfEducationalExperience);
    }

    function handleManipulateEducationalExperienceEntry(
        actionType,
        uuidToDelete = "",
    ) {
        let copyOfEducationalExperience = structuredClone(
            educationalExperience,
        );

        switch (actionType) {
            case entryActions.ADD: {
                let newEntryId = crypto.randomUUID();
                copyOfEducationalExperience[newEntryId] = {
                    [educationalExperienceFieldNames.SCHOOL_NAME]: "",
                    [educationalExperienceFieldNames.TITLE_OF_STUDY]: "",
                    [educationalExperienceFieldNames.DATE_OF_STUDY]: "",
                };
                break;
            }
            case entryActions.DELETE: {
                if (uuidToDelete === "") {
                    throw new Error(`uuid ${uuidToDelete} is not a valid uuid`);
                }

                delete copyOfEducationalExperience[uuidToDelete];
                break;
            }
        }

        setEducationalExperience(copyOfEducationalExperience);
    }

    // ----- Practical Experience Handlers -----
    function handlePracticalExperienceChange(uuidOfEntry, field, value) {
        let copyOfPracticalExperience = structuredClone(practicalExperience);
        copyOfPracticalExperience[`${uuidOfEntry}`][field] = value;
        setPracticalExperience(copyOfPracticalExperience);
    }

    function handleManipulatePracticalExperienceEntry(
        actionType,
        uuidToDelete = "",
    ) {
        let copyOfPracticalExperience = structuredClone(practicalExperience);

        switch (actionType) {
            case entryActions.ADD: {
                let newEntryId = crypto.randomUUID();
                copyOfPracticalExperience[newEntryId] = {
                    [practicalExperienceFieldNames.COMPANY_NAME]: "",
                    [practicalExperienceFieldNames.POSITION_TITLE]: "",
                    [practicalExperienceFieldNames.MAIN_RESPONSIBILITIES]: "",
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
        <div className="app">
            <AppHeader
                onCurrentPageChange={handleCurrentPageChange}
                onResetAll={handleResetAll}
            />
            {_computeCurrentPageToShow()}
            <AppFooter/>
        </div>
    );
}

export default App;
