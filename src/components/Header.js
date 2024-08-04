import React, { useEffect } from 'react';
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';

const Header = () => {
    const navigate = useNavigate();
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                navigate('/');
            })
            .catch((error) => {
                navigate('/error');
            });
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ id: uid, email, displayName, photoURL }));
                navigate("/browse")
            } else {
                dispatch(removeUser());
                navigate("/");
            }
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, [dispatch,navigate]);

    return (
        <div className='absolute w-screen px-10 py-4 bg-gradient-to-br from-black z-10 flex justify-between'>
            <img className="w-56" alt="Netflix Logo" src={LOGO} />
            {user && (
                <div className='flex items-center'>
                    <img className='w-12 h-12' src={user?.photoURL} alt="userIcon" />
                    <button className='px-1 font-bold text-white' onClick={handleSignOut}>Sign out</button>
                </div>
            )}
        </div>
    );
};

export default Header;
