import React from 'react'

import SideBarCategory from './SideBarCategory'
import SideBarMenuBtn from './SideBarMenuBtn'
import { HomeModernIcon, ChartBarIcon, FilmIcon, PlusCircleIcon, TagIcon, ChatBubbleBottomCenterIcon, StarIcon, UsersIcon, UserPlusIcon, HomeIcon, GlobeEuropeAfricaIcon, PlayCircleIcon, Cog8ToothIcon, Cog6ToothIcon, LinkIcon, ArchiveBoxIcon, ArchiveBoxArrowDownIcon, ShieldCheckIcon, LockClosedIcon, ExclamationCircleIcon, WrenchScrewdriverIcon, TrashIcon, BellIcon, ArrowPathIcon } from '@heroicons/react/24/outline'

const SideNavBarMenu = () => {
    return (
        <nav className="-mx-3 space-y-6 ">
            <SideBarCategory title="Dashboard">
                <SideBarMenuBtn href="/admin">
                    <HomeModernIcon className="w-5 h-5" />
                    <span className="mx-2 text-sm font-medium">Overview</span>
                </SideBarMenuBtn>
                <SideBarMenuBtn href="/admin/analytics">
                    <ChartBarIcon className="w-5 h-5" />
                    <span className="mx-2 text-sm font-medium">Analytics</span>
                </SideBarMenuBtn>
            </SideBarCategory>

            <SideBarCategory title="Anime Management">
                <SideBarMenuBtn href="/admin/anime">
                    <FilmIcon className="w-5 h-5" />
                    <span className="mx-2 text-sm font-medium">All Anime</span>
                </SideBarMenuBtn>
                <SideBarMenuBtn href="/admin/anime/add">
                    <PlusCircleIcon className="w-5 h-5" />
                    <span className="mx-2 text-sm font-medium">Add New Anime</span>
                </SideBarMenuBtn>
                <SideBarMenuBtn href="/admin/genres">
                    <TagIcon className="w-5 h-5" />
                    <span className="mx-2 text-sm font-medium">Genres</span>
                </SideBarMenuBtn>
                <SideBarMenuBtn href="/admin/comments">
                    <ChatBubbleBottomCenterIcon className="w-5 h-5" />
                    <span className="mx-2 text-sm font-medium">Comments</span>
                </SideBarMenuBtn>
                <SideBarMenuBtn href="/admin/ratings-reviews">
                    <StarIcon className="w-5 h-5" />
                    <span className="mx-2 text-sm font-medium">Ratings & Reviews</span>
                </SideBarMenuBtn>
            </SideBarCategory>

            <SideBarCategory title="Episode Management">
                <SideBarMenuBtn href="/admin/episodes">
                    <FilmIcon className="w-5 h-5" />
                    <span className="mx-2 text-sm font-medium">All Episodes</span>
                </SideBarMenuBtn>
                <SideBarMenuBtn href="/admin/episodes/add">
                    <PlusCircleIcon className="w-5 h-5" />
                    <span className="mx-2 text-sm font-medium">Add New Episode</span>
                </SideBarMenuBtn>
            </SideBarCategory>

            <SideBarCategory title="User Management">
                <SideBarMenuBtn href="/admin/users">
                    <UsersIcon className="w-5 h-5" />
                    <span className="mx-2 text-sm font-medium">All Users</span>
                </SideBarMenuBtn>
                <SideBarMenuBtn href="/admin/users/add">
                    <UserPlusIcon className="w-5 h-5" />
                    <span className="mx-2 text-sm font-medium">Add New User</span>
                </SideBarMenuBtn>
            </SideBarCategory>

            <SideBarCategory title="Site Content">
                <SideBarMenuBtn href="/admin/home-page">
                    <HomeIcon className="w-5 h-5" />
                    <span className="mx-2 text-sm font-medium">Home Page</span>
                </SideBarMenuBtn>
                <SideBarMenuBtn href="/admin/landing-page">
                    <GlobeEuropeAfricaIcon className="w-5 h-5" />
                    <span className="mx-2 text-sm font-medium">Landing Page</span>
                </SideBarMenuBtn>
                <SideBarMenuBtn href="/admin/player-page">
                    <PlayCircleIcon className="w-5 h-5" />
                    <span className="mx-2 text-sm font-medium">Player Page</span>
                </SideBarMenuBtn>
            </SideBarCategory>

            <SideBarCategory title="Settings">
                <SideBarMenuBtn href="/admin/settings/general">
                    <Cog8ToothIcon className="w-5 h-5" />
                    <span className="mx-2 text-sm font-medium">General Settings</span>
                </SideBarMenuBtn>
                <SideBarMenuBtn href="/admin/settings/seo">
                    <Cog6ToothIcon className="w-5 h-5" />
                    <span className="mx-2 text-sm font-medium">SEO Settings</span>
                </SideBarMenuBtn>
                <SideBarMenuBtn href="/admin/settings/social-media">
                    <LinkIcon className="w-5 h-5" />
                    <span className="mx-2 text-sm font-medium">Social Media Links</span>
                </SideBarMenuBtn>
            </SideBarCategory>

            <SideBarCategory title="Backup & Restore">
                <SideBarMenuBtn href="/admin/backup/create">
                    <ArchiveBoxIcon className="w-5 h-5" />
                    <span className="mx-2 text-sm font-medium">Create Backup</span>
                </SideBarMenuBtn>
                <SideBarMenuBtn href="/admin/backup/restore">
                    <ArchiveBoxArrowDownIcon className="w-5 h-5" />
                    <span className="mx-2 text-sm font-medium">Restore from Backup</span>
                </SideBarMenuBtn>
            </SideBarCategory>

            <SideBarCategory title="Security">
                <SideBarMenuBtn href="/admin/security/admin-users">
                    <ShieldCheckIcon className="w-5 h-5" />
                    <span className="mx-2 text-sm font-medium">Admin Users</span>
                </SideBarMenuBtn>
                <SideBarMenuBtn href="/admin/security/roles-permissions">
                    <LockClosedIcon className="w-5 h-5" />
                    <span className="mx-2 text-sm font-medium">Roles & Permissions</span>
                </SideBarMenuBtn>
                <SideBarMenuBtn href="/admin/security/logs">
                    <ExclamationCircleIcon className="w-5 h-5" />
                    <span className="mx-2 text-sm font-medium">Security Logs</span>
                </SideBarMenuBtn>
            </SideBarCategory>

            <SideBarCategory title="Maintenance">
                <SideBarMenuBtn href="/admin/maintenance/mode">
                    <WrenchScrewdriverIcon className="w-5 h-5" />
                    <span className="mx-2 text-sm font-medium">Maintenance Mode</span>
                </SideBarMenuBtn>
                <SideBarMenuBtn href="/admin/maintenance/cleanup">
                    <TrashIcon className="w-5 h-5" />
                    <span className="mx-2 text-sm font-medium">Database Cleanup</span>
                </SideBarMenuBtn>
            </SideBarCategory>

            <SideBarCategory title="Update & Notifications">
                <SideBarMenuBtn href="/admin/notifications/admin">
                    <BellIcon className="w-5 h-5" />
                    <span className="mx-2 text-sm font-medium">Admin Notifications</span>
                </SideBarMenuBtn>
                <SideBarMenuBtn href="/admin/notifications/update">
                    <ArrowPathIcon className="w-5 h-5" />
                    <span className="mx-2 text-sm font-medium">Update Notifications</span>
                </SideBarMenuBtn>
            </SideBarCategory>

        </nav>
    )
}

export default SideNavBarMenu