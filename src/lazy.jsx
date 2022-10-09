import React, { lazy, Suspense } from 'react';
const About = lazy(() => import('./About'))
export default function App() {
  return (
    <>
      App
      {/* 懒加载，通过 const About = lazy(() => import('./About'))导入模块      <Suspense > 进行包裹   fallback={<div>loading</div>}  在加载之前应该显示的内容  */}
      <Suspense fallback={<div>loading</div>}>
        <About />
      </Suspense>
    </>
  );
}
