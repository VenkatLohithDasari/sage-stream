import options from '../api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation'

export default async function RootLayout({ children }) {
    const session = await getServerSession(options)

    if (!!session) {
        redirect('/home');
        return null;
    } else {
        return (
            <div className="dark:bg-neutral-900 dark:text-gray-200 min-h-screen">
                {children}
            </div>
        )
    }
}