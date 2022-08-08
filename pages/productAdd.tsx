import React, { useState } from 'react';
import Radio from '../components/Radio';
import { RadioButtonList } from '../styles/productAdd';

export default function ProductAdd() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div>
      <div>
        <div>등록하기</div>
        <div>완료</div>
      </div>
      <form onSubmit={handleSubmit}>
        <div>이미지</div>
        <label>
          제품명
          <input type="text" placeholder="제품명 입력" />
        </label>
        <label>
          가격
          <input type="text" placeholder="0원" />
        </label>
        <label>
          상세 설명
          <input type="text" placeholder="상세 설명 입력" />
        </label>
        <div>
          카테고리
          <RadioButtonList>
            <Radio id="1" name="에코백" />
            <Radio id="2" name="티셔츠" />
            <Radio id="3" name="기타상품" />
          </RadioButtonList>
        </div>
      </form>
    </div>
  );
}
