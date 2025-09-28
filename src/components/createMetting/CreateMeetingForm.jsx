import React, { useState } from "react";
import { createMeeting } from "../../api/Meeting";
import CategoryButtons from "../home/CategoryButtons";
import FormGroup from "./FormGroup";
import TextArea from "./TextArea";
import TextInput from "./TextInput";

const CreateMeetingForm = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const meetingData = {
      title: e.target.title.value,
      content: e.target.description.value,  // TextArea → DTO의 content
      category: selectedCategory,
      date: e.target.date.value,
      time: e.target.time.value,
      address: e.target.address.value,
      addressDetail: e.target.detailAddress.value,
      personCount: e.target.capacity.value,
    };

    const formData = new FormData();
    formData.append(
      "data",
      new Blob([JSON.stringify(meetingData)], { type: "application/json" })
    );

    if (e.target.image.files[0]) {
      formData.append("image", e.target.image.files[0]);
    }

    try{
      const response = await createMeeting(formData);
      console.log("response", response);
      const id = response.data.meetingId;
      window.location.href = "/match/" + id;

    } catch(error){
      errorMessage(error);
    }
  };

  // 에러 메시지 응답
  const errorMessage = (error) => {
    console.log(error);
    if (error.response) {
      const data = error.response.data;
      alert(data.message || data.error);
    }
  }

  return (
    <form className="met-form" onSubmit={handleSubmit}>
        <FormGroup label="카테고리" htmlFor="category">
            <CategoryButtons selected={selectedCategory} setSelected={setSelectedCategory} />
        </FormGroup>

        <TextInput label="제목" id="title" placeholder="모임 제목을 입력하세요" required />
        <TextArea label="내용" id="description" placeholder="모임 내용을 입력하세요" required />

        <div className="met-form-row">
            <TextInput label="날짜" id="date" type="date" required />
            <TextInput label="시간" id="time" type="time" required />
        </div>

        <TextInput label="모집 인원" id="capacity" type="number" placeholder="모집 인원을 입력하세요" min="1" required />
        <TextInput label="주소" id="address" placeholder="주소를 입력하세요" required />
        <TextInput label="상세 주소" id="detailAddress" placeholder="상세 주소를 입력하세요 (예: GS25 옆)" />

        <div className="met-form-group">
            <label htmlFor="image" className="met-label">대표 이미지</label>
            <input type="file" id="image" className="met-input-file" accept="image/*" onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                document.getElementById('met-image-preview').src = URL.createObjectURL(file);
                document.getElementById('met-image-preview').style.display = 'block';
                }
            }} />
            <img id="met-image-preview" className="met-image-preview" src="" alt="미리보기" />
        </div>

        <button type="submit" className="met-submit-btn">모임 생성</button>
    </form>

  );
};

export default CreateMeetingForm;
