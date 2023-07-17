import options from '../api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth';

import NavBar from '@/components/NavBar/NavBar';
import Container from '@/components/Container';

export default async function RootLayout({ children }) {
    const session = await getServerSession(options)

    return (
        <div className="dark:bg-neutral-900 dark:text-gray-200 min-h-screen">
            <NavBar session={session} />
            <Container session={session}>
                {children}
            </Container>
        </div>
    )
}