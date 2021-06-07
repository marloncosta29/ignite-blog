import { useRouter } from 'next/router';
import style from './header.module.scss';

export default function Header() {
  const router = useRouter();
  return (
    <div className={style.container}>
      <img
        src="/images/logo.svg"
        alt="logo"
        onClick={() => {
          router.push('/');
        }}
      />
    </div>
  );
}
