import { useFormik } from "formik"

function Formik() {

  const initialValues = {
    username: '',
    email: '',
    password: '',
  }
  const onSubmit = (values) => {
    console.log(values)
  }
  const validate = (values) => {
    let errors = {}
    if (!values.username) {
      errors.username = 'Fill usename'
    }
    if (!values.email) {
      errors.email = 'Fill email'
    }
    if (!values.password) {
      errors.password = 'Fill password'
    }
    return errors
  }

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate
  })

  const { values, errors, handleSubmit, handleChange, handleBlur } = formik

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-800">
        <div className="rounded-2xl px-8 py-6 mx-4 mt-4 text-left bg-gray-700  md:w-1/3 lg:w-1/3 sm:w-1/3">
          <h3 className="text-2xl font-bold text-center text-white">Join us</h3>
          <form action="" onSubmit={handleSubmit}>
            <div className="mt-4">
              <div>
                <label className="block text-white" htmlFor="Name">Name</label>
                <input type="text" onBlur={handleBlur} onChange={handleChange} value={values.username} name="username" placeholder="Name"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 bg-gray-700 border-gray-500 text-white" />
              </div>
              {
                errors.username && formik.touched.username && <span className="text-xs text-red-400">{errors.username}</span>
              }
              <div className="mt-4">
                <label className="block text-white" htmlFor="email">Email</label>
                <input type="text" onBlur={handleBlur} onChange={handleChange} value={values.email} name="email" placeholder="Email"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 bg-gray-700 border-gray-500 text-white" />
              </div>
              {
                errors.email && formik.touched.email && <span className="text-xs text-red-400">{errors.email}</span>
              }
              <div className="mt-4">
                <label className="block text-white">Password</label>
                <input type="password" onBlur={handleBlur} onChange={handleChange} value={values.password} name="password" placeholder="Password"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 bg-gray-700 border-gray-500 text-white" />
              </div>
              {
                errors.password && formik.touched.password && <span className="text-xs text-red-400">{errors.password}</span>
              }
              <div className="flex">
                <button className="w-full px-6 py-2 mt-4 text-white bg-cyan-600 rounded-lg hover:bg-blue-900">
                  Create
                  Account
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Formik