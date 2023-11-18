import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import movies from "../utils/movies";
import slug from "slug";

export default function SingleMovie() {
    const { movieName } = useParams();
    
    const singleMovie = () => {
        
    }
    return (
        <h1>Movie name: {}</h1>
    )
}