import React, { useEffect, useState } from 'react';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import smoothscroll from 'smoothscroll-polyfill';
import * as SC from './ScrollArrowSC';

interface Props {
  landing: boolean;
}

const ScrollArrow: React.FunctionComponent<Props> = ({ landing }) => {
  const [showScroll, setShowScroll] = useState(false);

  // 스크롤이 최상단에 있는지 체크
  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  // 화면 최상단으로 올리기 위한 코드
  const scrollTop = () => {
    smoothscroll.polyfill();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);

    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  });
  return (
    <HiOutlineChevronDoubleUp
      className={SC.ScrollArrowTop}
      onClick={scrollTop}
      style={{
        color: landing ? '#fff' : '#000',
        display: showScroll ? 'flex' : 'none',
      }}
    />
  );
};

export default ScrollArrow;
