import React from "react";
import "../../css/CreateMeetingPage.css";
import CreateMeetingForm from "../../components/createMetting/CreateMeetingForm";

const CreateMeetingPage = () => {
    return(
        <div className="container">
            <div className="met-title-container">
                <h2 className="met-form-title">모임 생성</h2>
            </div>
            
            <CreateMeetingForm />
        </div>
    )
}

export default CreateMeetingPage ;