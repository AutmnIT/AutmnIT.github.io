import { useForm } from 'react-hook-form';

function WorkWithMe() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting }
  } = useForm();

  let onSubmit = (data)=>{
    {console.log(isSubmitting)}
    console.log(data)
    alert('Message sent! I’ll get back to you soon.');
    reset();
  }
  
  return (
    <div >
      <div className="portfolio py-9">
        <div className="flex justify-center p-8 ">
          <h2 className=' border-4 md:text-3xl p-4 md:px-18 font-bold tracking-widest'>Get In Touch!</h2>
        </div>
        <div className="content  max-w-[407px] m-auto ">
          <p className='text-center p-4'>Got a project idea, want to hire me for your company or just want to connect? </p>
          <p className='text-center p-2'>Drop me a message—I’d love to hear from you! </p>
        </div>

        <div className="form flex justify-center items-center" >
          <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-center'>

            <div className="username border-l-6 border-b-6 border-[var(--bg-logo)] w-[300px] md:w-[50vw] m-10">
              <input type="text" className=' p-3 w-full  focus:outline-none placeholder:text-[var(--text)] placeholder:font-bold'
                placeholder='ENTER YOUR NAME*'
                id='username'
                {...register("username",
                  {
                    required: { value: true, message: "This field is required" },
                  }
                )} />
              {errors.username && <div>{errors.username.message}</div>}
            </div>

            <div className="email border-l-6 border-b-6 border-[var(--bg-logo)] w-[300px] md:w-[50vw] m-10">
              <input type="email" className='p-3 w-full  focus:outline-none placeholder:text-[var(--text)] placeholder:font-bold'
                placeholder='ENTER YOUR EMAIL*'
                id='email'
                {...register("email",
                  {
                    required: { value: true, message: "This field is required" }
                  }
                )} />
              {errors.email && <div>{errors.email.message}</div>}
            </div>

            <div className="job-type border-l-6 border-b-6 border-[var(--bg-logo)] w-[300px] md:w-[50vw] m-10">
              <select {...register("option")} className='p-3 w-full  focus:outline-none placeholder:text-[var(--text)] placeholder:font-bold bg'>
                <option value="company" className='bg-[var(--bg)] font-bold'>Hire for Company</option>
                <option value="freelance" className='bg-[var(--bg)] font-bold'>Hire for Freelance</option>
                <option value="consult" className='bg-[var(--bg)] font-bold'>Consult</option>
              </select>
            </div>

            <div className="message border-l-6 border-b-6 border-[var(--bg-logo)]  md:w-[50vw] h-[200px] m-10">
              <textarea className='p-3 w-full h-full focus:outline-none placeholder:text-[var(--text)] placeholder:font-bold resize-none overflow-hidden whitespace-pre-wrap'
                placeholder='YOUR MESSAGE'
                {...register("message", {
                  maxLength: {
                    value: 500,
                    message: "Please explain in 500 characters for more contact on social media",
                  },
                }
                )}
                rows={5} />
              {errors.message && <div>{errors.message.message}</div>}
            </div>

                
            <div className="submit flex justify-center md:m-[50px] m-4">
              <button disabled={isSubmitting}  type="submit" value="SUBMIT" className='border-x-2 md:px-12 px-6 font-medium tracking-wider cursor-pointer'>SUBMIT</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default WorkWithMe
