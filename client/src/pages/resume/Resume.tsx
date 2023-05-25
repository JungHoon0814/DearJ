import React, { ChangeEvent, useRef, useState } from 'react';
import * as SC from './ResumeSC';
import maincomputer from '../../img/Mainimg.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Path } from '../../Router';
import { useRecoilState } from 'recoil';
import { SimilarState } from '../../store/store';
import Loading from '../loading/Loading';

const Resume = () => {
  const [title, setTitle] = useState('');
  const [content, setContnet] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const titleInput = useRef<string | any>('');
  const contentInput = useRef<HTMLTextAreaElement | null>(null);
  const [similarity, setSimilarity] = useRecoilState(SimilarState);
  const navigate = useNavigate();

  function handleInputChange(e: ChangeEvent<HTMLTextAreaElement>) {
    const content = e.target.value;
    contentInput.current?.focus();
    setContnet(content);
  }
  const titleHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const title = e.target.value;
    titleInput.current.focus();
    setTitle(title);
  };
  //자기소개서 post 요청
  const resultHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (title.length > 0 && content.length > 0) {
      setIsLoading(true);

      await axios
        .post(`${process.env.REACT_APP_AI_SERVER_URL}/resumes`, { content })
        .then(res => {
          setSimilarity(res.data.pass_probability);
          setTitle('');
          setContnet('');
          setIsLoading(false);
          console.log(similarity);
          navigate(Path.RESULT);
        })
        .catch(error => {
          console.log(error);
          setIsLoading(false);
        });
    } else {
      alert('내용을 입력해주세요.');
    }
  };
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <SC.Mainbox>
            {/* 피그마에 있던 원형 설정 */}
            <SC.Circle1 />
            <SC.Circle2 />
            {/* 피그마에 있던 텍스트 모음 */}
            <SC.Textline>자기소개서 합격률 예측</SC.Textline>
            <SC.Textline2>
              자기소개서를 입력하고 합격한 자기소개서와 비교해보세요.
            </SC.Textline2>
            <SC.Maincomputer src={maincomputer} alt="컴퓨터 이미지" />
          </SC.Mainbox>
          <SC.ResumeBox>
            자기소개서 입력
            <SC.SubText>
              자기소개서를 입력해서 유사도를 확인해보세요.
            </SC.SubText>
            <SC.Textarea>
              <SC.TitleInput
                id="title"
                value={title}
                ref={titleInput}
                maxLength={20}
                onChange={titleHandler}
                placeholder="제목을 입력하세요.(20자 이내)"
              />
              <SC.DocArea
                id="content"
                maxLength={1500}
                value={content}
                onChange={handleInputChange}
                ref={contentInput}
                placeholder="자기소개서 본문을 입력하세요.(1500자 이내)"
              />
              <SC.TextCount>글자 수 {content.length} /1500</SC.TextCount>
              <SC.ReusltButton onClick={resultHandler}>
                비교 하기
              </SC.ReusltButton>
            </SC.Textarea>
          </SC.ResumeBox>
        </div>
      )}
    </>
  );
};

export default Resume;
