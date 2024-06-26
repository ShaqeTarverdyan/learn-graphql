import { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import './userForm.css'

const CREATE_USER_MUTATION = gql`
  mutation CreateUser($createUserData: CreateUserDto!) {
    createUser(createUserData: $createUserData) {
      username
      user_id
    }
  }
`;

const USER_DATA = {
    username: '',
    name: '',
    role: '',
    user_id: '',
    expertise: '',
    customer_number: ''
}
const UserForm = () => {
    const [formData, setFormData] = useState({...USER_DATA});

    const [createUser, { data, loading, error }] = useMutation(CREATE_USER_MUTATION);
    const handleChange = (e: { target: { name: string; value: string; }; }) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const updatedFormData = {
            ...formData,
            customer_number: parseInt(formData.customer_number, 10)
        };

        console.log('Form data:', updatedFormData);
        createUser({ variables: { createUserData: updatedFormData } });
        setFormData({...USER_DATA});
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="user">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="role">Role:</label>
                <input
                    type="text"
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="user_id">User ID:</label>
                <input
                    type="string"
                    id="user_id"
                    name="user_id"
                    value={formData.user_id}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="expertise">Expertise:</label>
                <input
                    type="string"
                    id="expertise"
                    name="expertise"
                    value={formData.expertise}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="customer_number">Customer Number:</label>
                <input
                    type="number"
                    id="customer_number"
                    name="customer_number"
                    value={formData.customer_number}
                    onChange={handleChange}
                />
            </div>
            <div>
                <button type="submit" disabled={loading}>
                    {loading ? 'Submitting...' : 'Submit'}
                </button>
            </div>
            {error && <p className='error_message'>Error: {error.message}</p>}
            {data && <p className='success_message'>Success! User created: {data.createUser.username}</p>}
        </form>
    );
};

export default UserForm;
