import React from 'react'
import Loading from './Loading'

const ImgPreview = (props) => {
  return (
    <div className='mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl'>
      <div className="bg-blue w-full h-96 object-cover shadow-lg rounded-xl overflow-hidden">
        <h2 className="text-xl font-semibold text-center bg-gray-900 text-white py-2">
          Original Image
        </h2>
        {props.uploaded ? (
                  <div className="flex items-center justify-center h-100 bg-black">

                    <img
                        src={props.uploaded}
                        alt=""
                        className="max-w-full max-h-full object-contain"
                    />
                </div>
                ) : (
                    <div className="flex items-center justify-center h-100 bg-gray-200">
                        No Image Selected
                    </div>
                )}
      </div>

      <div className="bg-blue w-full h-96 object-cover shadow-lg rounded-xl overflow-hidden">
        <h2 className="text-xl font-semibold text-center bg-blue-800 text-white py-2">
          Enhanced Image
        </h2>
        {props.enhanced && !props.loading && (
          <div className="flex items-center justify-center h-100 bg-black">
            
            <img
              src={props.enhanced}
              alt=""
              className="max-w-full max-h-full object-contain"
            />
          </div>
        )}
        {props.loading ? (
          <Loading />
      ) :
        (  <div className="flex items-center justify-center h-100 bg-gray-200">
          No Image Selected
        </div>
        )
      }
      </div>
    </div>
  )
}

export default ImgPreview