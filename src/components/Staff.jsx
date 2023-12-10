import React, { useState } from 'react';

function Staff() {
    const initialRequests = 
        [
            {
                "id": 101,
                "apartmentNumber": 200,
                "area": "Kitchen",
                "date": "2023-03-15",
                "status": "pending"
            },
            {
                "id": 102,
                "apartmentNumber": 305,
                "area": "Bathroom",
                "date": "2023-04-22",
                "status": "completed"
            },
            {
                "id": 103,
                "apartmentNumber": 410,
                "area": "Living Room",
                "date": "2023-05-05",
                "status": "pending"
            },
            {
                "id": 104,
                "apartmentNumber": 102,
                "area": "Bedroom",
                "date": "2023-06-18",
                "status": "pending"
            },
            {
                "id": 105,
                "apartmentNumber": 250,
                "area": "Balcony",
                "date": "2023-07-21",
                "status": "completed"
            },
            {
                "id": 106,
                "apartmentNumber": 320,
                "area": "Hallway",
                "date": "2023-08-11",
                "status": "pending"
            },
            {
                "id": 107,
                "apartmentNumber": 210,
                "area": "Kitchen",
                "date": "2023-09-02",
                "status": "completed"
            },
            {
                "id": 108,
                "apartmentNumber": 105,
                "area": "Bathroom",
                "date": "2023-10-19",
                "status": "pending"
            },
            {
                "id": 109,
                "apartmentNumber": 400,
                "area": "Living Room",
                "date": "2023-11-30",
                "status": "completed"
            },
            {
                "id": 110,
                "apartmentNumber": 115,
                "area": "Bedroom",
                "date": "2023-12-25",
                "status": "pending"
            }
        ];

    const [requests, setRequests] = useState(initialRequests);
    const [filters, setFilters] = useState({ apartmentNumber: '', area: '', startDate: '', endDate: '', status: '' });

    const handleFilterChange = (event) => {
        setFilters({ ...filters, [event.target.name]: event.target.value });
    };

    const filteredRequests = requests.filter(request => {
        return (
            (filters.apartmentNumber === '' || request.apartmentNumber === parseInt(filters.apartmentNumber)) &&
            (filters.area === '' || request.area === filters.area) &&
            (filters.status === '' || request.status === filters.status) &&
            (filters.startDate === '' || new Date(request.date) >= new Date(filters.startDate)) &&
            (filters.endDate === '' || new Date(request.date) <= new Date(filters.endDate))
        );
    });

    const handleStatusUpdate = (requestId) => {
        setRequests(requests.map(request => 
            request.id === requestId ? { ...request, status: 'completed' } : request))
    };

    return (
        <div>
            <h1>Maintenance Requests</h1>

            {/* Filter Section */}
            <div>
                <input type="number" name="apartmentNumber" placeholder="Apartment Number" onChange={handleFilterChange} />
                <input type="text" name="area" placeholder="Area (e.g., kitchen)" onChange={handleFilterChange} />
                <input type="date" name="startDate" placeholder="Start Date" onChange={handleFilterChange} />
                <input type="date" name="endDate" placeholder="End Date" onChange={handleFilterChange} />
                <select name="status" onChange={handleFilterChange}>
                    <option value="">Select Status</option>
                    <option value="pending">Pending</option>
                    <option value="completed">Completed</option>
                </select>
            </div>

            {/* Display Filtered Requests in a Table */}
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Apartment Number</th>
                        <th>Area</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredRequests.map(request => (
                        <tr key={request.id}>
                            <td>{request.id}</td>
                            <td>{request.apartmentNumber}</td>
                            <td>{request.area}</td>
                            <td>{request.date}</td>
                            <td>{request.status}</td>
                            <td>
                                {request.status === 'pending' && (
                                    <button onClick={() => handleStatusUpdate(request.id)}>Mark as Completed</button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Staff;
