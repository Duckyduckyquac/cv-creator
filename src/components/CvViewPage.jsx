import { NAME_CONSTANTS } from "../constants";

function CvViewPage({
    sectionSubmissionStatuses,
    generalInformation,
    educationalExperience,
    practicalExperience,
}) {
    function _renderGeneralInformationDisplay() {
        if (
            sectionSubmissionStatuses[
                NAME_CONSTANTS.GENERAL_INFORMATION_SECTION.SECTION_NAME
            ].status !== NAME_CONSTANTS.STATUSES.SUBMITTING
        ) {
            return null;
        }
        return (
            <section className="display general-information-display cv-view-page__general-information-display">
                <header className="header general-information-display__header">
                    <h3 className="h3 header__h3">General Information</h3>
                </header>
                {_parseGeneralInformationContent()}
            </section>
        );
    }

    function _parseGeneralInformationContent() {
        const generalInformationFieldNames =
            NAME_CONSTANTS.GENERAL_INFORMATION_SECTION.FIELD_NAMES;
        return (
            <article className="content general-information-display__content">
                <div className="information-group content__information-group">
                    <span className="span information-group__span">Name</span>
                    <p className="p information-group__p">
                        {generalInformation[generalInformationFieldNames.NAME]}
                    </p>
                </div>
                <div className="information-group content__information-group">
                    <span className="span information-group__span">Email</span>
                    <p className="p information-group__p">
                        {generalInformation[generalInformationFieldNames.EMAIL]}
                    </p>
                </div>
                <div className="information-group content__information-group">
                    <span className="span information-group__span">Phone</span>
                    <p className="p information-group__p">
                        {`+${generalInformation[generalInformationFieldNames.PHONE]}`}
                    </p>
                </div>
            </article>
        );
    }

    function _renderEducationalExperienceDisplay() {
        if (
            sectionSubmissionStatuses[
                NAME_CONSTANTS.EDUCATIONAL_EXPERIENCE_SECTION.SECTION_NAME
            ].status !== NAME_CONSTANTS.STATUSES.SUBMITTING
        ) {
            return null;
        }
        return (
            <section className="display educational-experience-display cv-view-page__educational-experience-display">
                <header className="header educational-experience-display__header">
                    <h3 className="h3 header__h3">Educational Experience</h3>
                </header>
                {_parseEducationalExperienceContent()}
            </section>
        );
    }

    function _parseEducationalExperienceContent() {
        const educationalExperienceFieldNames =
            NAME_CONSTANTS.EDUCATIONAL_EXPERIENCE_SECTION.FIELD_NAMES;
        let educationalExperienceContent = [];
        let entries = Object.entries(educationalExperience);
        educationalExperienceContent = entries.map(function (entry) {
            let [uuid, information] = entry;

            let informationJsx = (
                <article
                    key={uuid}
                    className="content educational-experience-display__content"
                >
                    <div className="information-group content__information-group">
                        <span className="span information-group__span">
                            School Name
                        </span>
                        <p className="p information-group__p">
                            {
                                information[
                                    educationalExperienceFieldNames.SCHOOL_NAME
                                ]
                            }
                        </p>
                    </div>
                    <div className="information-group content__information-group">
                        <span className="span information-group__span">
                            Title of Study
                        </span>
                        <p className="p information-group__p">
                            {
                                information[
                                    educationalExperienceFieldNames
                                        .TITLE_OF_STUDY
                                ]
                            }
                        </p>
                    </div>
                    <div className="information-group content__information-group">
                        <span className="span information-group__span">
                            Date of Study
                        </span>
                        <p className="p information-group__p">
                            {
                                information[
                                    educationalExperienceFieldNames
                                        .DATE_OF_STUDY
                                ]
                            }
                        </p>
                    </div>
                </article>
            );
            return informationJsx;
        });
        return educationalExperienceContent;
    }

    function _renderPracticalExperienceDisplay() {
        if (
            sectionSubmissionStatuses[
                NAME_CONSTANTS.PRACTICAL_EXPERIENCE_SECTION.SECTION_NAME
            ].status !== NAME_CONSTANTS.STATUSES.SUBMITTING
        ) {
            return null;
        }
        return (
            <section className="display practical-experience-display cv-view-page__practical-experience-display">
                <header className="header practical-experience-display__header">
                    <h3 className="h3 header__h3">Practical Experience</h3>
                </header>
                {_parsePracticalExperienceContent()}
            </section>
        );
    }

    function _parsePracticalExperienceContent() {
        const practicalExperienceFieldNames =
            NAME_CONSTANTS.PRACTICAL_EXPERIENCE_SECTION.FIELD_NAMES;
        let practicalExperienceContent = [];
        let entries = Object.entries(practicalExperience);
        practicalExperienceContent = entries.map(function (entry) {
            let [uuid, information] = entry;

            let informationJsx = (
                <article
                    key={uuid}
                    className="content practical-experience-display__content"
                >
                    <div className="information-group content__information-group">
                        <span className="span information-group__span">
                            Company Name
                        </span>
                        <p className="p information-group__p">
                            {
                                information[
                                    practicalExperienceFieldNames.COMPANY_NAME
                                ]
                            }
                        </p>
                    </div>
                    <div className="information-group content__information-group">
                        <span className="span information-group__span">
                            Position Title
                        </span>
                        <p className="p information-group__p">
                            {
                                information[
                                    practicalExperienceFieldNames.POSITION_TITLE
                                ]
                            }
                        </p>
                    </div>
                    <div className="information-group content__information-group">
                        <span className="span information-group__span">
                            Main Responsibilities
                        </span>
                        <ul className="ul information-group__ul">
                            {_parseMainResponsibilities(uuid, information)}
                        </ul>
                    </div>
                </article>
            );
            return informationJsx;
        });
        return practicalExperienceContent;
    }

    function _parseMainResponsibilities(uuid, information) {
        const practicalExperienceFieldNames =
            NAME_CONSTANTS.PRACTICAL_EXPERIENCE_SECTION.FIELD_NAMES;

        let mainResponsibilities =
            information[practicalExperienceFieldNames.MAIN_RESPONSIBILITIES];
        mainResponsibilities = mainResponsibilities ?? "";
        mainResponsibilities = mainResponsibilities.trim();

        let listedMainResponsibilities = mainResponsibilities
            .split("\n")
            .map(function (mainResponsibility) {
                return mainResponsibility.trim();
            })
            .filter(function (mainResponsibility) {
                if (mainResponsibility === "") {
                    return false;
                }
                return true;
            })
            .map(function (mainResponsibility, index) {
                return (
                    <li key={`${uuid}-${index}`} className="li ul__li">
                        {mainResponsibility}
                    </li>
                );
            });
        return listedMainResponsibilities;
    }

    return (
        <main className="cv-view-page">
            <header className="header cv-view-page__header">
                <h2 className="h2 header__h2">Generated CV</h2>
                <p className="p header__p">
                    The following CV was generated using the current provided
                    information
                </p>
            </header>

            <div className="cv-paper cv-view-page__cv-paper">
                {_renderGeneralInformationDisplay()}
                {_renderEducationalExperienceDisplay()}
                {_renderPracticalExperienceDisplay()}
            </div>
        </main>
    );
}

export default CvViewPage;
