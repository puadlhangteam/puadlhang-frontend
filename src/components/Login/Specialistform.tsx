import { ChangeEvent, FormEvent, useState } from 'react'
import { FileUploader } from 'react-drag-drop-files'
import { useNavigate } from 'react-router-dom'
import subtract from '../../assets/icons/Subtract.svg'
import useUpdate from '../../hooks/useUpdate'

const Specialistform = () => {
  const navigate = useNavigate()
  const { uploadFile, sendSpecialist, isSubmitting } = useUpdate()
  const [selectedRole, setSelectedRole] = useState<string>()
  const [certificateImg, setCertificateImage] = useState<File | null>(null)
  const [description, setDescription] = useState<string>('')

  const handleDescriptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    setDescription(event.target.value)
  }
  const handleGeneral = (e: FormEvent) => {
    e.preventDefault()
    setSelectedRole('general')
  }

  const handleSpecialist = (e: FormEvent) => {
    e.preventDefault()
    setSelectedRole('specialist')
  }
  const handleFileChange = (file: File | null) => {
    if (file) {
      setCertificateImage(file)
    }
  }
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (selectedRole !== 'specialist') {
      navigate('/')
      return
    }
    try {
      if (!(typeof description === 'string')) {
        alert('Please select description')
        return
      }
      if (!certificateImg) {
        alert('Certificate required')
        return
      }
      const imagePath = await uploadFile(certificateImg)
      if (!imagePath) {
        alert('can not upload image')
        return
      }
      await sendSpecialist(imagePath, description)
      navigate('/')
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div className="flex-col justify-center items-center flex-1 top-36 sm:right-24 md:right-44 lg:right-20 xl:right-40 2xl:right-64 w-4/5  h-4/5 mx-auto">
      <div className="text-neutral-800 text-[31.25px] text-center font-bold font-['Zen Kaku Gothic Antique'] leading-9 flex justify-self-center">
        Join & Connect the Fastest Growing Online Community
      </div>

      <div className="mt-12">
        <form action="" className="mt-6 mx-12">
          <div className="my-5 mx-12 flex items-center gap-2">
            <label>Please select your role identity</label>
            <img src={subtract} />
          </div>
          <div className="my-10 mx-12 flex items-center gap-10">
            <button
              onClick={handleGeneral}
              className={`w-48 ${
                selectedRole === 'general' ? 'bg-orange-500' : 'bg-white'
              } text-black text-[30px] font-bold font-['Epilogue']  rounded-3xl py-3 active:scale-[0.98] active:deration-75 hover:scale-[1.01] ease-in-out transition-all `}
            >
              General
            </button>
            <button
              onClick={handleSpecialist}
              className={`w-48 ${
                selectedRole === 'specialist' ? 'bg-orange-500' : 'bg-white'
              } text-black text-[30px] font-bold font-['Epilogue']   rounded-3xl py-3 active:scale-[0.98] active:deration-75 hover:scale-[1.01] ease-in-out transition-all`}
            >
              Specialist
            </button>
          </div>
          {selectedRole === 'specialist' && (
            <div className="mt-12">
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
            </div>
          )}

          <div className="mt-[100px] text-center">
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="w-48 bg-orange-600 text-white text-lg font-bold rounded-3xl py-3 active:scale-[0.98] active:deration-75 hover:scale-[1.01] ease-in-out transition-all"
            >
              CONFRIM
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Specialistform
