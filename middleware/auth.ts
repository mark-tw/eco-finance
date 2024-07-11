import { Context } from '@nuxt/types';
import { getCookie } from '@/utils/cookieHelper';

export default function ({ route, redirect, req }: Context) {
  const isAuthenticated = getCookie('auth', req) === 'true';

  if (isAuthenticated && route.path === '/') {
    return redirect('/protected');
  }

  if (!isAuthenticated && route.path === '/protected') {
    return redirect('/');
  }
}
