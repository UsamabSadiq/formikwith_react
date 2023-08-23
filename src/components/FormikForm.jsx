import { useFormik } from 'formik'
import React from 'react'
import { FormSchema } from '../FormSchema'

const FormikForm = () => {

  const formInitialValues = {
    // below name aur email input element ma name attribute ha 
    name: "", // yaha pr same kaam useState wala ha jab hum state bnaty thy tw useState ma empty strings paas kr ty thy jissy hamari initial state ma emppty valye jaye gi, yaha bhi same kaam hua ha.
    email: ""
  }

  const Formik = useFormik({
    initialValues: formInitialValues,
    validationSchema: FormSchema,
    onSubmit: (values) => { // values parameter ma hamain sab mill user jo data input kry ga wo mill jaye ga.
      console.log(values);
    }
  })
  return (
    <>
      <form onSubmit={Formik.handleSubmit} className='flex flex-col items-center justify-center border-2 h-screen' >
        <div className="form-content border-1 shadow-md  py-4 px-6">
          <div className='name my-2'>
            <label htmlFor="name" className='text-lg'>Name:</label> <br />
            <input id='name' placeholder='Enter Name' name='name' onChange={Formik.handleChange} value={Formik.values.name} className='border-b-2 px-2 mt-2 outline-none focus:border-black' />
            <br /> <span className='text-red-500'>{Formik.errors.name}</span>
          </div>
          <div className='email my-2'>
            <label htmlFor="email" className='text-lg'>Email:</label> <br />
            <input id='email' placeholder='Enter Email' name='email' onChange={Formik.handleChange} value={Formik.values.email} className='border-b-2 px-2 mt-2 outline-none focus:border-black' />
            <br /> <span className='text-red-500'>{Formik.errors.email}</span>

          </div>
        </div>
        <button type='submit' className='mt-4 bg-blue-500 text-lg text-white hover:bg-blue-400 px-7 rounded-md py-1'>Submit Form</button>

      </form>
    </>
  )
}

export default FormikForm
