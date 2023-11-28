import { useState } from 'react'

const CommentForm = ({
  btnLabel,
  formSubmitHanlder,
  formCancelHandler = null,
  initialText = '',
}) => {
  const [value, setValue] = useState(initialText)

  const submitHandler = (e) => {
    e.preventDefault()
    formSubmitHanlder(value)
    setValue('')
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="flex flex-col items-end border border-orange-500 rounded-lg p-4">
        <textarea
          className="w-full focus:outline-none bg-transparent"
          rows="5"
          placeholder="Leave your comment here..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <div className="flex items-center gap-x-2 pt-2">
          {formCancelHandler && (
            <button
              onClick={formCancelHandler}
              className="px-6 py-2.5 rounded-lg border border-orange-500 text-orange-500"
            >
              Cancel
            </button>
          )}
          <button
            type="submit"
            className="px-6 py-2.5 rounded-lg bg-orange-500
         text-white font-semibold"
          >
            {btnLabel}
          </button>
        </div>
      </div>
    </form>
  )
}

export default CommentForm