/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import * as SC from './AdminSC';
import AdminInfo from './AdminInfo';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { openContentState } from '../../store/store';
import API from '../../API';
import Button from '../../components/common/Button';
import Modal from '@mui/material/Modal';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';

interface Detail {
  [key: string]: string;
}

interface Data {
  id: number;
  title: string;
  date: string;
  content: string;
  feedback: {
    total: string;
    detail: Detail;
  } | null;
}

interface TableListProps {
  data: Data;
  isOpen: boolean;
  onToggle: (id: number) => void;
}

const TableList = ({ data, isOpen, onToggle }: TableListProps) => {
  const { id, title, content, feedback } = data;

  return (
    <>
      <tr>
        <td style={{ cursor: 'pointer' }} onClick={() => onToggle(id)}>
          {title}
        </td>
        <td>{JSON.stringify(data)}</td>
        <SC.AdminDeleteButton>삭제</SC.AdminDeleteButton>
        <SC.AdminFilterButton>첨삭하기</SC.AdminFilterButton>
      </tr>
      {isOpen && (
        <tr>
          <td colSpan={3}>
            <SC.AdminContentContainer>
              <div className="admincontent-group">
                {feedback ? (
                  <div className="feedback-box">
                    <p>총평</p>
                    <div>{feedback.total}</div>
                  </div>
                ) : null}
                <div className="admincontent-box">
                  <p>제목</p>
                  <div>{title}</div>
                </div>
                <div className="admincontent-box">
                  <p>내용</p>
                  <div>{content}</div>
                </div>
                <div className="admincontent-length">
                  {content.length}자&nbsp;/&nbsp;3000자
                </div>
                <div className="feedback-box">
                  {feedback && feedback.detail
                    ? Object.entries(feedback.detail).map(([key, value]) => (
                        <div className="feedback-detail" key={key}>
                          <p>{key.split('_')[1]}</p>
                          <ul>
                            <li>
                              {key}: {value}
                            </li>
                          </ul>
                        </div>
                      ))
                    : null}
                </div>
                <div className="adminbtn-container">
                  <div className="adminbtn-group">
                    <Button>수정하기</Button>
                    <Button>피드백 다시 신청</Button>
                  </div>
                </div>
              </div>
            </SC.AdminContentContainer>
          </td>
        </tr>
      )}
    </>
  );
};

interface TableProps {
  data: Data[];
}

const Table = ({ data }: TableProps) => {
  const [openContentIds, setOpenContentIds] = useRecoilState(openContentState);

  const handleToggle = (id: number) => {
    setOpenContentIds(prevIds => {
      if (prevIds.includes(id)) {
        return prevIds.filter(prevId => prevId !== id);
      } else {
        return [...prevIds, id];
      }
    });
  };

  return (
    <SC.AdminTable>
      <thead>
        <tr>
          <th>제목</th>
          <th>작성일</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <TableList
            key={item.id}
            data={item}
            isOpen={openContentIds.includes(item.id)}
            onToggle={handleToggle}
          />
        ))}
      </tbody>
    </SC.AdminTable>
  );
};

//mock 데이터
const data: Data[] = [
  {
    id: 1,
    title: '발전하는 개발자가 되겠습니다.',
    date: '2022-05-01',
    content: '안녕하세요.1',
    feedback: {
      total: '피드백11',
      detail: {
        detail_1: '전체적으로 다시 써야 합니다.',
        detail_2: '전체적으로 다시 써야 합니다.',
      },
    },
  },
  {
    id: 2,
    title: 'sw 혁신, sk와 함께합니다.',
    date: '2022-05-02',
    content: '안녕하세요.22',
    feedback: {
      total: '피드백11',
      detail: {
        detail_1: '전체적으로 다시 써야 합니다.',
        detail_2: '전체적으로 다시 써야 합니다.',
        detail_3: '전체적으로 다시 써야 합니다.',
      },
    },
  },
  {
    id: 3,
    title: 'IT 혁신가를 꿈꾸는 개발자.',
    date: '2022-05-03',
    content: '안녕하세요.333',
    feedback: null,
  },
  {
    id: 4,
    title: 'CS와 알고리즘에 탄탄한 개발자입니다.',
    date: '2022-05-04',
    content: '안녕하세요.444',
    feedback: {
      total: '피드백11',
      detail: {
        detail_1: '전체적으로 다시 써야 합니다.',
        detail_2: '전체적으로 다시 써야 합니다.',
        detail_3: '전체적으로 다시 써야 합니다.',
        detail_4: '전체적으로 다시 써야 합니다.',
      },
    },
  },
  {
    id: 5,
    title: '자소서55',
    date: '2022-05-04',
    content: '안녕하세요.5555',
    feedback: null,
  },
];

// ---------- 어드민 정보를 props로 내려줄때의 타입 지정 ----------
type AdminComponentProps = {
  userResume: string[];
  adminMenuItems: string[];
  adminComponents: JSX.Element[];
};

type DocType = {
  _id: string;
  title: string;
  content: string;
  company: string;
  job: string;
  author: string;
  status: string;
  commentid: [];
  createdAt: string;
  updatedAt: string;
  __v: number;
};
type Document = {
  data: DocType[];
};
function AdminFunc({ userResume, adminComponents }: AdminComponentProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [userNickname, setUserNickname] = useState<string>();
  const [doc, setDoc] = useState<Document>();
  const setOpenContentIds = useSetRecoilState(openContentState);
  const handleMenuItemClick = (index: number) => {
    setSelectedIndex(index);
    setOpenContentIds([]);
    setFilteredData([]);
  };

  //내 정보
  useEffect(() => {
    API.get('users').then(res => {
      setUserNickname(res.data.data.nickname);
    });
    API.get('experts').then(res => {
      setDoc(res.data);
      console.log(res.data);
    });
  }, []);
  console.log(doc);
  // 필터링 기능
  const [filteredData, setFilteredData] = useState<Data[]>([]);
  // 첨삭 완료 filter
  const handleFilterCompleted = () => {
    const filtered = data.filter(d => d.feedback !== null);
    setFilteredData(filtered);
    setOpenContentIds([]);
  };
  // 첨삭 미완료 filter
  const handleFilterUncompleted = () => {
    const filtered = data.filter(d => d.feedback == null);
    setFilteredData(filtered);
    setOpenContentIds([]);
  };
  // 모두 보기 filter
  const handleShowAll = () => {
    const filtered = data.filter(
      d => d.feedback !== null || d.feedback == null,
    );
    setFilteredData(filtered);
    setOpenContentIds([]);
  };

  const handleLogout = () => {
    API.post('/auth/signout').then(res => {
      alert(res);
      localStorage.removeItem('userToken');
      window.location.href = '/';
    });
  };
  //모달
  const [logoutModalOpen, setLogoutModalOpen] = useState(false);
  const handleLogoutModalOpen = () => setLogoutModalOpen(true);
  const handleLogoutModalClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    setLogoutModalOpen(false);
    if (e.currentTarget.id === 'confirm') {
      handleLogout();
    }
  };

  return (
    <SC.AdminContainer>
      <SC.AdminLeftSidebar>
        <SC.AdminProfileBox>
          <AccountCircleIcon
            sx={{ width: '6vmin', height: '6vmin', marginRight: '1.5em' }}
          />
          <div className="profile-text">
            <p className="nickname">{userNickname} 님</p>
            <p className="user-email">{localStorage.getItem('email')}</p>
            <br />
            <SC.AdminTextButton onClick={handleLogoutModalOpen}>
              {'>'}로그아웃
            </SC.AdminTextButton>
          </div>
        </SC.AdminProfileBox>
        <SC.AdminUnderLine />

        <SC.AdminMenuTab>
          {userResume.map((item, index) => (
            <div
              key={index}
              onClick={() => handleMenuItemClick(index)}
              className={index === selectedIndex ? 'selected-menu' : ''}
            >
              {item}
            </div>
          ))}
        </SC.AdminMenuTab>
      </SC.AdminLeftSidebar>
      <SC.AdminRight>
        {selectedIndex === 1 ? (
          <AdminInfo />
        ) : (
          <SC.ContentDiv>
            <SC.AdminTitleGroup>
              <SC.AdminMainTitle>관리자 페이지</SC.AdminMainTitle>
            </SC.AdminTitleGroup>
            <SC.AdminBtnGroup>
              <SC.AdminFilterButton onClick={handleFilterCompleted}>
                첨삭 완료 보기
              </SC.AdminFilterButton>
              <SC.AdminFilterButton onClick={handleFilterUncompleted}>
                첨삭 미완료 보기
              </SC.AdminFilterButton>
              <SC.AdminFilterButton onClick={handleShowAll}>
                모두 보기
              </SC.AdminFilterButton>
            </SC.AdminBtnGroup>
            {filteredData.length > 0 ? (
              <Table data={filteredData} />
            ) : (
              adminComponents[selectedIndex]
            )}
            <SC.AdminBottomBtnGroup>
              <Button>자기소개서 등록</Button>
              <Button>전체 삭제</Button>
            </SC.AdminBottomBtnGroup>
          </SC.ContentDiv>
        )}
      </SC.AdminRight>
      <Modal open={logoutModalOpen} onClose={handleLogoutModalOpen}>
        <SC.ModalBox>
          <SC.ModalBox>
            <div className="logout-text">
              <div className="logout-icon">
                <LogoutIcon
                  sx={{
                    color: 'white',
                  }}
                />
              </div>
              <span>정말 로그아웃 하시겠습니까?</span>
            </div>
            <div className="logout-btn">
              <div className="logout-btn-wrap">
                <Button id="confirm" onClick={handleLogoutModalClose}>
                  확인
                </Button>
                <Button id="cancel" onClick={handleLogoutModalClose}>
                  취소
                </Button>
              </div>
            </div>
          </SC.ModalBox>
        </SC.ModalBox>
      </Modal>
    </SC.AdminContainer>
  );
}

const userResume = <Table data={data} />;

const adminInfo = <div>관리자 정보</div>;

// ---------- 관리자를 돌려주는 리턴문 ----------
function Admin() {
  const adminMenuItems = ['자기소개서 목록', '관리자 정보'];
  const adminComponents = [userResume, adminInfo];

  return (
    <AdminFunc
      adminMenuItems={adminMenuItems}
      adminComponents={adminComponents}
      userResume={[]}
    />
  );
}

export default Admin;
