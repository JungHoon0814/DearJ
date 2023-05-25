import { atom, selector } from 'recoil';

//회원가입
export const nickNameState = atom<string>({
  key: 'nickNameState',
  default: '',
});

export const emailState = atom<string>({
  key: 'emailState',
  default: '',
});

export const passwordState = atom<string>({
  key: 'passwordState',
  default: '',
});

export const userInfoSelector = selector({
  key: 'userInfoSelector',
  get: ({ get }) => {
    const email = get(emailState);
    const password = get(passwordState);
    const nickname = get(nickNameState);
    return { email, password, nickname };
  },
});

export const emailErrState = atom<string>({
  key: 'emailErrState',
  default: '',
});

export const pwErrState = atom<string>({
  key: 'pwErrState',
  default: '',
});

export const confirmPwErrState = atom<string>({
  key: 'confirmPwErrState',
  default: '',
});

//로그인
export const loginSelector = selector({
  key: 'loginSelector',
  get: ({ get }) => {
    const email = get(emailState);
    const password = get(passwordState);
    return { email, password };
  },
});

//자소서 제목
export const titleState = atom<string>({
  key: 'titlestate',
  default: '',
});

//자소서 내용
export const contentState = atom<string>({
  key: 'contentstate',
  default: '',
});

export const docInfoSelector = selector({
  key: 'docInfoSelector',
  get: ({ get }) => {
    const title = get(titleState);
    const content = get(contentState);
    return { title, content };
  },
});
// 자소서 결과
export const ResultState = atom<boolean>({
  key: 'resultstate',
  default: false,
});
// 피드백
export const feedbackTitleState = atom<string>({
  key: 'feedbackTitle',
  default: '',
});

export const feedbackContentState = atom<string>({
  key: 'feedbackContent',
  default: '',
});

export const feedbackCompany = atom<string>({
  key: 'feedbackCompany',
  default: '',
});

export const feedbackJob = atom<string>({
  key: 'feedbackJob',
  default: '',
});

export const feedbackComment = atom<string>({
  key: 'feedbackComment',
  default: '',
});

export const feedbackSelector = selector({
  key: 'feedbackSelector',
  get: ({ get }) => {
    const title = get(feedbackTitleState);
    const content = get(feedbackContentState);
    const company = get(feedbackCompany);
    const job = get(feedbackJob);
    const comment = get(feedbackComment);
    return { title, content, company, job, comment };
  },
});
//mypage

export const openContentState = atom<number[]>({
  key: 'openContentState',
  default: [],
});

//user정보

export const userNickNameState = atom<string>({
  key: 'userNickNameState',
  default: '',
});

//유사도
export const SimilarState = atom<number>({
  key: 'Similar',
  default: 0,
});
