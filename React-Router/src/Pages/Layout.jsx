import { Outlet, Link } from 'react-router-dom';

export default function Layout(){
    return (
        <>
            <nav>
               <ul>
                    <li>
                        <Link to='/' >Home</Link>
                    </li>
                    <li>
                        <Link to='/welcome'>Welcome</Link>
                    </li>
                    <li>
                        <Link to='/greet'>Greeting</Link>
                    </li>
                    <li>
                        <Link to='/clock'>Time now</Link>
                    </li>
                    <li>
                        <Link to='/log'>Get Message</Link>
                    </li>
                    <li>
                        <Link to='/pagination'>Pagination</Link>
                    </li>
                    <li>
                        <Link to='/Expense-form'>Expense Form</Link>
                    </li>
                    <li>
                        <Link to='/unkown'>Unkown</Link>
                    </li>
                </ul> 
            </nav>
            <Outlet />
        </>
    )
}