import React, { useState, useEffect } from 'react';
// 이미지 파일들을 import 합니다.
import image1 from '../images/img-01.jpg';
import image2 from '../images/img-02.jpg';
import image3 from '../images/img-03.jpg';
import image4 from '../images/img-04.jpg';
import image5 from '../images/img-05.jpg';
import image6 from '../images/img-06.jpg';
import image7 from '../images/img-07.jpg';
import image8 from '../images/img-08.jpg';
import image9 from '../images/img-09.jpg';
import image10 from '../images/img-10.jpg';

// import한 이미지들을 배열에 담습니다.
const imgData = [
  image1, image2, image3, image4, image5,
  image6, image7, image8, image9, image10
];

const ImageRandom = () => {
  // 현재 배경 이미지 URL을 저장할 상태
  // 초기값은 null 또는 imgData[0] 등으로 설정할 수 있습니다.
  const [currentBackgroundImage, setCurrentBackgroundImage] = useState(null);

  // 랜덤 이미지를 선택하여 상태를 업데이트하는 함수
  const selectRandomImage = () => {
    const random = Math.floor(Math.random() * imgData.length); // imgData 배열 길이 내에서 랜덤 인덱스 생성
    const selectedImage = imgData[random]; // 랜덤 인덱스의 이미지 URL 선택
    setCurrentBackgroundImage(selectedImage); // 선택된 이미지로 상태 업데이트
  };

  // 컴포넌트가 마운트될 때 (처음 로딩될 때) 초기 배경 이미지를 설정합니다.
  useEffect(() => {
    selectRandomImage(); // 컴포넌트 로딩 시 한 번 실행하여 초기 이미지 설정
  }, []); // 빈 배열: 마운트 시에만 실행

  // currentBackgroundImage 상태가 변경될 때마다 body 요소의 배경 스타일을 업데이트합니다.
  useEffect(() => {
    if (currentBackgroundImage) { // 이미지가 선택되었을 때만 실행
      document.body.style.backgroundImage = `url(${currentBackgroundImage})`; // body의 배경 이미지 설정
      document.body.style.backgroundRepeat = 'no-repeat'; // 배경 이미지 반복 안 함
      document.body.style.backgroundSize = 'cover'; // 배경 이미지가 화면을 꽉 채우도록 설정
      document.body.style.backgroundPosition = 'center center'; // 배경 이미지를 중앙에 배치
      document.body.style.backgroundAttachment = 'fixed'; // 배경 이미지를 뷰포트에 고정 (스크롤 시 움직이지 않음)
    }

    // 컴포넌트가 언마운트될 때 (사라질 때) body에 적용한 스타일을 초기화합니다.
    // 앱 전체에서 배경 이미지를 관리하는 컴포넌트라면 이 cleanup이 필요 없을 수도 있습니다.
    return () => {
      document.body.style.backgroundImage = '';
      document.body.style.backgroundRepeat = '';
      document.body.style.backgroundSize = '';
      document.body.style.backgroundPosition = '';
      document.body.style.backgroundAttachment = '';
    };
  }, [currentBackgroundImage]); // currentBackgroundImage 상태가 변경될 때마다 실행

  return (
    <div className='random-btn'>
      {/* 버튼 클릭 시 selectRandomImage 함수 실행 */}
      <button onClick={selectRandomImage}>배경화면 바꾸기</button>
      {/* 배경 이미지는 body에 적용하므로 <img> 태그는 필요 없습니다. */}
    </div>
  );
};

export default ImageRandom; // 컴포넌트 내보내기
