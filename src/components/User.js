import React from 'react';
import data from '../data';


export default function User({userData}){
    return <div>
        <h1 className={'h1'}>{userData.id}</h1>
        <p className={'total'}>/{data.length}</p>
        <span className={'name'}>{userData.name.first} {userData.name.last}</span>
        <p></p>
        <span className={'from'}>From: </span>
        <span className={'location'}>{userData.city}, {userData.country}</span>
        <p></p>
        <span className={'title'}>Job Title:</span>
        <span className={'job'}>{userData.title}</span>
        <p></p>
        <span className={'employer'}>Employer: </span>
        <span className={'employer-name'}>{userData.employer}</span>
        <p></p>
        <span className={'movies'}>Favorite Movies:</span>
            <ol className={'list'}>1. {userData.favoriteMovies[0]}</ol>
            <ol className={'list'}>2. {userData.favoriteMovies[1]}</ol>
            <ol className={'list'}>3. {userData.favoriteMovies[2]}</ol>
    </div>
}