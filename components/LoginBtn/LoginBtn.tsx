'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import { Button } from '@/components/ui/button';

export function LoginBtn() {
	const { data: session, status } = useSession();

	if (status === 'loading') return <Button disabled>Loading...</Button>;

	if (session) {
		return (
      <Button
        onClick={() => signOut()}
        variant={'custom'}
        className='p-0 cursor-pointer w-full justify-start'
      >
        Logout
      </Button>
		);
	}

	return <Button onClick={() => signIn('spotify')}>Login with Spotify</Button>;
}
