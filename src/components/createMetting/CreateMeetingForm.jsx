import React, { useState } from "react";
import CategoryButtons from "../home/CategoryButtons";

const CreateMeetingForm = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // 여기서 form 데이터를 서버로 보내거나 상태 관리
    console.log("선택된 카테고리:", selectedCategory);
    alert("모임 생성 완료!");
  };

  return (
    <form className="met-form" onSubmit={handleSubmit}>

        <div className="met-form-group">
            <label htmlFor="catagory" className="met-label">카테고리</label>
            <CategoryButtons 
              selected={selectedCategory} 
              setSelected={setSelectedCategory} 
            />
        </div>

        <div className="met-form-group">
            <label htmlFor="title" className="met-label">제목</label>
            <input type="text" id="title" className="met-input" placeholder="모임 제목을 입력하세요" required />
        </div>

        <div className="met-form-group">
            <label htmlFor="description" className="met-label">내용</label>
            <textarea id="description" className="met-textarea" placeholder="모임 내용을 입력하세요" required></textarea>
        </div>

        <div className="met-form-row">
            <div className="met-form-group">
                <label htmlFor="date" className="met-label">날짜</label>
                <input type="date" id="date" className="met-input" required />
            </div>

            <div className="met-form-group">
                <label htmlFor="time" className="met-label">시간</label>
                <input type="time" id="time" className="met-input" required />
            </div>
        </div>

        <div className="met-form-group">
            <label htmlFor="capacity" className="met-label">모집 인원</label>
            <input type="number" id="capacity" className="met-input" placeholder="모집 인원을 입력하세요" min="1" required />
        </div>


        <div className="met-form-group">
            <label htmlFor="address" className="met-label">주소</label>
            <input 
            type="text" 
            id="address" 
            className="met-input" 
            placeholder="주소를 입력하세요" 
            required 
            />
        </div>

        <div className="met-form-group">
            <label htmlFor="detailAddress" className="met-label">상세 주소</label>
            <input 
            type="text" 
            id="detailAddress" 
            className="met-input" 
            placeholder="상세 주소를 입력하세요 (예: GS25 옆)" 
            />
        </div>


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
