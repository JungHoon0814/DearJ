import React from 'react';

import Landing1 from '../../components/landing/landing1/Landing1';
import Landing2 from '../../components/landing/landing2/Landing2';
import Landing3 from '../../components/landing/landing3/Landing3';
import Landing4 from '../../components/landing/landing4/Landing4';
// import ScrollArrow from '../../components/scrollarrow/ScrollArrow';

// interface IntrinsicAttributes {
//   landing?: boolean;
// }
// interface Props extends IntrinsicAttributes {
//   landing: boolean;
// }
// React.FC<Props> ({ landing })

const Home = () => {
  return (
    <div>
      {/* <ScrollArrow landing={true} /> */}
      {/* 홈에서는 랜딩효과만 불러올 예정 */}
      <Landing1 />
      <Landing2 />
      <Landing3 />
      <Landing4 />
    </div>
  );
};

export default Home;
