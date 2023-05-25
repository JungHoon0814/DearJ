import React, { ChangeEvent, useState, useRef } from 'react';
import * as SC from './ExportsSC';
import API from '../../API';
import { useNavigate } from 'react-router-dom';
import { Path } from '../../Router';

const Exports = () => {
  const [content, setContent] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [company, setCompany] = useState<string>('');
  const [job, setJob] = useState<string>('');
  const titleInput = useRef<HTMLInputElement | null>(null);
  const contentInput = useRef<HTMLTextAreaElement | null>(null);
  const navigate = useNavigate();

  function titleHandle(e: ChangeEvent<HTMLInputElement>) {
    const title = e.target.value;
    e.preventDefault();
    if (title.length <= 20) {
      titleInput.current?.focus();
      setTitle(title);
    }
  }
  function contentHandle(e: ChangeEvent<HTMLTextAreaElement>) {
    const content = e.target.value;
    e.preventDefault();
    if (content.length <= 5000) {
      contentInput.current?.focus();
      setContent(content);
    }
  }
  const feedbakcClickHandle = (e: React.MouseEvent) => {
    e.preventDefault();
    if (title.length > 0 && content.length > 0) {
      API.post('experts', {
        title,
        content,
        company,
        job,
      })
        .then(res => {
          console.log(res);
          navigate(Path.USER);
          setContent('');
          setTitle('');
          setCompany('');
          setJob('');
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      alert('내용을 입력하세요.');
    }
  };
  // 토큰을 활용하여 데이터 불러오기
  return (
    <SC.Maindiv>
      <SC.Title>자기소개서 첨삭받기</SC.Title>
      <SC.TitleInput
        value={title}
        placeholder="제목을 입력해 주세요.(20자 이내)"
        maxLength={20}
        onChange={titleHandle}
      />
      <SC.DocTextArea
        value={content}
        placeholder="내용을 입력해주세요."
        maxLength={5000}
        onChange={contentHandle}
      />
      <SC.Subdiv>
        <SC.TextCount>글자 수 {content.length} / 5000</SC.TextCount>
      </SC.Subdiv>
      <SC.Jobdiv>지원 회사/직무(직군)</SC.Jobdiv>
      <SC.Detaildiv>
        <SC.JobInput
          value={company}
          placeholder="회사를 입력해 주세요"
          onChange={e => setCompany(e.target.value)}
        />
        <SC.DetailInput
          value={job}
          placeholder="직무(직군)을 입력해 주세요."
          onChange={e => setJob(e.target.value)}
        />
      </SC.Detaildiv>
      <SC.Feedbackbutton onClick={feedbakcClickHandle}>
        피드백 신청
      </SC.Feedbackbutton>
    </SC.Maindiv>
  );
};

export default Exports;
