import { Link } from 'react-router-dom';
import register from '../../assets/image/register.jpg'
import logo from '../../assets/image/logo.png'

const Register = () => {
    return (
        <div>
            <div className="hero min-h-screen pt-10" style={{ backgroundImage: `url(${register})` }}>
                <div className="w-full bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content w-full">
                    <div className="w-full max-w-lg  p-4 rounded-md shadow sm:p-8 bg-[#08081dE6] dark:text-orange-400">
                        <img className='mx-auto py-5' src={logo} alt="" />
                        <h2 className="mb-3 text-3xl font-semibold text-center">Please Register Now!</h2>
                        <p className="text-sm text-center dark:text-gray-600">Already have account? Please
                            <Link to="/login" href="#" rel="noopener noreferrer" className="focus:underline hover:underline text-orange-400 "> Login</Link>
                        </p>

                        <div className="flex items-center w-full my-4">
                            <hr className="w-full dark:text-gray-600" />
                            <p className="px-3 dark:text-orange-600">---</p>
                            <hr className="w-full dark:text-gray-600" />
                        </div>
                        <form noValidate="" action="" className="space-y-8 ">
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="block text-left text-sm">Name</label>
                                    <input type="text" name="name" id="name" placeholder="Write Your Name" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="photo" className="block text-left text-sm">Photo URL</label>
                                    <input type="text" name="photo" id="photo" placeholder="Write Your PHOTO URL" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="block text-left text-sm">Email address</label>
                                    <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                                </div>

                                <div className="space-y-2">
                                    <div className="flex justify-between">
                                        <label htmlFor="password" className="text-sm">Password</label>

                                    </div>
                                    <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                                </div>
                            </div>
                            <button type="button" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-orange-500 border border-orange-500 dark:text-white hover:bg-transparent hover:text-orange-500">Sign in</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;