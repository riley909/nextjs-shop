import React, { useState } from 'react';
import StyledInput from '../components/productAdd/StyledInput';
import StyledRadio, { RadioButtonList } from '../components/productAdd/StyledRadio';
import { ProductAddLabel } from '../styles/productAdd';

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
        <StyledInput name="제품명" description="제품명 입력" />
        <StyledInput name="가격" description="0원" />

        <ProductAddLabel>
          카테고리
          <RadioButtonList>
            <StyledRadio id="1" name="에코백" />
            <StyledRadio id="2" name="티셔츠" />
            <StyledRadio id="3" name="기타상품" />
          </RadioButtonList>
        </ProductAddLabel>
      </form>
    </div>
  );
}
