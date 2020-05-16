import React from 'react';
import data from '../data';


export default function User({userData}){
    return <div>
        <p className={'userNum'}>{userData.id}/{data.length}</p>
        <h1 className={'name'}>{userData.name.first} {userData.name.last}</h1>
        <p></p>
        <p><strong>From: </strong>{userData.city}, {userData.country}</p>
        <p><strong>Job Title: </strong>{userData.title}</p>
        <p><strong>Employer: </strong>{userData.employer}</p>
        <p><strong>Favorite Movies:</strong></p>
            <ol className='list'>
                <li>{userData.favoriteMovies[0]}</li>
                <li>{userData.favoriteMovies[1]}</li>
                <li>{userData.favoriteMovies[2]}</li>
            </ol>
    </div>
}