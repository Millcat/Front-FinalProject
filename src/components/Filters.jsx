import React from 'react'
import '../css/allTours.css'
import { Link } from "react-router-dom"

function Filters() {
    return (
        <div className="filters">

            <table>
                <tr>
                    <td><Link to="/">Food </Link> </td>
                    <td>Street Art</td>
                    <td>Fashion</td>
                    <td>Cinema</td>
                    <td>Insolite</td>
                    <td>Monument</td>
                    <td>Art</td>
                    <td>Sports</td>
                </tr>
            </table>
            <p>filters by thematics here</p>
            <p>filters by</p>
        </div>
    )
}

export default Filters
