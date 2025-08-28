import React from "react";
import "../../css/CreateMeetingPage.css";
import CreateMeetingForm from "../../components/createMetting/CreateMeetingForm";

const CreateMeetingPage = () => {
    return(
        <div className="container">
            <h2 className="form-title">모임 생성</h2>
            <CreateMeetingForm />
        </div>
    )
}

export default CreateMeetingPage ;