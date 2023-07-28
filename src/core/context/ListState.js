import dayjs from "dayjs";
import { useState } from "react";
import singleRoomImage from "../../assets/images/img1.jpg"
import doubleRoomImage from "../../assets/images/img2.png"
import queenRoomImage from "../../assets/images/img3.jpg"
import kingRoomImage from "../../assets/images/img4.jpg"

export const ListState = () => {
    const [list, setList] = useState([
        {id: '1', img: singleRoomImage, name: 'Single', price: '1500', desc: 'A single bed hotel room typically features a room with one twin-sized bed, designed to accommodate one guest.'},
        {id: '2', img: doubleRoomImage, name: 'Double', price: '2000', desc: 'A double bed hotel room typically features a room with two twin-sized beds or one double-sized bed, designed to accommodate two guests.'},
        {id: '3', img: queenRoomImage, name: 'Queen', price: '2800', desc: 'A queen-size bed hotel room typically features a room with one queen-sized bed, designed to accommodate two guests comfortably.'},
        {id: '4', img: kingRoomImage, name: 'King', price: '2800', desc: 'A king-size bed hotel room typically features a room with one king-sized bed, designed to accommodate two guests very comfortably, providing extra space for sleeping, relaxing, and sometimes additional amenities.'},
    ]);

    const [bookList, setReservationList] = useState([
        {id: '1', in: dayjs('03-28-2023'), out: dayjs('04-01-2023'), price: '2800',  fname: 'Adrian', lname: 'Bontigao', email: 'adrianbontigao@gmail.com', contact: '9979588556', room: 'King'}
    ])

    return {  
        availableList: {data: list, set: setList},
        reservationList: {data: bookList, set: setReservationList}
    };
}
