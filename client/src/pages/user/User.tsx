import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import * as SC from './UserSC';
import Myinfo from './MYInfo';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { openContentState, userNickNameState } from '../../store/store';
import API from '../../API';
import jwt_decode, { JwtPayload } from 'jwt-decode';
import Button from '../../components/common/Button';
import Modal from '@mui/material/Modal';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
// import GradingIcon from '@mui/icons-material/Grading';
import FeedbackImg from '../../img/Feedback.png';

//내 자기소개서
interface Comment {
  comment: string;
  _id: string;
}

interface Data {
  author: string;
  company: string;
  content: string;
  createdAt: string;
  job: string;
  status: string;
  title: string;
  updatedAt: string;
  _id: number;
  commentid: Comment[];
}

interface TableRowProps {
  data: Data;
  isOpen: boolean;
  onToggle: (id: number) => void;
}

const TableRow = ({ data, isOpen, onToggle }: TableRowProps) => {
  const { content, createdAt, status, title, _id, commentid } = data;

  //삭제confirm모달
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const handleDeleteModalOpen = () => setDeleteModalOpen(true);
  const handleDeleteModalClose = () => {
    setDeleteModalOpen(false);
  };

  const handleDeleteEach = () => {
    API.delete(`/experts/${_id}`)
      .then(() => {
        console.log('삭제 성공');
        window.location.reload();
      })
      .catch(() => {
        alert('삭제에 실패하였습니다.');
      });
  };

  //자기소개서 수정 모달
  const [patchModalOpen, setPatchModalOpen] = useState(false);
  const handlePatchModalOpen = () => setPatchModalOpen(true);
  const handlePatchModalClose = () => {
    setPatchModalOpen(false);
  };

  const [patchContentLength, setPatchContentLength] = useState<number>(
    content.length,
  );
  const [patchResume, setPatchResume] = useState({});
  const [patchTitle, setPatchTitle] = useState(title);
  const [patchContent, setPatchContent] = useState(content);

  const handlePatchContentLength = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const content = e.target.value;
    setPatchContentLength(content.length);
    setPatchContent(content);
    setPatchResume({ title: patchTitle, content: patchContent });
  };

  const showAlert = (e: React.MouseEvent<HTMLButtonElement>) => {
    const result = window.confirm('수정한 내용을 삭제하시겠습니까?');

    if (result) {
      handlePatchModalClose();
    } else {
      e.preventDefault();
      return;
    }
  };

  const handlePatchTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPatchTitle(e.target.value);
    setPatchResume({ title: patchTitle, content: patchContent });
  };

  const handleSubmitPatchResume = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(patchResume);
    console.log(_id);
    API.patch(`/experts/${_id}`, patchResume)
      .then(() => {
        console.log('성공');
        handlePatchModalClose();
        window.location.reload();
      })
      .catch(() => {
        console.log('실패');
      });
  };

  return (
    <>
      <tr>
        <td style={{ cursor: 'pointer' }} onClick={() => onToggle(_id)}>
          {title}
        </td>
        <td>{createdAt}</td>
        <td>
          <div className="btn-wrap">
            <div className={status === 'done' ? 'disabled-btn' : ''}>
              {status === 'done' ? '첨삭 완료' : '첨삭 진행중'}
            </div>
            <SC.FilterButton onClick={handleDeleteModalOpen}>
              삭제
            </SC.FilterButton>
          </div>
        </td>
      </tr>
      {isOpen && (
        <tr>
          <td colSpan={3}>
            <SC.ContentContainer>
              <div className="content-wrap">
                {status === 'done' ? (
                  <div className="feedback-box">
                    <p>
                      총평
                      <img src={FeedbackImg} alt="FeedbackImg" />
                    </p>
                    <div className="feedback-total">{commentid[0].comment}</div>
                  </div>
                ) : null}
                <div className="content-box">
                  <p>제목</p>
                  <div>{title}</div>
                </div>
                <div className="content-box">
                  <p>내용</p>
                  <div>{content}</div>
                </div>
                <div className="content-length-wrap">
                  <div className="content-length">
                    글자수&nbsp;<span>{content.length}</span>&nbsp;/&nbsp;3000{' '}
                  </div>
                </div>
                <div className="feedback-box">
                  {/* {status && status === 'done'
                    ? Object.entries(status).map(([key, value]) => (
                        <div className="feedback-detail" key={key}>
                          <div className="feedback-detail-num">
                            <span>
                              <GradingIcon fontSize="small" />{' '}
                              {key.split('_')[1]}
                            </span>
                          </div>
                          <ul>
                            <li>{value}</li>
                          </ul>
                        </div>
                      ))
                    : null} */}
                </div>
                <div className="btn-container">
                  <div className="btn-wrap">
                    <Button onClick={handlePatchModalOpen}>수정하기</Button>
                  </div>
                </div>
              </div>
            </SC.ContentContainer>
          </td>
        </tr>
      )}
      <Modal open={deleteModalOpen} onClose={handleDeleteModalOpen}>
        <SC.ModalBox>
          <SC.ModalWrap>
            <div className="logout-text">
              <span>정말 삭제하시겠습니까?</span>
            </div>
            <div className="logout-btn">
              <div className="logout-btn-wrap">
                <Button id="confirm" onClick={handleDeleteEach}>
                  확인
                </Button>
                <Button id="cancel" onClick={handleDeleteModalClose}>
                  취소
                </Button>
              </div>
            </div>
          </SC.ModalWrap>
        </SC.ModalBox>
      </Modal>
      <Modal open={patchModalOpen} onClose={handlePatchModalOpen}>
        <SC.PatchModalBox>
          <SC.PatchModalWrap>
            <div className="patch-text-wrap">
              <span>수정하기</span>
            </div>
            <form onSubmit={handleSubmitPatchResume}>
              <div className="patch-text">
                <span>제목</span>
                <input
                  id="title"
                  defaultValue={title}
                  maxLength={20}
                  onChange={handlePatchTitle}
                  placeholder="제목을 입력하세요.(20자 이내)"
                />
                <span>내용</span>
                <textarea
                  id="content"
                  maxLength={1000}
                  defaultValue={content}
                  onChange={handlePatchContentLength}
                  placeholder="자기소개서 본문을 입력하세요.(1000자 이내)"
                />
              </div>
              <div className="content-length-wrap">
                <div className="content-length">
                  글자수&nbsp;<span>{patchContentLength}</span>&nbsp;/&nbsp;3000{' '}
                </div>
              </div>
              <div className="patch-btn">
                <div className="patch-btn-wrap">
                  <Button id="confirm" type="submit">
                    수정하기
                  </Button>
                  <Button id="cancel" onClick={showAlert}>
                    취소
                  </Button>
                </div>
              </div>
            </form>
          </SC.PatchModalWrap>
        </SC.PatchModalBox>
      </Modal>
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
    <SC.Table>
      <thead>
        <tr>
          <th>제목</th>
          <th>작성일</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <TableRow
            key={item._id}
            data={item}
            isOpen={openContentIds.includes(item._id)}
            onToggle={handleToggle}
          />
        ))}
      </tbody>
    </SC.Table>
  );
};

//레이아웃
type ComponentProps = {
  menuItems: string[];
  data: Data[];
};

function UserFunc({ menuItems, data }: ComponentProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const setOpenContentIds = useSetRecoilState(openContentState);

  const handleMenuItemClick = (index: number) => {
    setSelectedIndex(index);
    setOpenContentIds([]);
    setFilteredData(data);
  };

  // 필터링 기능
  const [filteredData, setFilteredData] = useState<Data[]>();
  // 첨삭 완료 filter
  const handleFilterCompleted = useCallback(() => {
    const completeFiltered = data.filter(d => d.status === 'done');
    setFilteredData(completeFiltered);
    setOpenContentIds([]);
  }, [data]);
  const handleFilterUncompleted = useCallback(() => {
    const incompleteFiltered = data.filter(d => d.status !== 'done');
    setFilteredData(incompleteFiltered);
    setOpenContentIds([]);
  }, [data]);
  const handleShowAll = useCallback(() => {
    setFilteredData(data);
    setOpenContentIds([]);
  }, [data]);

  useEffect(() => {
    console.log(filteredData);
  }, [filteredData]);

  const handleLogout = () => {
    API.post('/auth/signout').then(() => {
      localStorage.clear();
      navigate('/');
    });
  };

  const navigate = useNavigate();

  const handlePutResume = () => {
    navigate('/resume');
  };

  //로그아웃모달

  const [logoutModalOpen, setLogoutModalOpen] = useState(false);
  const handleLogoutModalOpen = () => setLogoutModalOpen(true);
  const handleLogoutModalClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    setLogoutModalOpen(false);
    if (e.currentTarget.id === 'confirm') {
      handleLogout();
    }
  };

  //삭제confirm모달
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const handleDeleteModalOpen = () => setDeleteModalOpen(true);
  const handleDeleteModalClose = () => {
    setDeleteModalOpen(false);
  };

  const handleDeleteAll = () => {
    API.delete('/experts')
      .then(() => {
        console.log('전체 삭제 성공');
        window.location.reload();
      })
      .catch(() => {
        console.log('전체 삭제에 실패하였습니다.');
      });
  };

  const [userNickName] = useRecoilState(userNickNameState);

  return (
    <SC.Container>
      <SC.Left>
        <SC.ProfileBox>
          <AccountCircleIcon sx={{ width: '6vmin', height: '6vmin' }} />
          <div className="profile-text">
            <p className="nickname"> {userNickName} 님</p>
            <p className="user-email">{localStorage.getItem('email')}</p>
            <SC.TextButton onClick={handleLogoutModalOpen}>
              {'>'}로그아웃
            </SC.TextButton>
          </div>
        </SC.ProfileBox>
        <SC.UnderLine />

        <SC.MenuWrap>
          {menuItems.map((item, index) => (
            <div
              key={index}
              onClick={() => handleMenuItemClick(index)}
              className={index === selectedIndex ? 'selected-menu' : ''}
            >
              {item}
            </div>
          ))}
        </SC.MenuWrap>
      </SC.Left>
      <SC.Right>
        {selectedIndex === 1 ? (
          <Myinfo />
        ) : (
          <>
            <SC.TitleWrap>
              <SC.MainTitle>내 자기소개서</SC.MainTitle>
            </SC.TitleWrap>
            <SC.BtnWrap>
              <SC.FilterButton onClick={handleFilterCompleted}>
                첨삭 완료 보기
              </SC.FilterButton>
              <SC.FilterButton onClick={handleFilterUncompleted}>
                첨삭 미완료 보기
              </SC.FilterButton>
              <SC.FilterButton onClick={handleShowAll}>
                모두 보기
              </SC.FilterButton>
            </SC.BtnWrap>
            {filteredData && filteredData.length > 0 ? (
              <Table data={filteredData} />
            ) : filteredData && filteredData.length === 0 ? (
              <Table data={filteredData} />
            ) : (
              <Table data={data} />
            )}
            <SC.BottomBtnWrap>
              <Button onClick={handleDeleteModalOpen}>전체 삭제</Button>
              <Button onClick={handlePutResume}>자기소개서 등록</Button>
            </SC.BottomBtnWrap>
          </>
        )}
      </SC.Right>
      <Modal open={logoutModalOpen} onClose={handleLogoutModalOpen}>
        <SC.ModalBox>
          <SC.ModalWrap>
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
          </SC.ModalWrap>
        </SC.ModalBox>
      </Modal>
      <Modal open={deleteModalOpen} onClose={handleDeleteModalOpen}>
        <SC.ModalBox>
          <SC.ModalWrap>
            <div className="logout-text">
              <span>정말 삭제하시겠습니까?</span>
            </div>
            <div className="logout-btn">
              <div className="logout-btn-wrap">
                <Button id="confirm" onClick={handleDeleteAll}>
                  확인
                </Button>
                <Button id="cancel" onClick={handleDeleteModalClose}>
                  취소
                </Button>
              </div>
            </div>
          </SC.ModalWrap>
        </SC.ModalBox>
      </Modal>
    </SC.Container>
  );
}

function User() {
  const [myResume, setMyResume] = useState([]);
  const setUserNickName = useSetRecoilState(userNickNameState);

  useEffect(() => {
    API.get('/auth/cookies').then(res => {
      const userToken = res.data;
      localStorage.setItem('userToken', userToken);
      API.get('/experts')
        .then(res => {
          setMyResume(res.data);
          console.log(myResume);
        })
        .then(token => {
          if (token !== null) {
            const token = localStorage.getItem('userToken') as string;
            const decoded: JwtPayload = jwt_decode(token);
            const userId = decoded.sub;

            if (userId) {
              localStorage.setItem('userId', userId);

              // user 정보 get
              return API.get(`/users/${userId}`);
            }
          }

          throw new Error('정보 가져오기 실패');
        })
        .then(res => {
          console.log(res.data.data);
          setUserNickName(res.data.data.nickname);
        })
        .catch(error => {
          console.log(error);
        });
    });
  }, []);

  const data = myResume;
  const menuItems = ['내 자기소개서', '내 정보'];

  return <UserFunc menuItems={menuItems} data={data} />;
}

export default User;
