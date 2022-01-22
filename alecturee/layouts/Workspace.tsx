import fetcher from '@utils/fetcher';
import axios from 'axios';
import { type } from 'os';
import React, { useCallback, ReactNode } from 'react';
import { Redirect } from 'react-router';
import useSWR from 'swr';

type Props = {
  children?: ReactNode;
};
function Workspace({ children }: Props) {
  const { data, error, revalidate, mutate } = useSWR('http://localhost:3095/api/users', fetcher);

  const onLogout = useCallback(() => {
    axios
      .post('http://localhost:3095/api/users/logout', null, {
        withCredentials: true,
      })
      .then(() => {
        revalidate();
      });
  }, []);

  if (!data) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <button onClick={onLogout}> 로그아웃</button>
      {children}
    </div>
  );
}

export default Workspace;
