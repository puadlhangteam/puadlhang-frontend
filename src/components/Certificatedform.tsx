import { ChangeEvent, FormEvent } from 'react'
import useUpdate from '../hooks/useUpdate'
import { useNavigate } from 'react-router-dom'
import useUpload from '../hooks/useUpload'
import { FileUploader } from 'react-drag-drop-files'
import subtract from '../assets/icons/Subtract.svg'
import iconlogin from '../assets/icons/login/Userform.svg'

const Certificatedform = () => {
  const { uploadFile, setImageUpload, form, setForm } = useUpload()

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setImageUpload(event.target.files[0])
    }
  }

  const { isSubmitting, createSpecialistForm } = useUpdate()
  const navigate = useNavigate()

  const handleDescriptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    setForm((prevForm) => ({ ...prevForm, description: event.target.value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    try {
      if (!(typeof form.description === 'string')) {
        alert('Please select description')
        return
      }
      await uploadFile()
      const result = await createSpecialistForm(form.certificate, form?.description)
      console.log(result)
      navigate('/')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="flex w-full h-screen relative bg-[url('../src/assets/icons/bg.svg')]">
      <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center">
        <div className="absolute backdrop-blur-lg" />
        <div className="flex">
          <img src={iconlogin} alt="group" className="lg:p-8 lg:mt-8" />
        </div>
      </div>
      <div className="lg:w-8/12 w-full bg-white bg-opacity-50 rounded-3xl border-2 border-gray-100 flex justify-center items-center ">
        <div className="flex-col justify-center items-center top-36 sm:right-24 md:right-44 lg:right-20 xl:right-40 2xl:right-64 w-4/5 mx-auto">
          <div className="text-neutral-800 text-[31.25px] text-center font-bold font-['Zen Kaku Gothic Antique'] leading-9 flex justify-self-center">
            Join & Connect the Fastest Growing Online Community
          </div>

          <div className="mt-12">
            <form action="" onSubmit={handleSubmit} className="mt-6 mx-12">
              <div className="my-5 mx-12 flex items-center gap-2">
                <label>Please put your certificated identity</label>
                <img src={subtract} />
              </div>
              <div className="my-10 mx-12 flex items-center gap-10">
                <FileUploader type="file" handleChange={handleFileChange} />
              </div>
              <div className="my-10 mx-12 flex items-center gap-2">
                <label>Please select your description</label>
                <img src={subtract} />
              </div>
              <div className="mt-8 mx-12 flex justify-between items-center">
                <div>
                  <input
                    type="text"
                    onChange={handleDescriptionChange}
                    className="text-gray-600 dark:text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-transparent font-normal w-full h-10 flex items-center pl-3 p-4 mt-1 text-sm border-gray-500 rounded-xl border shadow"
                    placeholder="Enter your description..."
                  />
                </div>
              </div>
              <div className="mt-[100px] text-center">
                <button
                  type="submit"
                  className="w-48 bg-orange-600 text-white text-lg font-bold rounded-3xl py-3 active:scale-[0.98] active:deration-75 hover:scale-[1.01] ease-in-out transition-all"
                >
                  {isSubmitting ? 'confriming...' : 'confrim'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Certificatedform
