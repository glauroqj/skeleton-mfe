import type { ReactNode } from 'react';

export type SidemenuProps = {
  children?: ReactNode;
};

export function Sidemenu({ children }: SidemenuProps) {
  return (
    <div>
      {children}
    </div>
  );
}
