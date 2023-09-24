'use client'

import Link from 'next/link'
import Image from 'next/image'
import { platforms, genres } from '@/lib'
import React from 'react';
import { signIn, signOut } from 'next-auth/react';

export default function Header({ user }: { user: any }) {
    const [service, setService] = React.useState('');
    const index = Number(service);
    const [genre, setGenre] = React.useState('Pop');
    const [numSongs, setNumSongs] = React.useState('10');

    return (
        <div className='flex flex-col p-8 bg-slate-100'>
            <div className='flex justify-between'>
                <Link href={platforms[index].link}>
                    <Image
                        src={platforms[index].logo}
                        width={160}
                        height={160}
                        alt={platforms[index].title}
                    />
                </Link>
                {user ? (
                    <button onClick={() => signOut()}>Sign Out</button>
                ) : (
                    <button onClick={() => signIn()}>Sign In</button>
                )}
            </div>

            <h1>Top {numSongs} {genre} Songs</h1>

            <div className='flex justify-between mt-8'>
                <select className='mr-4' onChange={(event) => setService(event.currentTarget.value)}>
                    {platforms.map((platform, index) => (
                        <option key={platform.title} value={index}>{platform.title}</option>
                    ))}
                </select>
                <div>
                    <select className='mr-4' onChange={(event) => setGenre(event.currentTarget.value)}>
                        {genres.map((genre) => (
                            <option key={genre.id} value={genre.title}>{genre.title}</option>
                        ))}
                    </select>
                    <select onChange={(event) => setNumSongs(event.currentTarget.value)}>
                        <option value="10">10</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                        <option value="200">200</option>
                        <option value="500">500</option>
                    </select>
                </div>
            </div>
        </div>
    )
}