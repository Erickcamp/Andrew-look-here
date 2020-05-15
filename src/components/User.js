import React from 'react';
import data from '../data';


export default function User({userData}){
    return <div>
        <h1>{userData.id}</h1>
        <p>/{data.length}</p>
        <span>{userData.name.first} {userData.name.last}</span>
        <p></p>
        <span>{userData.city}</span>
        <p></p>
        <span>{userData.country}</span>
        <p></p>
        <span>{userData.employer}</span>
        <p></p>
        <span>{userData.title}</span>
            <ol>1. {userData.favoriteMovies[0]}</ol>
            <ol>2. {userData.favoriteMovies[1]}</ol>
            <ol>3. {userData.favoriteMovies[2]}</ol>
    </div>
}