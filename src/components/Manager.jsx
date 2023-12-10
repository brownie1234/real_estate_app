import React from 'react';

export default function Manager() {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Add logic to handle the form submission here
        console.log('Form submitted');
    };

    return (
        <div>
            <h1>Tenant Management</h1>

            {/* Form to Add a New Tenant */}
            <h2>Add New Tenant</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="tenantId" placeholder="Tenant ID" required />
                <input type="text" name="name" placeholder="Name" required />
                <input type="tel" name="phoneNumber" placeholder="Phone Number" required />
                <input type="email" name="email" placeholder="Email" required />
                <input type="date" name="checkInDate" placeholder="Check-In Date" required />
                <input type="date" name="checkOutDate" placeholder="Check-Out Date" required />
                <input type="number" name="apartmentNumber" placeholder="Apartment Number" required />
                <button type="submit">Add Tenant</button>
            </form>

            {/* Form to Move a Tenant */}
            <h2>Move Tenant</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="tenantId" placeholder="Tenant ID" required />
                <input type="number" name="newApartmentNumber" placeholder="New Apartment Number" required />
                <button type="submit">Move Tenant</button>
            </form>

            {/* Form to Delete a Tenant */}
            <h2>Delete Tenant</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="tenantId" placeholder="Tenant ID" required />
                <button type="submit">Delete Tenant</button>
            </form>
        </div>
    );
}


