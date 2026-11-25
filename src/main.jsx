import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/main.css" 
import "./styles/app.css"
import "./styles/appHeader.css"
import "./styles/appNav.css"
import "./styles/reusables.css"
import "./styles/editPage.css"
import "./styles/sectionInput.css"
import "./styles/generalInformationSection.css"
import "./styles/educationalExperienceSection.css"
import "./styles/practicalExperienceSection.css"
import "./styles/submitAndEditButtonsGroup.css"
import "./styles/sectionTextArea.css"
import "./styles/appFooter.css"
import "./styles/cvViewPage.css"
import App from "./components/App.jsx";

createRoot(document.querySelector("#root")).render(
    <StrictMode>
        <App />
    </StrictMode>,
);
