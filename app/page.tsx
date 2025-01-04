"use client";

import { ToastProvider, toast } from 'react-basic-toastify';

export default function Home() {
  return (
    <ToastProvider position="top-right">
      <ToastButtons />
    </ToastProvider>
  );
}

function ToastButtons() {
  const showSuccess = () => {
    console.log('Status: Success');
    toast.success('Success!', 3000);
  };

  const showError = () => {
    console.log('Status: Error');
    toast.error('어쩌구 프로젝트가 저장되지 않았습니다. 다시 시도하시겠습니까?', 5000,  true);
  };

  const showInfo = () => {
    console.log('Status: Info');
    toast.info('Here is some information.', 3000, false);
  };

  return (
    <div>
      <button onClick={showSuccess}>Show Success Toast</button>
      <button onClick={showError}>Show Error Toast</button>
      <button onClick={showInfo}>Show Info Toast</button>
    </div>
  );
}
