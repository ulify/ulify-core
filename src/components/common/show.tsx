import React, { Fragment } from 'react';

export interface ShowProps<T> {
  when: T | undefined | null | false;
  fallback?: React.ReactNode;
  children: React.ReactNode | ((data: T) => React.ReactNode);
}
export function Show<T>(props: ShowProps<T>) {
  const { when, fallback = null, children } = props;
  const isFunc = typeof children === 'function';
  return (
    <Fragment>
      {when ? (isFunc ? children(when) : children) : fallback}
    </Fragment>
  );
}
